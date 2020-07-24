import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { RoomFood } from '../models/room-food.model';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room-food-appointment',
  templateUrl: './room-food-appointment.component.html',
  styleUrls: ['./room-food-appointment.component.css']
})
export class RoomFoodAppointmentComponent implements OnInit {
  isAdmin = false;

  todoForm: FormGroup;
  successMessage = '';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.cookieService.get('auth'),
    }),
  };

  @Output() roomFoodEmiter: EventEmitter<RoomFood> = new EventEmitter<RoomFood>();
  @Input()
  basicRoomIdNum: number;

  @Input()
  basicId: number;

  constructor(
    private formBuilder: FormBuilder,
    private cookieService: CookieService,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
      this.todoForm = this.formBuilder.group({
        foodMenu: ['', [Validators.required]],
        drinkMenu: ['', [Validators.required]]
      });
  }

  submitForm() {
      if (this.basicId !== null && this.basicRoomIdNum !== null){
        this.http
        .post<RoomFood>('https://techhotel-edge.herokuapp.com/activities/room-food-services',
        {
        'userId': this.basicId,
        'roomId': this.basicRoomIdNum,
        'foodMenu': this.todoForm.get('foodMenu').value,
        'drinkMenu': this.todoForm.get('drinkMenu').value,
        },
        this.httpOptions)
        .subscribe(roomFood => this.roomFoodEmiter.emit(roomFood));

        Object.keys(this.todoForm.controls).forEach(key => {
        this.todoForm.get(key).setErrors(null) ;
        });
        }
  }

  get userId() {
    return this.todoForm.get('userId');
  }

  get roomId() {
    return this.todoForm.get('roomId');
  }

}
