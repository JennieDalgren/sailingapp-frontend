import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAttendingPageComponent } from './my-attending-page.component';

describe('MyAttendingPageComponent', () => {
  let component: MyAttendingPageComponent;
  let fixture: ComponentFixture<MyAttendingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAttendingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAttendingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
