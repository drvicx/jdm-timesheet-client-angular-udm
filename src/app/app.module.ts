import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";

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


//--CONSTANTS
//--app routes
const routes: Routes = [
  { path: 'users/:id', component: UserCardSingleComponent },          //--parametrized route;
  { path: 'users', component: UserCardListHomeComponent },            //--simple user-cards route;
  { path: 'users/search/findAll', component: UserCardListComponent }, //--enhanced user-cards route;

  { path: '', redirectTo: '/users', pathMatch: 'full'},		    //--if path not set - redirect to '/users';
  { path: '**', redirectTo: '/users', pathMatch: 'full'}	    //--default route;
];


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
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule
  ],
  providers: [OrgdataService, UserService, TimedataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
