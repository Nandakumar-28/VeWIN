import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerGetComponent } from './banner-get.component';

describe('BannerGetComponent', () => {
  let component: BannerGetComponent;
  let fixture: ComponentFixture<BannerGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerGetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
