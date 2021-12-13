import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/common/user';

import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-user-card-single',
  templateUrl: './user-card-single.component.html',
  styleUrls: ['./user-card-single.component.css']
})
export class UserCardSingleComponent implements OnInit {

  //--Single User Object
  user!: User;

  //--Inject Angular Service for User data
  //  Inject current/activated route (..which loads the component ..used for access to route parameters)
  constructor(private userService: UserService,
              private route: ActivatedRoute) {
  }

  //--Get ID from RouterLink and call UserService with ID parameter
  handleUserDetails() {
    //- get the "id" param string value. convert string to a number using the "+" symbol
    const theUserId: number = +this.route.snapshot.paramMap.get('id')!;
    //- get the User for the given User ID
    this.userService.getUserDetails(theUserId).subscribe(
      data => {
        this.user = data;
      }
    )
  }

  //--Method witch calls on Component Initialization
  ngOnInit(): void {
    //- Subscribe on the param map for the given route ..and
    //- Call method which get User data from Angular Service;
    this.route.paramMap.subscribe(() => {
      this.handleUserDetails();
    })
  }

}
