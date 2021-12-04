import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { OrgdataListComponent } from './components/orgdata-list/orgdata-list.component';
import { OrgdataService } from "./services/orgdata.service";
import { UserListComponent } from './components/user-list/user-list.component';
import { UserService } from "./services/user.service";
import { TimedataListComponent } from './components/timedata-list/timedata-list.component';
import { TimedataService } from "./services/timedata.service";


//--MODULES CONFIGURATION
@NgModule({
  declarations: [
    AppComponent,
    OrgdataListComponent,
    UserListComponent,
    TimedataListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [OrgdataService, UserService, TimedataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
