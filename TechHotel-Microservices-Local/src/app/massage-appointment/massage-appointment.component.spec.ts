import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MassageAppointmentComponent } from './massage-appointment.component';

describe('MassageAppointmentComponent', () => {
  let component: MassageAppointmentComponent;
  let fixture: ComponentFixture<MassageAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MassageAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MassageAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
