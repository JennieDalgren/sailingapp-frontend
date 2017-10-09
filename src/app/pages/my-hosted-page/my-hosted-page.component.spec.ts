import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHostedPageComponent } from './my-hosted-page.component';

describe('MyHostedPageComponent', () => {
  let component: MyHostedPageComponent;
  let fixture: ComponentFixture<MyHostedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyHostedPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyHostedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
