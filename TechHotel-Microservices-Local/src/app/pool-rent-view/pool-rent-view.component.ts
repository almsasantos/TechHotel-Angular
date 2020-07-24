import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PoolRent } from '../models/pool-rent.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SharedService } from '../models/shared.service';

@Component({
  selector: 'app-pool-rent-view',
  templateUrl: './pool-rent-view.component.html',
  styleUrls: ['./pool-rent-view.component.css']
})

export class PoolRentViewComponent implements OnInit {
  isAdmin = false;
  todoForm: FormGroup;
  poolRentsList: PoolRent[] = [];
  basicId: number;
  basicRoomId: number;
  basicRoomIdNum: number;
  username:string;

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
    this.httpOptions).subscribe((bool) => (this.isAdmin = bool));

    this.http
        .get<PoolRent[]>(
          'http://localhost:8081/activities/pool-rents',
          this.httpOptions
        )
        .subscribe((poolRent) => {
          this.poolRentsList = poolRent; console.log(poolRent);
        });
    if (!this.isAdmin){
  this.http
        .get<any>(
          'http://localhost:8081/users/basics-username/' + this.username,
          this.httpOptions
        )
        .subscribe((id) => {
          this.basicId = id; console.log(this.basicId); console.log("number"), console.log(this.username),
          this.http.get<any[]>(
            'http://localhost:8081/activities/pool-rents/filter/' + this.basicId,
            this.httpOptions
          )
          .subscribe((poolRent) => {
            this.poolRentsList = poolRent; console.log(poolRent);
          });

          this.http.get<any>(
            'http://localhost:8081/users/basics/' + this.basicId, this.httpOptions
          ).subscribe((roomId) => { this.basicRoomId = roomId; this.basicRoomIdNum = parseInt(JSON.stringify(this.basicRoomId["roomId"]));
                                    console.log("This Basic Id " + this.basicId)});
        });
      } 
  }

  submitForm() {
    this.http
      .post<PoolRent>(
        'http://localhost:8081/activities/pool-rents',
        this.todoForm.value,
        this.httpOptions
      )
      .subscribe((poolRent) => {
        this.poolRentsList = [...this.poolRentsList, poolRent];
      });
  }


  updateList(){
    this.http.get<PoolRent[]>('http://localhost:8081/activities/pool-rents', this.httpOptions).subscribe(poolRent => {
      this.poolRentsList = [...poolRent];
    }, () => console.log("updateList"));
  }

}
