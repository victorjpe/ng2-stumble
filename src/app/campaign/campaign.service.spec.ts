/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { CampaignService } from './campaign.service';
import { ApiService, JwtService } from '../shared/index';

const GUID = "8ce111f2-1b8e-4a51-bb56-a383c14739da";

describe('Service: Campaign', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [CampaignService, ApiService, JwtService]
    });
  });

  it('should be valid', inject([CampaignService], (service: CampaignService) => {
    expect(service).toBeTruthy();
  }));

  it('should insert a campaign', async(inject([CampaignService], (service: CampaignService) => {
    const campaign = {
      "startDate": "2016-12-16",
      "dueDate": "2016-12-31",
      "promisedInvestment": 0,
      "investment": 0,
      "adhoc": true,
      "description": "Test data automated",
      "status": "ONGOING",
      "id": "please-dont-delete"
    };

    service.saveCampaign(campaign).subscribe(c => {
      expect(c).toBeTruthy();
      expect(c.id).toBeTruthy();
    }, error => {
      console.log(error);
      expect(error).toBeUndefined();
    })
  })));


  xit('should update campaign', async(inject([CampaignService], (service: CampaignService) => {
    const campaign = {
      "startDate": "2016-12-16",
      "dueDate": "2016-12-31",
      "promisedInvestment": 0,
      "investment": 0,
      "adhoc": true,
      "description": "Test data automated and updated",
      "status": "ONGOING",
      "id": "please-dont-delete"
    };

    service.saveCampaign(campaign).subscribe(c => {
      expect(c).toBeTruthy();
      expect(c.id).toBeTruthy();
    }, error => {
      console.log(error);
      expect(error).toBeUndefined();
    })
  })));

  xit('should get the new campaign', async(inject([CampaignService], (service: CampaignService) => {
    service.getCampaign("please-dont-delete").subscribe(c => {
      expect(c).toBeTruthy();
      expect(c).toBeLessThanOrEqual(1);
      expect(c.id).toBe("please-dont-delete");
    }, error => {
      console.log(error);
      expect(error).toBeUndefined();
    })
  })));

  xit('should get all the campaigns', async(inject([CampaignService], (service: CampaignService) => {
    service.getCampaigns().subscribe(c => {
      expect(c).toBeTruthy();
      expect(c).toBeGreaterThan(1);
    }, error => {
      console.log(error);
      expect(error).toBeUndefined();
    })
  })));

  xit('should delete a campaign', async(inject([CampaignService], (service: CampaignService) => {
    service.deleteCampaign("please-dont-delete").subscribe(c => {
    }, error => {
      console.log(error);
      expect(error).toBeUndefined();
    })
  })));

});


