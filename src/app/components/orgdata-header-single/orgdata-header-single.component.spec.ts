import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgdataHeaderSingleComponent } from './orgdata-header-single.component';

describe('OrgdataHeaderSingleComponent', () => {
  let component: OrgdataHeaderSingleComponent;
  let fixture: ComponentFixture<OrgdataHeaderSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgdataHeaderSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgdataHeaderSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
