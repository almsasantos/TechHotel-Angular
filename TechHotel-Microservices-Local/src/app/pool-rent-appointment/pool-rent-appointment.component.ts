import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { PoolRent } from '../models/pool-rent.model';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-pool-rent-appointment',
  templateUrl: './pool-rent-appointment.component.html',
  styleUrls: ['./pool-rent-appointment.component.css']
})
export class PoolRentAppointmentComponent implements OnInit {
  isAdmin = false;

  @Input()
  basicRoomIdNum: number;

  @Input()
  basicId: number;

  todoForm: FormGroup;
  successMessage = '';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.cookieService.get('auth'),
    }),
  };

  @Output() poolRentEmiter: EventEmitter<PoolRent> = new EventEmitter<PoolRent>();

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
      this.todoForm = this.formBuilder.group({
        floatiesNum: ['', [Validators.required, Validators.min(1)]],
        towelNum: ['', [Validators.required, Validators.min(1)]]
      });
      this.todoForm.valueChanges.subscribe(console.log);
  }

  submitForm() {
      if (this.basicId !== null && this.basicRoomIdNum !== null){
        this.http
        .post<PoolRent>('http://localhost:8081/activities/pool-rents',
        {
          "userId": this.basicId,
          "roomId": this.basicRoomIdNum,
          "floatiesNum": this.todoForm.get('floatiesNum').value,
          "towelNum": this.todoForm.get('towelNum').value,
        },
         this.httpOptions)
        .subscribe(massage => this.poolRentEmiter.emit(massage));
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
