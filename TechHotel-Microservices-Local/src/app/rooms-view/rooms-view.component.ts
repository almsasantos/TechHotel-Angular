import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SharedService } from '../models/shared.service';
import { Room } from '../models/room.model';

@Component({
  selector: 'app-rooms-view',
  templateUrl: './rooms-view.component.html',
  styleUrls: ['./rooms-view.component.css']
})
export class RoomsViewComponent implements OnInit {

  regularRoomList: Room[] = [];
  suiteRoomList: Room[] = [];

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
      if (!bool) {
        this.router.navigate(['/home'], { relativeTo: this.route });
      }
    });

    this.http
    .get<Room[]>(
      'http://localhost:8081/regular-rooms',
      this.httpOptions
    )
    .subscribe((regularRoom) => {
      this.regularRoomList = regularRoom; console.log(regularRoom);

      this.http
    .get<Room[]>(
      'http://localhost:8081/suites',
      this.httpOptions
    )
    .subscribe((suiteRoom) => {
      this.suiteRoomList = suiteRoom; console.log(suiteRoom);
    });
    });
  }

}
