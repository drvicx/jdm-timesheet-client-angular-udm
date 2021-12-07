import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/common/user';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  //--new TypeScript version requirements - properties MUST by initialized in constructor
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
