import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../common/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  //--Base REST API Backend Endpoint URL that the current Angular-service is using
  private baseUrl = 'http://localhost:8600/api/users';

  //--Inject HttpClient (@Injectable) with Angular Dependencies Injection Framework
  constructor(private httpClient: HttpClient) { }

  //--Method witch Fetch all JSON User data from REST-API Service
  getUserList(): Observable<User[]> {
    return this.httpClient.get<GetResponseUsers>(this.baseUrl).pipe(
      map(response => response._embedded.users)
    );
  }

  //--Method witch Fetch single JSON User data from REST-API Service
  getUserDetails(theUserId: number): Observable<User> {
    //- build URL based on user id, for example
    //  http://localhost:8600/api/users/1
    const userUrl = `${this.baseUrl}/${theUserId}`;
    //- return single User data/object
    return this.httpClient.get<User>(userUrl);
  }

}


//--Interface that place JSON data into User Array
interface GetResponseUsers {
  _embedded: {
    users: User[];
  }
}
