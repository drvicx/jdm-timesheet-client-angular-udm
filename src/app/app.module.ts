import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';

import { OrgdataListComponent } from './components/orgdata-list/orgdata-list.component';
import { OrgdataHeaderSingleComponent } from './components/orgdata-header-single/orgdata-header-single.component';

import { UserListComponent } from './components/user-list/user-list.component';
import { UserCardListHomeComponent } from './components/user-card-list-home/user-card-list-home.component';
import { UserMenuListComponent } from './components/user-menu-list/user-menu-list.component';
import { UserMenuTablesComponent } from './components/user-menu-tables/user-menu-tables.component';
import { UserCardListComponent } from './components/user-card-list/user-card-list.component';
import { UserCardSingleComponent } from './components/user-card-single/user-card-single.component';

import { TimedataListComponent } from './components/timedata-list/timedata-list.component';

import { OrgdataService } from "./services/orgdata.service";
import { UserService } from "./services/user.service";
import { TimedataService } from "./services/timedata.service";


//--MODULES CONFIGURATION
@NgModule({
  declarations: [
    AppComponent,
    OrgdataListComponent,
    UserListComponent,
    TimedataListComponent,
    OrgdataHeaderSingleComponent,
    UserMenuListComponent,
    UserMenuTablesComponent,
    UserCardListHomeComponent,
    UserCardListComponent,
    UserCardSingleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [OrgdataService, UserService, TimedataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
