import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { ConfirmationService } from 'primeng/api';
import { ROUTE_PATH } from '../../../shared/constants/route-path.constant';
import { HttpStatusCode } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BestperformerService } from '../../bestperformer/services/bestperformer.service';
import { debounceTime, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { SalesService } from '../services/sales.service';
@Component({
  selector: 'ngx-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.scss']
})
export class SalesListComponent implements OnInit {

  AddSaleForm: FormGroup;

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
    private toastrService: NbToastrService,
    private router: Router,
    private aRoute: ActivatedRoute,
    private saleService: SalesService,
    private dialogService: NbDialogService,
    private formBuilder: FormBuilder,
    private userService: BestperformerService,

  ) { }

  ngOnInit() {

    this.AddSaleFormInitialize();
    // table   with their respective field name and header value
    this.columns = [
      { field: "date", header: "Date", show: true, sort: true },
      { field: "app", header: "App", show: true, sort: true },
      { field: "sale", header: "Sales", show: true, sort: true },
      { field: "saleReturn", header: "Sales Return", show: true, sort: true },
    ];

    // Subscribe to changes in the 'name' control and make API requests
    this.AddSaleForm.get('name').valueChanges.pipe(
      debounceTime(300),
      switchMap((name) => {
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

  AddSaleFormInitialize() {
    this.AddSaleForm = this.formBuilder.group({
      name: ["", [Validators.required]],
      monthAndYear: ["", [Validators.required]],
      // refid: [0], // Add the refid control
    });
  }


  /**
   * create Payment
   * @param
   * @returns
   */
  makePayment() {
    this.router.navigate([
      ROUTE_PATH.ADMIN,
      ROUTE_PATH.PAYMENT,
      ROUTE_PATH.PAYMENTS.CREATE,
    ]);
  }


  /**
   * Payment List
   * @param null
   * @returns
   */

  onSubmit() {
    this.submitted = true;

    const selectedName = this.AddSaleForm.value.name;
    const selectedDate = this.AddSaleForm.value.monthAndYear;

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

      this.salesApiRequest(requestBody);
    } else if (selectedName) {

      const customerId = selectedName.split('-')[0]; // Extract the ID from the selectedName

      const requestBody = {
        customerId: customerId,
        month: "",
        year: ""
      };

      this.salesApiRequest(requestBody);
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
      this.salesApiRequest(requestBody);
    }

  }

  // Extracted the API request logic to a separate function
  private salesApiRequest(requestBody: any) {
    this.saleService.getSaleList(requestBody)
      .subscribe((response) => {
        this.users = response;
      });
  }
}

