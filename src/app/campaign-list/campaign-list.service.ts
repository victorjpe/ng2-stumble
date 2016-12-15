import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

@Injectable()
export class CampaignListService {

  constructor(private http: Http) { }

  getCampaigns(): Observable<any[]> {
    console.log('> data here');
    return this.http.get('https://rest-sample.herokuapp.com/api/campaigns')
    .map((res:Response)=>res.json());
  }

  private extractData(res: Response) {
    console.log('> data here');
    let body = res.json();
    return body.data || {};
  }

  abc() {
    return ["India", "Australia", "U.S.A", "Germany"];
  }

}
