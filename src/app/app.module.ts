import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CampaignListComponent } from './campaign-list/campaign-list.component';
import { CampaignListService } from './campaign-list/campaign-list.service';

@NgModule({
  declarations: [
    AppComponent,
    CampaignListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CampaignListService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
