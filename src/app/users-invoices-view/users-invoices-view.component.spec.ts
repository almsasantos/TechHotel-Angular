import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersInvoicesViewComponent } from './users-invoices-view.component';

describe('UsersInvoicesViewComponent', () => {
  let component: UsersInvoicesViewComponent;
  let fixture: ComponentFixture<UsersInvoicesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersInvoicesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersInvoicesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
