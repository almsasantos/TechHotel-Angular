import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SharedService } from '../models/shared.service';
import { UserClient } from '../models/user-client.model';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {
  basicId: number;
  basicUser: UserClient;
  username: string;

  todoForm: FormGroup;
  poolRentsList: any[] = [];

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
    private sharedService: SharedService
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

    this.username = this.cookieService.get('username');
    console.log("hola")
    console.log(this.username);

    this.http
        .get<number>(
          'https://techhotel-edge.herokuapp.com/users/basics-username/' + this.username,
          this.httpOptions
        )
        .subscribe((user) => {
          this.basicId = user; console.log(this.basicId);
          this.http.get<UserClient>(
            'https://techhotel-edge.herokuapp.com/users/basics/' + this.basicId,
            this.httpOptions
          )
          .subscribe((newUser) => {
            this.basicUser = newUser; console.log(newUser);
          }); });
        }


}
