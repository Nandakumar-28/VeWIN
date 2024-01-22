import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { ConfirmationService } from 'primeng/api';
import { ROUTE_PATH } from '../../../shared/constants/route-path.constant';
import { HttpStatusCode } from '@angular/common/http';
import { PaymentsService } from '../services/payments.service';
import { PaymentDeleteComponent } from './payment-delete.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BestperformerService } from '../../bestperformer/services/bestperformer.service';
import { debounceTime, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';


@Component({
  selector: 'ngx-payments-list',
  templateUrl: './payments-list.component.html',
  styleUrls: ['./payments-list.component.scss']
})
export class PaymentsListComponent implements OnInit {

  AddPaymentForm: FormGroup;

  submitted = false;
  data_loading = false;

  itemsPerPage: any[] = [10, 25, 50];
  users: any;
  columns: any[]; // for table columns

  first = 0;
  rows = 10;

  //summit button size 
  small = 'small';

  results: string[];

  constructor(
    private dialogConfirmService: ConfirmationService,
    private toastrService: NbToastrService,
    private router: Router,
    private aRoute: ActivatedRoute,
    private paymentService: PaymentsService,
    private dialogService: NbDialogService,
    private formBuilder: FormBuilder,
    private userService: BestperformerService,

  ) { }

  ngOnInit() {

    this.AddPaymentFormInitialize();
    // table   with their respective field name and header value
    this.columns = [
      { field: "id", header: "Id", show: true, sort: true },
      { field: "month", header: "Month", show: true, sort: true },
      { field: "year", header: "Year", show: true, sort: true },
      { field: "amount", header: "Amount", show: true, sort: true },
      { field: "date", header: "Date", show: true, sort: true },
      { field: "bank", header: "Bank", show: true, sort: true },
      { field: "payment", header: "Payment", show: true, sort: true },
      { field: "remarks", header: "Remarks", show: true, sort: true },

    ];

    // Subscribe to changes in the 'name' control and make API requests
    this.AddPaymentForm.get('name').valueChanges.pipe(
      debounceTime(300),
      switchMap((name) => {
        // Make the API request only if the name has at least 3 characters
        if (name && name.length >= 3) {
          return this.userService.getReferralIds(name);
        } else {
          // Return an empty observable if the input length is less than 3 characters
          return of([]);
        }
      })
    ).subscribe((response) => {
      this.results = response;
    });
  }

  onNameInputChange(event: any) {
    const name = event.query
    // Make the API request only if the name has at least 3 characters
    if (name.length >= 3) {
      this.userService.getReferralIds(name).subscribe((response) => {
        let data = []
        response.forEach((item: any) => {
          data.push(item.idAndName)
        })
        this.results = data
      });
    } else {
      // Clear the results if the input length is less than 3 characters
      this.results = [];
    }
  }

  /**
   * User Form Initialize
   */

  AddPaymentFormInitialize() {
    this.AddPaymentForm = this.formBuilder.group({
      name: ["", [Validators.required]],
      monthAndYear: ["", [Validators.required]],
    });
  }


  /**
   * create Payment
   * @param
   * @returns
   */
  makePayment() {

    this.paymentService.setUserDetails(null);
    this.router.navigate([
      ROUTE_PATH.ADMIN,
      ROUTE_PATH.PAYMENT,
      ROUTE_PATH.PAYMENTS.CREATE,
    ]);
  }

  /**
   * Edit Payment
   * @param user_id
   * @returns
   */
  editPayment(user: any) {
    this.paymentService.setUserDetails(user); // Pass the selected user details to the service
    this.router.navigate([
      ROUTE_PATH.ADMIN,
      ROUTE_PATH.PAYMENT,
      ROUTE_PATH.PAYMENTS.EDIT,
      user.id
    ]);
  }

  /**
   * Delete Payment confirmation
   * @param userId, userName
   * @returns
   */
  confirmDelete(user: any) {
    this.dialogService.open(PaymentDeleteComponent, {
      context: { user },
    }).onClose.subscribe((result) => {
      if (result) {
        this.deletePayment(user.id);
      }
    });
  }

  /**
   * Delete Payment
   * @param userId
   * @returns
   */
  deletePayment(id) {
    // let deletePostData = { userId: userId };

    this.paymentService.deletePayment(id).subscribe(
      (response) => {
        if (HttpStatusCode.Ok) {
          this.toastrService.show(response["message"], "Success", {
            status: "success",
            duration: 8000,
          });
          this.onSubmit();
        } else {
          this.toastrService.show(response["message"], "Warning", {
            status: "warning",
            duration: 8000,
          });
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  /**
   * Payment List
   * @param null
   * @returns
   */


  onSubmit() {
    this.submitted = true;

    const selectedName = this.AddPaymentForm.value.name;
    const selectedDate = this.AddPaymentForm.value.monthAndYear;

    if (selectedDate && selectedName) {
      // Convert the month to a string representation (e.g., January, February)
      const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(selectedDate);
      const year = selectedDate.getFullYear().toString(); // Convert the year to a string
      const customerId = selectedName.split('-')[0]; // Extract the ID from the selectedName

      const requestBody = {
        customerId: customerId,
        month: month,
        year: year
      };

      this.paymentApiRequest(requestBody);
    } else if (selectedName) {

      const customerId = selectedName.split('-')[0]; // Extract the ID from the selectedName

      const requestBody = {
        customerId: customerId,
        month: "",
        year: ""
      };

      this.paymentApiRequest(requestBody);
    } else if (selectedDate) {
      // Convert the month to a string representation (e.g., January, February)
      const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(selectedDate);
      const year = selectedDate.getFullYear().toString(); // Convert the year to a string
      // If the name is not selected, send the API request with an empty name
      const requestBody = {
        customerId: "",
        month: month,
        year: year
      };
      this.paymentApiRequest(requestBody);
    }

  }

  // Extracted the API request logic to a separate function
  private paymentApiRequest(requestBody: any) {
    this.paymentService.getPaymentList(requestBody)
      .subscribe((response) => {
        this.users = response;
      })
  }
}



