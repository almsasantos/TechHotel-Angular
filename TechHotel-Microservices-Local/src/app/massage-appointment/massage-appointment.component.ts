import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Massage } from '../models/massage.model';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-massage-appointment',
  templateUrl: './massage-appointment.component.html',
  styleUrls: ['./massage-appointment.component.css']
})
export class MassageAppointmentComponent implements OnInit {
  @Input()
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

  @Output() massageEmiter: EventEmitter<Massage> = new EventEmitter<Massage>();

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
      this.todoForm = this.formBuilder.group({
        massageType: ['', [Validators.required]]
      });
      this.todoForm.valueChanges.subscribe(console.log);
  }

  submitForm() {
    if (this.basicId !== null && this.basicRoomIdNum !== null){
      this.http
      .post<Massage>('http://localhost:8081/activities/massages',
      {
        "userId": this.basicId,
        "roomId": this.basicRoomIdNum,
        "massageType": this.todoForm.get('massageType').value
      },
       this.httpOptions)
      .subscribe(massage => this.massageEmiter.emit(massage));

      Object.keys(this.todoForm.controls).forEach(key => {
      this.todoForm.get(key).setErrors(null) ;
    });
    }
  }

}
