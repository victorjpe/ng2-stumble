import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CampaignFormComponent } from './campaign/campaign-form/campaign-form.component';
import { CampaignService, CampaignListComponent } from './campaign/index';
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
    CampaignService,
    ApiService,
    JwtService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {

}
