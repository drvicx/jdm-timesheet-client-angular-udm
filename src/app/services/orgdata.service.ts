import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Orgdata } from '../common/orgdata';


@Injectable({
  providedIn: 'root'
})
export class OrgdataService {

  //--Base REST API Backend Endpoint URL that the current Angular-service is using
  private baseUrl = 'http://localhost:8600/api/orgdatas';

  //--Inject HttpClient (@Injectable) with Angular Dependencies Injection Framework
  constructor(private httpClient: HttpClient) { }

  //--Method that Fetch JSON data from REST-API Service
  getOrgdataList(): Observable<Orgdata[]> {
    return this.httpClient.get<GetResponseOrgdatas>(this.baseUrl).pipe(
      map(response => response._embedded.orgdatas)
    );
  }

}


//--Interface that place JSON data into Orgdata Array
interface GetResponseOrgdatas {
  _embedded: {
    orgdatas: Orgdata[];
  }
}
