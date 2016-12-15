import { Component, OnInit } from '@angular/core';
import { CampaignListService } from './campaign-list.service';

@Component({
  selector: 'campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.css']
})
export class CampaignListComponent implements OnInit {
  campaigns = [];

  constructor(private CampaignListService: CampaignListService) { }

  ngOnInit() {
    this.getCampaigns();
  }

  getCampaigns() {
    this.CampaignListService.getCampaigns().subscribe(c => this.campaigns = c);
  }

}
