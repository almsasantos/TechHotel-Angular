import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomFoodViewComponent } from './room-food-view.component';

describe('RoomFoodViewComponent', () => {
  let component: RoomFoodViewComponent;
  let fixture: ComponentFixture<RoomFoodViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomFoodViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomFoodViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
