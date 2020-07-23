import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Massage } from '../models/massage.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SharedService } from '../models/shared.service';

@Component({
  selector: 'app-massages-view',
  templateUrl: './massages-view.component.html',
  styleUrls: ['./massages-view.component.css']
})
export class MassagesViewComponent implements OnInit {
  isAdmin = false;
  todoForm: FormGroup;
  massageList: Massage[] = [];
  username: string;
  basicId: number;
  basicRoomId: number;
  basicRoomIdNum: number;

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

    this.http.get<boolean>('http://localhost:8081/users/is-admin',
    this.httpOptions).subscribe((bool) => (this.isAdmin = bool));

    this.http
        .get<Massage[]>(
          'http://localhost:8081/activities/massages',
          this.httpOptions
        )
        .subscribe((massage) => {
          this.massageList = massage; console.log(massage);
        });

    if (!this.isAdmin){
      this.http
        .get<any>(
          'http://localhost:8081/users/basics-username/' + this.cookieService.get('username'),
          this.httpOptions
        )
        .subscribe((id) => {
          this.basicId = id; console.log(this.basicId); console.log("number"),
          this.http.get<any[]>(
            'http://localhost:8081/activities/massages/filter/' + this.basicId,
            this.httpOptions
          )
          .subscribe((massage) => {
            this.massageList = massage; console.log(massage);
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
      .post<Massage>(
        'http://localhost:8081/activities/massages',
        this.todoForm.value,
        this.httpOptions
      )
      .subscribe((massage) => {
        this.massageList = [...this.massageList, massage];
      });
    this.todoForm.reset();
  }


  updateList(){
    this.http.get<Massage[]>('http://localhost:8081/activities/massages', this.httpOptions).subscribe(massage => {
      this.massageList = [...massage];
    }, () => console.log("updateList"));
  }

}
