import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationViewNewComponent } from './reservation-view-new.component';

describe('ReservationViewNewComponent', () => {
  let component: ReservationViewNewComponent;
  let fixture: ComponentFixture<ReservationViewNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationViewNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationViewNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
