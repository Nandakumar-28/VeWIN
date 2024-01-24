/** 
* This file contains Payment Details add-edit related functions
* dev: T.Nanda Kumar
*/

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { DatePipe } from '@angular/common';
import { Subscription, of } from 'rxjs';
import { HttpStatusCode } from '@angular/common/http';
import { ROUTE_PATH } from '../../../shared/constants/route-path.constant';
import { PaymentsService } from '../services/payments.service';
import { BestperformerService } from '../../bestperformer/services/bestperformer.service';

@Component({
  selector: 'ngx-payment-add-edit',
  templateUrl: './payment-add-edit.component.html',
  styleUrls: ['./payment-add-edit.component.scss']
})
export class PaymentAddEditComponent implements OnInit {

  AddPaymentForm: FormGroup;
  GetSalesForm: FormGroup;

  //Submit click to hide
  submitted = false;
  data_loading = false;

  //userlist pass user data
  paymentDetails: any;
  page_title: string;

  //summit button size 
  small = 'small';

  results: string[];

  // totalSales response
  sales: any;

  private paymentSubscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private aRoute: ActivatedRoute,
    private paymentService: PaymentsService,
    private toastrService: NbToastrService,
    private datePipe: DatePipe,
    private userService: BestperformerService,

  ) { }


  ngOnInit(): void {
    this.AddPaymentFormInitialize();

    if (this.router.url.indexOf("edit") !== -1) {
      // this.data_loading = true;
      const id = this.aRoute.snapshot.paramMap.get("title");
      this.page_title = "Edit Payment Details";

      // Disable form controls for editing
      this.GetSalesForm.get('cid').disable();
      this.GetSalesForm.get('monthAndYear').disable();

    } else {
      this.page_title = "Add Payment Details";
      this.AddPaymentForm.reset();
    }


    // Check if user details are passed user list, service to user-edit

    this.paymentSubscription = this.paymentService.getUserDetails().subscribe(user => {
      if (user) {
        this.paymentDetails = user;
        // Pre-fill the form with user details
        this.AddPaymentForm.patchValue({
          salesAmount: this.paymentDetails.salesAmount,
          dateOfPayment: new Date(this.paymentDetails.dateOfPayment),
          bank: this.paymentDetails.bank,
          paymentDetails: this.paymentDetails.paymentDetails,
          remarks: this.paymentDetails.remarks,
        });

        // Extracted year and month values from the paymentDetails
        const year = this.paymentDetails.year;
        const month = this.paymentDetails.month;

        // Convert the month string to a numerical representation (e.g., "January" to 0, "February" to 1, etc.)
        const monthIndex = new Date(`${month} 1, 2000`).getMonth();

        this.GetSalesForm.patchValue({
          cid: this.paymentDetails.cid,
          monthAndYear: new Date(year, monthIndex)
        });
      } else {
        this.AddPaymentForm.reset(); // Ensure the form is reset when no user details are present
      }
    });
    // Subscribe to changes in the 'name' control and make API requests
    this.GetSalesForm.get('cid').valueChanges.pipe(
      debounceTime(300),
      switchMap((cid) => {
        // Make the API request only if the name has at least 3 characters
        if (cid.length >= 3) {
          return this.userService.getReferralIds(cid);
        } else {
          // Return an empty observable if the input length is less than 3 characters
          return of([]);
        }
      })
    ).subscribe((response) => {
      this.results = response;
    });

  }

  ngOnDestroy(): void {
    // Unsubscribe to prevent multiple subscriptions when leaving the component
    this.paymentSubscription.unsubscribe();
  }

  /**
   * Payment Details Form Initialize
   */

  AddPaymentFormInitialize() {
    this.AddPaymentForm = this.formBuilder.group({
      salesAmount: ["", [Validators.required]],
      dateOfPayment: [new Date(), [Validators.required]],
      bank: ["", [Validators.required]],
      paymentDetails: ["", [Validators.required]],
      remarks: ["", [Validators.required, Validators.maxLength(100)]],
    });
    this.GetSalesForm = this.formBuilder.group({
      cid: ["", [Validators.required]],
      monthAndYear: ["", [Validators.required]],
    });

  }

  onNameInputChange(event: any) {
    const cid = event.query
    // Make the API request only if the name has at least 3 characters
    if (cid.length >= 3) {
      this.userService.getReferralIds(cid).subscribe((response) => {
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

  totalSales() {
    // Disable form controls for editing
    this.GetSalesForm.get('cid').disable();
    this.GetSalesForm.get('monthAndYear').disable();

    if (this.GetSalesForm.invalid) {
      return;
    }

    const selectedResult = this.GetSalesForm.value.cid;
    const customerId = selectedResult.split('-')[0]; // Extract the ID from the result

    // Extract the month and year from the selected date
    const selectedDate = this.GetSalesForm.value.monthAndYear;

    // Convert the month to a string representation (e.g., January, February)
    const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(selectedDate);
    const year = selectedDate.getFullYear().toString(); // Convert the year to a string
    const requestBody = {
      customerId: customerId,
      month: month,
      year: year
    };

    this.paymentService.getTotalSales(requestBody)
      .subscribe((response) => {
        this.sales = response;
        // Pre-fill the form with user details
        this.AddPaymentForm.patchValue({
          salesAmount: this.sales.totalSales,
        });
      });
  }



  onSubmit() {
    this.submitted = true;

    if (this.AddPaymentForm.invalid) {
      return;
    }

    // Format the date strings before sending them to the server
    const formattedDate = this.datePipe.transform(this.AddPaymentForm.value.dateOfPayment, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");

    // Get the current date and time in the desired format
    const modifiedDate = this.datePipe.transform(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");

    // Check if the URL contains 'edit' to differentiate between create and edit actions
    if (this.router.url.indexOf("edit") !== -1) {
      //customer id split in id
      // const selectedResult = this.AddPaymentForm.value.cid;
      // const customerId = selectedResult.split('-')[0]; // Extract the ID from the result

      // For editing, form a request body with put method fields
      const requestBody = {
        id: this.paymentDetails.id,
        cid: this.paymentDetails.cid,
        month: this.paymentDetails.month,
        year: this.paymentDetails.year,
        salesAmount: this.AddPaymentForm.value.salesAmount,
        dateOfPayment: formattedDate,
        bank: this.AddPaymentForm.value.bank,
        paymentDetails: this.AddPaymentForm.value.paymentDetails,
        remarks: this.AddPaymentForm.value.remarks,
        modifiedby: "Admin",
        modifiedon: modifiedDate,
      };

      this.paymentService.updatePayment(requestBody)
        .subscribe((response) => {
          if (response.statusCode === 200) {
            this.toastrService.show(response.statusMessage, "Success", {
              status: "success",
              duration: 8000,
            });
          } else {
            this.toastrService.show(response.statusMessage, "Warning", {
              status: "warning",
              duration: 8000,
            });
          }
          this.backToPaymentList();
        });


    } else {
      //customer id split in id
      const selectedResult = this.GetSalesForm.value.cid;
      const customerId = selectedResult.split('-')[0]; // Extract the ID from the result

      // Extract the month and year from the selected date
      const selectedDate = this.GetSalesForm.value.monthAndYear;

      // Convert the month to a string representation (e.g., January, February)
      const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(selectedDate);
      const year = selectedDate.getFullYear().toString(); // Convert the year to a string

      // For creating a new announcement
      const requestBody = {
        cid: customerId,
        month: month,
        year: year,
        salesAmount: this.AddPaymentForm.value.salesAmount.toString(),
        dateOfPayment: formattedDate,
        bank: this.AddPaymentForm.value.bank,
        paymentDetails: this.AddPaymentForm.value.paymentDetails,
        remarks: this.AddPaymentForm.value.remarks,
        createdby: "Admin",
        createdon: modifiedDate, // You might want to update these fields
        modifiedby: "Admin",
        modifiedon: modifiedDate, // Similarly update these fields with appropriate values

      };

      this.paymentService.CreatePayment(requestBody)
        .subscribe((response) => {
          if (response.statusCode === 200) {
            this.toastrService.show(response.statusMessage, "Success", {
              status: "success",
              duration: 8000,
            });
          } else if (response.statusCode === 403) {
            this.toastrService.show(response.statusMessage, "Warning", {
              status: "warning",
              duration: 8000,
            });
          }
          this.backToPaymentList();
        });
    }
  }


  /**
   * Back to Payment List
   * @param
   * @returns
   */
  backToPaymentList() {
    this.router.navigate([ROUTE_PATH.ADMIN, ROUTE_PATH.DASHBOARD]);
  }

}




