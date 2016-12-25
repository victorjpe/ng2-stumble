import { Component, OnInit } from '@angular/core';
import { Campaign } from '../../shared/model/campaign.model';
import { CampaignService } from '../../shared/service/campaign.service';
import { ActivatedRoute, Route, Params, Router } from '@angular/router';

@Component({
  selector: 'app-campaign-form',
  templateUrl: './campaign-form.component.html',
  styleUrls: ['./campaign-form.component.css']
})
export class CampaignFormComponent implements OnInit {
  private campaign: Campaign = new Campaign();
  private editMode: boolean = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private campaignService: CampaignService
  ) { }

  ngOnInit() {
    /**
     * Use this method if the component is to remain same and the id(route parameter) is
     * going to vary a lot. THIS IS VERY IMPORTANT
     * DO NOT REMOVE
     */
    // this.route.params.switchMap((params: Params) => this.campaignService.getCampaign(params['id']))
    //   .subscribe(campaign => {
    //     this.campaign = campaign;
    //   })

    let campaignId = this.route.snapshot.params['id'];
    this.editMode = !!campaignId;
    if (this.editMode)
      this.getCampaign(campaignId);
  }

  getCampaign(campaignId) {
    this.campaignService.getCampaign(campaignId)
      .subscribe(c => {
        this.campaign = c;
      })
  }

  saveCampaign() {
    this.formatData();
    this.campaignService.saveCampaign(this.campaign)
      .subscribe(c => console.log('> campaign saved', c), error => console.log('> error', error));
    this.router.navigateByUrl('/campaign');
  }

  formatData() {
    this.campaign.status = this.campaign.status || 'ONGOING';
  }

  createEmptyCampaign() {
    this.campaign = {
      "startDate": "2016-12-17T00:00:00.000Z",
      "dueDate": (new Date(2016, 11, 31)).toDateString(),
      "promisedInvestment": 10000,
      "investment": 0,
      "adhoc": false,
      "description": "Sample",
      "status": "ONGOING",
      id: null
    };
  }

}