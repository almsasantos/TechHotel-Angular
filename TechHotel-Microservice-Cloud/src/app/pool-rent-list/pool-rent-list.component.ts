import { Component, OnInit, Input } from '@angular/core';
import { PoolRent } from '../models/pool-rent.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-pool-rent-list',
  templateUrl: './pool-rent-list.component.html',
  styleUrls: ['./pool-rent-list.component.css']
})
export class PoolRentListComponent implements OnInit {
  @Input()
  poolRentsList: PoolRent[] = [];

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
    'floatiesNum',
    'towelNum',
    'beginOfActivity',
    'duration',
    'endOfActivity',
  ];

  constructor(
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
  }

}
