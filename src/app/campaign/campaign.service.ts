import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { URLSearchParams } from '@angular/http';


import { Campaign, ApiService } from '../shared/index';

@Injectable()
export class CampaignService {

  constructor(
    private apiService: ApiService
  ) { }

  saveCampaign(payload): Observable<any> {
    return this.apiService.put('campaigns', payload);
  }

  deleteCampaign(campaignId): Observable<any> {
    return this.apiService.delete(`campaigns/${campaignId}`);
  }

  getCampaigns(filter: Object = {}): Observable<Campaign[]> {
    return this.apiService.get('campaigns', JSON.stringify(filter));
  }

  getCampaign(campaignId): Observable<Campaign> {
    let url = `campaigns/${campaignId}`;
    return this.apiService.get(url);
  }
}
