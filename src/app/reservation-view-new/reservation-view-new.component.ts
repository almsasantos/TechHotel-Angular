import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { RoomReservation } from '../models/room-reservation.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SharedService } from '../models/shared.service';
import { UserClient } from '../models/user-client.model';

@Component({
  selector: 'app-reservation-view-new',
  templateUrl: './reservation-view-new.component.html',
  styleUrls: ['./reservation-view-new.component.css']
})
export class ReservationViewNewComponent implements OnInit {
  
  todoForm: FormGroup;
  successMessage = '';
  message: string;
  basicId: number;
  basicRoomId: number;
  basicUser: UserClient;
  roomIdPost: string;
  isTypeRoom = false;
  regularRoom = "REGULAR_ROOM";
  suiteRoom = "SUITE_ROOM";
  username: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.cookieService.get('auth'),
    }),
  };

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private formBuilder: FormBuilder,
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

    this.http.get<boolean>('http://localhost:8081/users/is-admin',
    this.httpOptions).subscribe((bool) => {
      if (bool) {
        this.router.navigate(['/home'], { relativeTo: this.route });
      }
    });

    this.username = this.cookieService.get('username');
    this.http
    .get<any>(
      'http://localhost:8081/users/basics-username/' + this.username,
      this.httpOptions
    )
    .subscribe((id) => {
      this.basicId = id; console.log(this.basicId); console.log("number"), console.log(this.username),
      this.http.get<UserClient>(
        'http://localhost:8081/users/basics/' + this.basicId,
        this.httpOptions
      )
      .subscribe((user) => {
        this.basicUser = user; console.log(user);
      });
    });

    this.todoForm = this.formBuilder.group({
      roomId: ['', [Validators.required, Validators.minLength(1), Validators.pattern('^[0-9]+')]],
      numberOfNights: ['', [Validators.required, Validators.minLength(1), Validators.pattern('^[0-9]+')]],
      roomType: ['', Validators.required]
    });

    this.todoForm.valueChanges.subscribe(console.log);
  }

  submitForm(){
    const newType: string = this.todoForm.get('roomType').value;

    if (newType === 'REGULAR_ROOM'){
      this.http.post<RoomReservation>('http://localhost:8081/reservations/rooms',
      {
        "userId": this.basicId,
        "userName": this.basicUser.name,
        "roomId": parseInt(this.todoForm.get('roomId').value),
        "numberOfNights": this.todoForm.get('numberOfNights').value,
        "roomType": this.todoForm.get('roomType').value

      }
      , this.httpOptions)
      .subscribe((reservation) => {this.successMessage = 'Regular Room Reservation created'; this.roomIdPost = this.todoForm.get('roomId').value });
    }
    
    if (newType === 'SUITE_ROOM') {
      this.http.post<RoomReservation>('http://localhost:8081/reservations/rooms', 
      {
        "userId": this.basicId,
        "userName": this.basicUser.name,
        "roomId": parseInt(this.todoForm.get('roomId').value),
        "numberOfNights": this.todoForm.get('numberOfNights').value,
        "roomType": this.todoForm.get('roomType').value

      }
      , this.httpOptions)
      .subscribe(reservation => this.successMessage = 'Suite Room Reservation created');
    }

    this.todoForm.reset();
    Object.keys(this.todoForm.controls).forEach(key => {
      this.todoForm.get(key).setErrors(null);
    });
  }

  get userId() {
    return this.todoForm.get('userId');
  }

  get name() {
    return this.todoForm.get('name');
  }

  get roomId() {
    return this.todoForm.get('roomId');
  }

  get numberOfNights() {
    return this.todoForm.get('numberOfNights');
  }

  get roomType() {
    return this.todoForm.get('roomType');
  }

}
