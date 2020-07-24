import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Invoice } from '../models/invoice.model';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-users-invoices-list',
  templateUrl: './users-invoices-list.component.html',
  styleUrls: ['./users-invoices-list.component.css']
})
export class UsersInvoicesListComponent implements OnInit {
  @Input()
  invoiceList: Invoice[] = [];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.cookieService.get('auth')
    }),
  };

  displayedColumns: string[] = [
    'invoiceId',
    'userId',
    'name',
    'roomId',
    'invoiceType',
    'priceOwed',
  ];
  constructor(
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
  }

}
