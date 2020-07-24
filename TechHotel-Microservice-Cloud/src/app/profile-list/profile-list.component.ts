import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { UserClient } from '../models/user-client.model';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {
  isAdmin = false;
  @Input()
  profileList: any[] = [];

  @Input()
  basicUser: UserClient;

  safeHtml: SafeHtml;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.cookieService.get('auth')
    }),
  };

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private sanitizer: DomSanitizer,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
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

    this.http.get<boolean>('https://techhotel-edge.herokuapp.com/users/is-admin',
    this.httpOptions).subscribe((bool) => {
      if (bool) {
        this.router.navigate(['/home'], { relativeTo: this.route });
      }
    });
    
    this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(
      '<button>Click me</button>'
    )
  }

}
