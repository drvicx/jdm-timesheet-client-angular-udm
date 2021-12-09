import { Component, OnInit } from '@angular/core';

import { OrgdataService } from 'src/app/services/orgdata.service';
import { Orgdata } from 'src/app/common/orgdata';


@Component({
  selector: 'app-orgdata-header-single',
  templateUrl: './orgdata-header-single.component.html',
  styleUrls: ['./orgdata-header-single.component.css']
})
export class OrgdataHeaderSingleComponent implements OnInit {

  //--Array of ORGDATA Data
  orgdatas!: Orgdata[];

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
