import { Component, OnInit } from '@angular/core';
import { Campaign } from '../../shared/model/campaign.model';
import { CampaignService } from '../../shared/service/campaign.service';
import { ActivatedRoute, Route, Params, Router } from '@angular/router';

@Component({
  selector: 'app-campaign-detail',
  templateUrl: './campaign-detail.component.html',
  styleUrls: ['./campaign-detail.component.css']
})
export class CampaignDetailComponent implements OnInit {
  campaign: Campaign = new Campaign();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private campaignService: CampaignService
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.campaignService.getCampaign(params['id']))
      .subscribe(c => this.campaign = c);
  }

  deleteCampaign() {
    let confirmDelete = confirm(`Are you sure you want to delete ${this.campaign.description}`);
    if (confirmDelete) {
      this.campaignService.deleteCampaign(this.campaign.id).subscribe(result => console.log(result));
      this.router.navigateByUrl('/campaign');
    }
  }
}