import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { RegistrationViewNewComponent } from './registration-view-new/registration-view-new.component';
import { ReservationViewNewComponent } from './reservation-view-new/reservation-view-new.component';
import { MassagesViewComponent } from './massages-view/massages-view.component';
import { PoolRentViewComponent } from './pool-rent-view/pool-rent-view.component';
import { RoomFoodViewComponent } from './room-food-view/room-food-view.component';
import { InvoicesViewComponent } from './invoices-view/invoices-view.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { MapViewComponent } from './map-view/map-view.component';
import { UsersViewComponent } from './users-view/users-view.component';
import { RoomsViewComponent } from './rooms-view/rooms-view.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'home',
    component: HomeViewComponent
  },
  {
    path: 'login',
    component: LoginViewComponent
  },
  {
    path: 'registrations',
    component: RegistrationViewNewComponent
  },
  {
    path: 'reservations',
    component: ReservationViewNewComponent
  },
  {
    path: 'massages',
    component: MassagesViewComponent
  },
  {
    path: 'pool-rents',
    component: PoolRentViewComponent
  },
  {
    path: 'room-foods',
    component: RoomFoodViewComponent
  },
  {
    path: 'invoices',
    component: InvoicesViewComponent
  },
  {
    path: 'profile',
    component: ProfileViewComponent
  },
  {
    path: 'location',
    component: MapViewComponent
  },
  {
    path: 'users',
    component: UsersViewComponent
  },
  {
    path: 'rooms',
    component: RoomsViewComponent
  },
  {
    path: '**',
    component: ErrorComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
