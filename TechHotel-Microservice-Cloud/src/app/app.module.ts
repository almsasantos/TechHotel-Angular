import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { MassagesViewComponent } from './massages-view/massages-view.component';
import { PoolRentViewComponent } from './pool-rent-view/pool-rent-view.component';
import { RoomFoodViewComponent } from './room-food-view/room-food-view.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InvoicesViewComponent } from './invoices-view/invoices-view.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatStepperModule} from '@angular/material/stepper';
import { RegistrationViewNewComponent } from './registration-view-new/registration-view-new.component'; 
import { ReservationViewNewComponent } from './reservation-view-new/reservation-view-new.component';
import { MassageListComponent } from './massage-list/massage-list.component';
import { MassageAppointmentComponent } from './massage-appointment/massage-appointment.component';
import { PoolRentAppointmentComponent } from './pool-rent-appointment/pool-rent-appointment.component';
import { PoolRentListComponent } from './pool-rent-list/pool-rent-list.component';
import { RoomFoodListComponent } from './room-food-list/room-food-list.component';
import { RoomFoodAppointmentComponent } from './room-food-appointment/room-food-appointment.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { ErrorComponent } from './error/error.component';
import { MapViewComponent } from './map-view/map-view.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { UsersViewComponent } from './users-view/users-view.component';
import { UsersListComponent } from './users-list/users-list.component';
import { RoomsViewComponent } from './rooms-view/rooms-view.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { UsersInvoicesViewComponent } from './users-invoices-view/users-invoices-view.component';
import { UsersInvoicesListComponent } from './users-invoices-list/users-invoices-list.component'; 

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginViewComponent,
    MassagesViewComponent,
    PoolRentViewComponent,
    RoomFoodViewComponent,
    NavbarComponent,
    InvoicesViewComponent,
    HomeViewComponent,
    RegistrationViewNewComponent,
    ReservationViewNewComponent,
    MassageListComponent,
    MassageAppointmentComponent,
    PoolRentAppointmentComponent,
    PoolRentListComponent,
    RoomFoodListComponent,
    RoomFoodAppointmentComponent,
    ProfileViewComponent,
    ErrorComponent,
    MapViewComponent,
    InvoiceListComponent,
    ProfileListComponent,
    UsersViewComponent,
    UsersListComponent,
    RoomsViewComponent,
    RoomsListComponent,
    UsersInvoicesViewComponent,
    UsersInvoicesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatStepperModule,
    FormsModule,
    MatSelectModule,
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatToolbarModule
  ],
  providers: [ CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
