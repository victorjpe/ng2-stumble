import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Campaign, ApiService } from '../shared/index';

@Injectable()
export class CampaignService {

  constructor(
    private apiService: ApiService
  ) {

  }

  saveCampaign(payload): Observable<any> {
    return this.apiService.put('campaigns', payload);
  }

  deleteCampaign(campaignId): Observable<Campaign> {
    return this.apiService
      .delete('campaigns', campaignId);
  }

  getCampaigns(filter = ''): Observable<Campaign[]> {
    return this.apiService.get('campaigns', filter);
  }

  getCampaign(campaignId): Observable<Campaign> {
    return this.apiService.get('campaigns', campaignId);

  }
}
