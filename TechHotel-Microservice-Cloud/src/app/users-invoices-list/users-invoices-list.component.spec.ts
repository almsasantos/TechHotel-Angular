import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersInvoicesListComponent } from './users-invoices-list.component';

describe('UsersInvoicesListComponent', () => {
  let component: UsersInvoicesListComponent;
  let fixture: ComponentFixture<UsersInvoicesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersInvoicesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersInvoicesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
