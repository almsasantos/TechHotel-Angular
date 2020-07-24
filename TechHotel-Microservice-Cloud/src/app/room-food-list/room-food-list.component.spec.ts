import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomFoodListComponent } from './room-food-list.component';

describe('RoomFoodListComponent', () => {
  let component: RoomFoodListComponent;
  let fixture: ComponentFixture<RoomFoodListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomFoodListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomFoodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
