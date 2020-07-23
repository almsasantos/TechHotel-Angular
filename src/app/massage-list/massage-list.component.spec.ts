import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MassageListComponent } from './massage-list.component';

describe('MassageListComponent', () => {
  let component: MassageListComponent;
  let fixture: ComponentFixture<MassageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MassageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MassageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
