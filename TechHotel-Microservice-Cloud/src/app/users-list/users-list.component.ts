import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserClient } from '../models/user-client.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  @Output() userEmiter: EventEmitter<UserClient> = new EventEmitter<UserClient>();

  @Input()
  basicUserList: UserClient[] = [];

  @Input()
  premiumUserList: UserClient[] = [];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.cookieService.get('auth')
    }),
  };

  displayedColumns: string[] = [
    'id',
    'name',
    'username',
    'typeOfUser',
    'country',
    'city',
    'registrationDate',
    'roomId',
    'delete',
  ];


  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private cookieService: CookieService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  deleteBasic(id){
    this.http.delete<UserClient>('https://techhotel-edge.herokuapp.com/users/basics/' + id, this.httpOptions)
    .subscribe((basicUser) => {this.basicUserList = [...this.basicUserList, basicUser]; });
  }

  deletePremium(id){
    this.http.delete<UserClient>('https://techhotel-edge.herokuapp.com/users/premiums/' + id, this.httpOptions)
    .subscribe((premiumUser) => {this.premiumUserList = [...this.premiumUserList, premiumUser]; });
  }

}
