import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserClient } from '../models/user-client.model';
import { Location } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-registration-view-new',
  templateUrl: './registration-view-new.component.html',
  styleUrls: ['./registration-view-new.component.css']
})

export class RegistrationViewNewComponent implements OnInit {
  noPremium = true;
  todoForm: FormGroup;
  postObject;
  successMessage = '';

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private _location: Location,
    ) { }

  ngOnInit(): void {

    this.todoForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+\\s[a-zA-Z]+$')]],
      username: ['', [Validators.required, Validators.minLength(4), Validators.pattern('^[a-zA-Z]+')]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{9}$')]],
      email: ['', [Validators.required, Validators.pattern(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gm)]],
      birthDate: ['', [Validators.required, Validators.pattern(/^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/)]],
      country: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[A-z]+$')]],
      city: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[A-z]+$')]],
      street: ['', [Validators.required, Validators.minLength(5)]],
      postalCode: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[0-9]+')]],
      balance: ['', [Validators.required, Validators.minLength(1), Validators.pattern('^[0-9]+')]],
      type: ['Basic', Validators.required]
    });

    this.todoForm.valueChanges.subscribe(console.log);
  }

  submitForm(){
    const type: string = this.todoForm.get('type').value;
    if (type === 'Basic'){
      this.http.post<UserClient>('http://localhost:8081/users/basics', this.todoForm.value)
      .subscribe(user => this.successMessage = 'Basic User created');
    } else if (type === 'Premium') {
      this.http.post<UserClient>('http://localhost:8081/users/premiums', this.todoForm.value)
      .subscribe(user => this.successMessage = 'Premium User created');
    }
    this.todoForm.reset();
    Object.keys(this.todoForm.controls).forEach(key => {
      this.todoForm.get(key).setErrors(null);
    });
  }

  goBack() {
    this._location.back();
  }

  get name() {
    return this.todoForm.get('name');
  }

  get username() {
    return this.todoForm.get('username');
  }

  get password() {
    return this.todoForm.get('password');
  }

  get phoneNumber() {
    return this.todoForm.get('phoneNumber');
  }

  get email() {
    return this.todoForm.get('email');
  }

  get birthDate() {
    return this.todoForm.get('birthDate');
  }

  get country() {
    return this.todoForm.get('country');
  }

  get city() {
    return this.todoForm.get('city');
  }

  get street() {
    return this.todoForm.get('street');
  }

  get postalCode() {
    return this.todoForm.get('postalCode');
  }

  get balance() {
    return this.todoForm.get('balance');
  }

  get type() {
    return this.todoForm.get('type');
  }
}
