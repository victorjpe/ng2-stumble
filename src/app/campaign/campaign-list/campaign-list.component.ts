import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.css']
})
export class CampaignListComponent implements OnInit {
  campaigns = [];

  constructor() { }

  ngOnInit() {
    this.getCampaigns();
  }

  getCampaigns() {

  }

}
