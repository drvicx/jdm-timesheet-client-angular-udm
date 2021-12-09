import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/common/user';


@Component({
  selector: 'app-user-card-list-home',
  templateUrl: './user-card-list-home.component.html',
  styleUrls: ['./user-card-list-home.component.css']
})
export class UserCardListHomeComponent implements OnInit {

  //--Array of USER Data
  users!: User[];

  //--Inject Angular Service for User
  constructor(private userService: UserService) { }

  //--Method that Call UserService and Get actual data
  listUsers() {
    this.userService.getUserList().subscribe(
      data => {
        this.users = data;
      }
    )
  }

  //--Method that is called when the Component is loaded
  ngOnInit(): void {
    //--Call method which get Array of Users from Angular-service;
    this.listUsers();

  }

}
