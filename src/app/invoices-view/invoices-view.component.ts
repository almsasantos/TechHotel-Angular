import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Invoice } from '../models/invoice.model';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../models/user.model';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-invoices-view',
  templateUrl: './invoices-view.component.html',
  styleUrls: ['./invoices-view.component.css']
})
export class InvoicesViewComponent implements OnInit {
  users: User[] = [];

  todoForm: FormGroup;
  invoiceList: Invoice[] = [];
  isAdmin = false;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.cookieService.get('auth'),
    }),
  };

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private cookieService: CookieService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.http
    .get<boolean>(
      'http://localhost:8081/users/login',
      this.httpOptions
    )
    .subscribe((resp) => {
      if (!resp) {
        this.router.navigate(['/login'], { relativeTo: this.route });
      }
    });

    this.http.get<boolean>('http://localhost:8081/users/is-admin',
    this.httpOptions).subscribe((bool) => {
      if (!bool) {
        this.router.navigate(['/home'], { relativeTo: this.route });
      }
    });

    this.http
        .get<Invoice[]>(
          'http://localhost:8081/invoices',
          this.httpOptions
        )
        .subscribe((invoice) => {
          this.invoiceList = invoice; console.log(invoice);
        });
  }
}
