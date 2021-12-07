import { Component, OnInit } from '@angular/core';

import { TimedataService } from 'src/app/services/timedata.service';
import { Timedata } from 'src/app/common/timedata';


@Component({
  selector: 'app-timedata-list',
  //templateUrl: './timedata-list.component.html',
  templateUrl: './timedata-list-table.component.html',
  styleUrls: ['./timedata-list.component.css']
})
export class TimedataListComponent implements OnInit {

  //--new TypeScript version requirements - properties MUST by initialized in constructor
  timedatas!: Timedata[];

  //--Inject Angular Service for Timedata
  constructor(private timedataService: TimedataService) { }

  //--Method that Call TimedataService and Get actual data
  listTimedatas() {
    this.timedataService.getTimedataList().subscribe(
      data => {
        this.timedatas = data;
      }
    )
  }

  //--Method that is called when the Component is loaded
  ngOnInit(): void {
    //--Call method which get Array of Timedata from Angular Service;
    this.listTimedatas();
  }

}
