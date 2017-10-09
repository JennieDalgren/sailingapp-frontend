import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHostedSinglePageComponent } from './my-hosted-single-page.component';

describe('MyHostedSinglePageComponent', () => {
  let component: MyHostedSinglePageComponent;
  let fixture: ComponentFixture<MyHostedSinglePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyHostedSinglePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyHostedSinglePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
