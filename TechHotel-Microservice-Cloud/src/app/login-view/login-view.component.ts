import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService } from '../models/shared.service';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})

export class LoginViewComponent implements OnInit {
  loginForm: FormGroup;
  message:string="";
  approvalText:string="";


  httpOptionsCookie = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.cookieService.get('auth')
    }),
  };

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router,
    private route: ActivatedRoute,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.http
      .get<boolean>(
        'https://techhotel-edge.herokuapp.com/users/login',
        this.httpOptionsCookie
      )
      .subscribe((resp) => {
        if (resp) {
          this.router.navigate(['/home'], { relativeTo: this.route });
        }
      });

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.sharedService.currentApprovalStageMessage.subscribe(msg => this.message = msg);
  }

  submitForm = () => {
    const auth: string =
      'Basic ' +
      btoa(
        this.loginForm.controls.username.value +
          ':' +
          this.loginForm.controls.password.value
      );
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: auth,
      }),
    };

    const username: string = this.loginForm.controls.username.value;

    this.http
      .get<boolean>(
        'https://techhotel-edge.herokuapp.com/users/login',
        httpOptions
      )
      .subscribe((resp) => {
        if (resp) {
          this.cookieService.set('auth', auth);
          this.cookieService.set('username', username);

          this.router.navigate(['/home'], { relativeTo: this.route }); }
      else {
          this.loginForm.controls.username.setErrors({ incorrect: true });
          this.loginForm.controls.password.setErrors({ incorrect: true });
        }
      });

    this.sharedService.updateApprovalMessage(this.loginForm.get('username').value);
  }

  goHome = () => this.router.navigate(['/'], { relativeTo: this.route });

}
