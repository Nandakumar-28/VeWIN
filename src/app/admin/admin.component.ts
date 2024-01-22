/** 
* This file contains Admin related functions and HTML
* dev: T.Nanda Kumar
*/

import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from './admin-menu';

@Component({
  selector: 'ngx-admin',
  styleUrls: ['./admin.component.scss'],
  template:
 `   
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
 `,
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  menu = MENU_ITEMS;
}
