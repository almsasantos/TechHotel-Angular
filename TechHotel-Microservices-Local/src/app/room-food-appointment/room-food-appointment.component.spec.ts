import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomFoodAppointmentComponent } from './room-food-appointment.component';

describe('RoomFoodAppointmentComponent', () => {
  let component: RoomFoodAppointmentComponent;
  let fixture: ComponentFixture<RoomFoodAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomFoodAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomFoodAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
