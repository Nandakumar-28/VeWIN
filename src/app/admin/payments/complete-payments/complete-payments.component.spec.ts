import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletePaymentsComponent } from './complete-payments.component';

describe('CompletePaymentsComponent', () => {
  let component: CompletePaymentsComponent;
  let fixture: ComponentFixture<CompletePaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletePaymentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletePaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
