import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Invoice } from '../models/invoice.model';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../models/user.model';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-users-invoices-view',
  templateUrl: './users-invoices-view.component.html',
  styleUrls: ['./users-invoices-view.component.css']
})
export class UsersInvoicesViewComponent implements OnInit {
  users: User[] = [];
  isAdmin=false;

  todoForm: FormGroup;
  invoiceList: Invoice[] = [];
  username: string;
  basicId: number;

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

    this.username = this.cookieService.get('username');

    this.http.get<boolean>('http://localhost:8081/users/is-admin',
    this.httpOptions).subscribe((bool) => {
      if (bool) {
        this.router.navigate(['/home'], { relativeTo: this.route });
      }
    });
    if(!this.isAdmin){
      this.http
        .get<any>(
          'http://localhost:8081/users/basics-username/' + this.username,
          this.httpOptions
        )
        .subscribe((id) => {
          this.basicId = id; console.log(this.basicId); console.log("number"),
          this.http.get<any[]>(
            'http://localhost:8081/invoices/' + this.basicId,
            this.httpOptions
          )
          .subscribe((invoiceByUser) => {
            this.invoiceList = invoiceByUser; console.log(invoiceByUser);
          });
        });
    }
    
  }

}
