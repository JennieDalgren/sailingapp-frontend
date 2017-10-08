import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTripPageComponent } from './create-trip-page.component';

describe('CreateTripPageComponent', () => {
  let component: CreateTripPageComponent;
  let fixture: ComponentFixture<CreateTripPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTripPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTripPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
