import { Component, OnInit } from '@angular/core';

import { CampaignService } from '../index';

@Component({
  selector: 'campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.css']
})
export class CampaignListComponent implements OnInit {
  campaigns = [];
  loading = true;

  constructor(private CampaignService: CampaignService) { }

  ngOnInit() {
    this.getCampaigns();
  }

  getCampaigns() {
    let filter = {
      order: "description asc"
    };

    this.CampaignService.getCampaigns(filter).subscribe(c => {
      this.campaigns = c;
      this.loading = false;
    });

    this.CampaignService.getCampaign('appy').subscribe(a => {
      console.log('> appy', a);
    })
  }
}
