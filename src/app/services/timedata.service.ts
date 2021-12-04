import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Timedata } from '../common/timedata';


@Injectable({
  providedIn: 'root'
})
export class TimedataService {

  //--Base REST API Backend Endpoint URL that the current Angular-service is using
  private baseUrl = 'http://localhost:8600/api/timedatas';

  //--Inject HttpClient (@Injectable) with Angular Dependencies Injection Framework
  constructor(private httpClient: HttpClient) { }

  //--Method that Fetch JSON data from REST-API Service
  getTimedataList(): Observable<Timedata[]> {
    return this.httpClient.get<GetResponseTimedatas>(this.baseUrl).pipe(
      map(response => response._embedded.timedatas)
    );
  }

}


//--Interface that place JSON data into User Array
interface GetResponseTimedatas {
  _embedded: {
    timedatas: Timedata[];
  }
}
