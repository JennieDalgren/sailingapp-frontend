import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestBookingPageComponent } from './request-booking-page.component';

describe('RequestBookingPageComponent', () => {
  let component: RequestBookingPageComponent;
  let fixture: ComponentFixture<RequestBookingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestBookingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestBookingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
