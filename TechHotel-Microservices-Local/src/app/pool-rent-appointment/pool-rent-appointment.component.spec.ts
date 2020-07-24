import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolRentAppointmentComponent } from './pool-rent-appointment.component';

describe('PoolRentAppointmentComponent', () => {
  let component: PoolRentAppointmentComponent;
  let fixture: ComponentFixture<PoolRentAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoolRentAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolRentAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
