import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Massage } from '../models/massage.model';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-massage-list',
  templateUrl: './massage-list.component.html',
  styleUrls: ['./massage-list.component.css']
})
export class MassageListComponent implements OnInit {
  @Input()
  massageList: Massage[] = [];

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
    'massageType',
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
