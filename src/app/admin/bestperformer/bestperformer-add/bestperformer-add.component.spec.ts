import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestperformerAddComponent } from './bestperformer-add.component';

describe('BestperformerAddComponent', () => {
  let component: BestperformerAddComponent;
  let fixture: ComponentFixture<BestperformerAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestperformerAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestperformerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
