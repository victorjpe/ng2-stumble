/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { ApiService, JwtService } from '../index';
import { CampaignService } from './campaign.service';

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
      expect(error).toBeNull();
    })
  })));

  it('should update campaign', async(inject([CampaignService], (service: CampaignService) => {
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
      expect(c.description).toBe("Test data automated and updated");
    }, error => {
      console.log(error);
      expect(error).toBeNull();
    })
  })));

  it('should get the new campaign', async(inject([CampaignService], (service: CampaignService) => {
    service.getCampaign("please-dont-delete").subscribe(c => {
      expect(c).toBeTruthy();
      expect(c.id).toBe("please-dont-delete");
    }, error => {
      console.log(error);
      expect(error).toBeNull();
    })
  })));

  it('should get all the campaigns', async(inject([CampaignService], (service: CampaignService) => {
    service.getCampaigns().subscribe(c => {
      expect(c).toBeTruthy();
      expect(c.length).toBeGreaterThan(1);
    }, error => {
      console.log(error);
      expect(error).toBeNull();
    })
  })));

  it('should get all the campaigns sorted in asc order', async(inject([CampaignService], (service: CampaignService) => {
    let filter = {
      order: "description asc"
    };
    service.getCampaigns(filter).subscribe(c => {
      let array = c.map(q => q.description).sort();
      for (let i = 0; i < c.length; i++) {
        expect(c[i].description).toBe(array[i]);
      }
    }, error => {
      console.log(error);
      expect(error).toBeNull();
    })
  })));

  it('should delete a campaign', async(inject([CampaignService], (service: CampaignService) => {
    service.deleteCampaign("please-dont-delete").subscribe(c => {
    }, error => {
      console.log(error);
      expect(error).toBeNull();
    })
  })));

});


