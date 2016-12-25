import { Component, OnInit, Input } from '@angular/core';
import { Campaign } from '../../shared/index';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.css']
})
export class CampaignListComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  @Input() campaigns: Campaign[] = [];
  @Input() loading: boolean = false;

}