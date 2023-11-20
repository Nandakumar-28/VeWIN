import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestperformerAddEditComponent } from './bestperformer-add-edit.component';

describe('BestperformerAddEditComponent', () => {
  let component: BestperformerAddEditComponent;
  let fixture: ComponentFixture<BestperformerAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestperformerAddEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestperformerAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
