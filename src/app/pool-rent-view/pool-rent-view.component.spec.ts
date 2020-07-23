import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolRentViewComponent } from './pool-rent-view.component';

describe('PoolRentViewComponent', () => {
  let component: PoolRentViewComponent;
  let fixture: ComponentFixture<PoolRentViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoolRentViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolRentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
