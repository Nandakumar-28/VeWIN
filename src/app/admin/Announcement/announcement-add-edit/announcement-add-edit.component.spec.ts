import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementAddEditComponent } from './announcement-add-edit.component';

describe('AnnouncementAddEditComponent', () => {
  let component: AnnouncementAddEditComponent;
  let fixture: ComponentFixture<AnnouncementAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnouncementAddEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncementAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
