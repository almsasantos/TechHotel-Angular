import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SharedService } from '../models/shared.service';
import { UserClient } from '../models/user-client.model';


@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.css']
})
export class UsersViewComponent implements OnInit {

  basicUserList: UserClient[] = [];
  premiumUserList: UserClient[] = [];


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
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.http
    .get<boolean>(
      'https://techhotel-edge.herokuapp.com/users/login',
      this.httpOptions
    )
    .subscribe((resp) => {
      if (!resp) {
        this.router.navigate(['/login'], { relativeTo: this.route });
      }
    });

    this.http.get<boolean>('https://techhotel-edge.herokuapp.com/users/is-admin',
    this.httpOptions).subscribe((bool) => {
      if (!bool) {
        this.router.navigate(['/home'], { relativeTo: this.route });
      }
    });

    this.http
    .get<UserClient[]>(
      'https://techhotel-edge.herokuapp.com/users/basics',
      this.httpOptions
    )
    .subscribe((basicUser) => {
      this.basicUserList = basicUser; console.log(basicUser);

      this.http
    .get<UserClient[]>(
      'https://techhotel-edge.herokuapp.com/users/premiums',
      this.httpOptions
    )
    .subscribe((premiumUser) => {
      this.premiumUserList = premiumUser; console.log(premiumUser);
    });
    });
  }

  updateList(){
    this.http.get<UserClient[]>('https://techhotel-edge.herokuapp.com/users/basics', this.httpOptions).subscribe(basicUser => {
      this.basicUserList = [...basicUser];
    }, () => console.log("updateList"));

    this.http.get<UserClient[]>('https://techhotel-edge.herokuapp.com/users/premiums', this.httpOptions).subscribe(premiumUser => {
      this.premiumUserList = [...premiumUser];
    }, () => console.log("updateList"));
  }

}
