import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbxResetPasswordComponent } from './reset-pass.component';

describe('NbxResetPasswordComponent', () => {
  let component: NbxResetPasswordComponent;
  let fixture: ComponentFixture<NbxResetPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbxResetPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbxResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
