import { Component, OnInit } from '@angular/core';
import { Campaign } from '../../shared/index';
import { CampaignService } from '../../shared/service/campaign.service';

@Component({
  selector: 'app-campaign-page',
  templateUrl: './campaign-page.component.html',
  styleUrls: ['./campaign-page.component.css']
})
export class CampaignPageComponent implements OnInit {
  campaigns: Campaign[] = [];

  constructor(
    private campaignService: CampaignService
  ) { }

  ngOnInit() {
    this.getCampaigns();
  }

  getCampaigns() {
    let filter = {
      order: 'description asc'
    }
    this.campaignService.getCampaigns(filter).subscribe(campaigns => {
      campaigns.forEach(c => {
        this.campaigns.push(c);
      });
    });
  }

}