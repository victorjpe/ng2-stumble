import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CampaignListComponent } from './campaign/campaign-list/campaign-list.component';
import { CampaignFormComponent } from './campaign/campaign-form/campaign-form.component';
import { CampaignListService } from './campaign/campaign-list/campaign-list.service';
import { CampaignService } from './campaign/index';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ApiService, JwtService } from './shared/index';


CampaignService
@NgModule({
  declarations: [
    AppComponent,
    CampaignListComponent,
    CampaignFormComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    CampaignListService,
    CampaignService,
    ApiService,
    JwtService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
