import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTripPageComponent } from './single-trip-page.component';

describe('SingleTripPageComponent', () => {
  let component: SingleTripPageComponent;
  let fixture: ComponentFixture<SingleTripPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleTripPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleTripPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
