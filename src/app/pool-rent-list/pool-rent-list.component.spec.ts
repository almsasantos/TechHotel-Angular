import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolRentListComponent } from './pool-rent-list.component';

describe('PoolRentListComponent', () => {
  let component: PoolRentListComponent;
  let fixture: ComponentFixture<PoolRentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoolRentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolRentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
