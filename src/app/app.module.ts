import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CampaignListComponent } from './campaign/campaign-list/campaign-list.component';
import { CampaignFormComponent } from './campaign/campaign-form/campaign-form.component';
import { CampaignService } from './campaign/index';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ApiService, JwtService } from './shared/index';
import { AppRoutes } from './app.routing';
import { CampaignDetailComponent } from './campaign/campaign-detail/campaign-detail.component';


CampaignService
@NgModule({
  declarations: [
    AppComponent,
    CampaignListComponent,
    CampaignFormComponent,
    DashboardComponent,
    CampaignDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRoutes
  ],
  providers: [
    CampaignService,
    ApiService,
    JwtService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
