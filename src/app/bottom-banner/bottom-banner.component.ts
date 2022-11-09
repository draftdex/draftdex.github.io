import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from './../global/global-constants';

@Component({
  selector: 'app-bottom-banner',
  templateUrl: './bottom-banner.component.html',
  styleUrls: ['./bottom-banner.component.css']
})
export class BottomBannerComponent implements OnInit {
  /*
    Define component properties
  */
  title = 'DraftDex';
  MasterSheet = GlobalConstants.MasterSheet;
  Help = GlobalConstants.Help;
  Ruleset = GlobalConstants.Ruleset;
  Showdown = GlobalConstants.Showdown;
  ScheduleLink = GlobalConstants.ScheduleLink;

  constructor() { }

  ngOnInit(): void {
  }

}
