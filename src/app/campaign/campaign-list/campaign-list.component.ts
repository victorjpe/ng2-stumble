import { Component, OnInit } from '@angular/core';
import { CampaignApi } from '../../shared/index';
@Component({
  selector: 'campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.css']
})
export class CampaignListComponent implements OnInit {
  campaigns = [];

  constructor(
    private CampaignApi: CampaignApi
  ) { }

  ngOnInit() {
    this.getCampaigns();
  }

  getCampaigns() {
    this.CampaignApi.find().subscribe(c => this.campaigns = c);
  }

}
