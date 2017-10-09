import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAttendingSinglePageComponent } from './my-attending-single-page.component';

describe('MyAttendingSinglePageComponent', () => {
  let component: MyAttendingSinglePageComponent;
  let fixture: ComponentFixture<MyAttendingSinglePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAttendingSinglePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAttendingSinglePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
