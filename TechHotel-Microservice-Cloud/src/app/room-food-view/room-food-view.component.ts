import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { RoomFood } from '../models/room-food.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SharedService } from '../models/shared.service';

@Component({
  selector: 'app-room-food-view',
  templateUrl: './room-food-view.component.html',
  styleUrls: ['./room-food-view.component.css']
})
export class RoomFoodViewComponent implements OnInit {
  isAdmin = false;
  todoForm: FormGroup;
  roomFoodsList: RoomFood[] = [];
  basicId: number;
  basicRoomId: number;
  basicRoomIdNum: number;
  username: string;


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

    this.http.get<boolean>('https://techhotel-edge.herokuapp.com/users/is-admin',
    this.httpOptions).subscribe((bool) => (this.isAdmin = bool));

    this.http
        .get<RoomFood[]>(
          'https://techhotel-edge.herokuapp.com/activities/room-food-services',
          this.httpOptions
        )
        .subscribe((roomFood) => {
          this.roomFoodsList = roomFood; console.log(roomFood);
        });
    if(!this.isAdmin){
      this.http
        .get<any>(
          'https://techhotel-edge.herokuapp.com/users/basics-username/' + this.username,
          this.httpOptions
        )
        .subscribe((id) => {
          this.basicId = id; console.log(this.basicId); console.log("number"),
          this.http.get<any[]>(
            'https://techhotel-edge.herokuapp.com/activities/room-foods-service/filter/' + this.basicId,
            this.httpOptions
          )
          .subscribe((roomFood) => {
            this.roomFoodsList = roomFood; console.log(roomFood);
          });

          this.http.get<any>(
            'https://techhotel-edge.herokuapp.com/users/basics/' + this.basicId, this.httpOptions
          ).subscribe((roomId) => { this.basicRoomId = roomId; this.basicRoomIdNum = parseInt(JSON.stringify(this.basicRoomId["roomId"]));
          console.log("This Basic Id " + this.basicId)});
        });
    }
  }

  submitForm() {
    this.http
      .post<RoomFood>(
        'https://techhotel-edge.herokuapp.com/activities/room-food-services',
        this.todoForm.value,
        this.httpOptions
      )
      .subscribe((roomFood) => {
        this.roomFoodsList = [...this.roomFoodsList, roomFood];
      });
    this.todoForm.reset();
  }


  updateList(){
    this.http.get<RoomFood[]>('https://techhotel-edge.herokuapp.com/activities/room-food-services', this.httpOptions).subscribe(roomFood => {
      this.roomFoodsList = [...roomFood];
    }, () => console.log("updateList"));
  }

}
