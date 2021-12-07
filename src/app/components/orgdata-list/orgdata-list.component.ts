import { Component, OnInit } from '@angular/core';

import { OrgdataService } from 'src/app/services/orgdata.service';
import { Orgdata } from 'src/app/common/orgdata';


@Component({
  selector: 'app-orgdata-list',
  //templateUrl: './orgdata-list.component.html',
  templateUrl: './orgdata-list-table.component.html',
  styleUrls: ['./orgdata-list.component.css']
})
export class OrgdataListComponent implements OnInit {

  //--new TypeScript version requirements - properties MUST by initialized in constructor
  orgdatas!: Orgdata[];

  //--Today Date
  today: number = Date.now();

  //--Inject Angular Service for Orgdata
  constructor(private orgdataService: OrgdataService) { }

  //--Method that Call OrgdataService and Get actual data
  listOrgdatas() {
    this.orgdataService.getOrgdataList().subscribe(
      data => {
        this.orgdatas = data;
      }
    )
  }

  //--Method that is called when the Component is loaded
  ngOnInit(): void {
    //--Call method which get Array of Orgdatas from Angular-service;
    this.listOrgdatas();
  }

}
