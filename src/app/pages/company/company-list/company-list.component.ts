import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ROUTER_CONFIGURATION } from "@angular/router";
import { NbToastrService } from "@nebular/theme";
import { ConfirmationService } from "primeng/api";

import { CompanyService } from "../services/company.service";
import { ROUTE_PATH } from "../../../shared/constants/route-path.constant";

@Component({
  selector: "ngx-company-list",
  templateUrl: "./company-list.component.html",
  styleUrls: ["./company-list.component.scss"],
})
export class CompanyListComponent implements OnInit {
  itemsPerPage: any[] = [10, 25, 50];
  companies: any;
  columns: any[]; // for table columns

  first = 0;
  rows = 10;

  constructor(
    private dialogService: ConfirmationService,
    private toastrService: NbToastrService,
    private router: Router,
    private aRoute: ActivatedRoute,
    private companyService: CompanyService
  ) {}

  ngOnInit() {
    // table   with their respective field name and header value
    this.columns = [
      //{ field: "companyId", header: "ID", show: true, sort: false },
      { field: "company_organization", header: "Comapany / Organization",show: true, sort: true },    
      { field: "contact_person", header: "Contact Person", show: true, sort: true },
      { field: "decsignation", header: "Designation", show: true,sort: true },     
      { field: "contact_number", header: "Contact Number", show: true, sort: true },
      //{ field: "email", header: "E_mail", show: true, sort: true },
      //{ field: "address", header: "Address", show: true, sort: true },
      //{ field: "remarks", header: "Remarks", show: true, sort: true },
      { field: "active", header: "Action", show: true, sort: true },
    ];

    this.companyList();
  }

  /**
   * create Company
   * @param
   * @returns
   */
  createCompany() {
    this.router.navigate([
      ROUTE_PATH.PAGES,
      ROUTE_PATH.COMPANY,
      ROUTE_PATH.COMPANIES.CREATE,
    ]);
  }

  /**
   * Edit Company
   * @param company_id
   * @returns
   */
  editCompany(company_id: any) {
    this.router.navigate([
      ROUTE_PATH.PAGES,
      ROUTE_PATH.COMPANY,
      ROUTE_PATH.COMPANIES.EDIT,
      company_id,
    ]);
  }

  /**
   * Delete Company confirmation
   * @param companyId, companyName
   * @returns
   */
  confirmDelete(companyId, companyName) {
    this.dialogService.confirm({
      header: "Delete confirmation",
      message:
        "Are you sure that you want to delete this <b>" +
        companyName +
        "</b> Company ?",
      accept: () => {
        this.deleteCompany(companyId);
      },
    });
  }

  /**
   * Delete Company
   * @param companyId
   * @returns
   */
  deleteCompany(companyId) {
    let deletePostData = { companyId: companyId };

    this.companyService.deleteCompany(deletePostData).subscribe(
      (response) => {
        this.companyList();
        // if (response["status"] != 200) {
        //   this.toastrService.show(response["message"], "Warning", {
        //     status: "warning",
        //     duration: 8000,
        //   });
        // } else {
        //   this.toastrService.show(response["message"], "Success", {
        //     status: "success",
        //     duration: 8000,
        //   });
        // }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  /**
   * Block/UnBlock Company confirmation
   * @param companyId, companyName, action
   * @returns
   */
  confirmBlockUnBlock(companyId, companyName, action) {
    this.dialogService.confirm({
      header: "Delete confirmation",
      message:
        "Are you sure that you want to delete this <b>" +
        action +
        " - " +
        companyName +
        "</b> Company ?",
      accept: () => {
        this.blockUnBlockCompany(companyId, action);
      },
    });
  }

  /**
   * Block/UnBlock Company
   * @param companyId, action
   * @returns
   */
  blockUnBlockCompany(companyId:any, action:any) {
    let blockUnBlockPostData = {
      companyId: companyId,
      block: action == "Block" ? true : false,
    };

    this.companyService.blockUnBlockCompany(blockUnBlockPostData).subscribe(
      (response) => {
        this.companyList();
        // if (response["status"] != 200) {
        //   this.toastrService.show(response["message"], "Warning", {
        //     status: "warning",
        //     duration: 8000,
        //   });
        // } else {
        //   this.toastrService.show(response["message"], "Success", {
        //     status: "success",
        //     duration: 8000,
        //   });
        // }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  /**
   * Company List
   * @param null
   * @returns
   */
  companyList() {
    this.companyService.getCompanyList().subscribe(
      (response) => {
        this.companies = response;
        // if (response["status"] != 200) {
        //   this.toastrService.show(response["message"], "Warning", {
        //     status: "warning",
        //     duration: 8000,
        //   });
        // } else {
        //   this.toastrService.show(response["message"], "Success", {
        //     status: "success",
        //     duration: 8000,
        //   });
        // }
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
