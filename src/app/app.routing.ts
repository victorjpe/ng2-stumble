import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CampaignPageComponent, CampaignDetailComponent, CampaignFormComponent } from './campaign/index';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'campaign', component: CampaignPageComponent },
  { path: 'campaign/:id', component: CampaignDetailComponent },
  { path: 'campaign-add', component: CampaignFormComponent },
  { path: 'campaign-edit/:id', component: CampaignFormComponent }
];

export const AppRoutes = RouterModule.forRoot(routes);

