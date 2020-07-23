import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationViewNewComponent } from './registration-view-new.component';

describe('RegistrationViewNewComponent', () => {
  let component: RegistrationViewNewComponent;
  let fixture: ComponentFixture<RegistrationViewNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationViewNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationViewNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
