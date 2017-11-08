import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherUserPageComponent } from './other-user-page.component';

describe('OtherUserPageComponent', () => {
  let component: OtherUserPageComponent;
  let fixture: ComponentFixture<OtherUserPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherUserPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
