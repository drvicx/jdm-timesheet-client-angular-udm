import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardSingleComponent } from './user-card-single.component';

describe('UserCardSingleComponent', () => {
  let component: UserCardSingleComponent;
  let fixture: ComponentFixture<UserCardSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCardSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
