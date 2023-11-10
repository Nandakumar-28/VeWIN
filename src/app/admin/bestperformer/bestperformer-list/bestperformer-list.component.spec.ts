import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestperformerListComponent } from './bestperformer-list.component';

describe('BestperformerListComponent', () => {
  let component: BestperformerListComponent;
  let fixture: ComponentFixture<BestperformerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestperformerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestperformerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
