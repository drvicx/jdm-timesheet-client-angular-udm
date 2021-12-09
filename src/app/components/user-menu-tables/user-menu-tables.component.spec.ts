import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMenuTablesComponent } from './user-menu-tables.component';

describe('UserMenuTablesComponent', () => {
  let component: UserMenuTablesComponent;
  let fixture: ComponentFixture<UserMenuTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMenuTablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMenuTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
