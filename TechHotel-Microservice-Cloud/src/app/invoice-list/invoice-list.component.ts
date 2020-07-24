import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Invoice } from '../models/invoice.model';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {
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
