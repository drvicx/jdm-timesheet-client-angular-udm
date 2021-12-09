import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardListHomeComponent } from './user-card-list-home.component';

describe('UserCardListHomeComponent', () => {
  let component: UserCardListHomeComponent;
  let fixture: ComponentFixture<UserCardListHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCardListHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardListHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
