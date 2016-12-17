import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../campaign.service';

@Component({
  selector: 'campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.css']
})
export class CampaignListComponent implements OnInit {
  campaigns = [];

  constructor(private CampaignService: CampaignService) { }

  ngOnInit() {
    this.getCampaigns();
  }

  getCampaigns() {
    this.CampaignService.getCampaigns().subscribe(c => this.campaigns = c);
  }

}
