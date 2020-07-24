import { Component, OnInit, Input } from '@angular/core';
import { RoomFood } from '../models/room-food.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-room-food-list',
  templateUrl: './room-food-list.component.html',
  styleUrls: ['./room-food-list.component.css']
})
export class RoomFoodListComponent implements OnInit {
  @Input()
  roomFoodsList: RoomFood[] = [];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.cookieService.get('auth')
    }),
  };

  displayedColumns: string[] = [
    'activityId',
    'userId',
    'roomId',
    'totalPrice',
    'foodMenu',
    'drinkMenu',
    'delivered',
  ];

  constructor(
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
  }

}
