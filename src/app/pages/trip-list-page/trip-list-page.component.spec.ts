import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripListPageComponent } from './trip-list-page.component';

describe('TripListPageComponent', () => {
  let component: TripListPageComponent;
  let fixture: ComponentFixture<TripListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
