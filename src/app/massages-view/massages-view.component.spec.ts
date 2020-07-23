import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MassagesViewComponent } from './massages-view.component';

describe('MassagesViewComponent', () => {
  let component: MassagesViewComponent;
  let fixture: ComponentFixture<MassagesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MassagesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MassagesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
