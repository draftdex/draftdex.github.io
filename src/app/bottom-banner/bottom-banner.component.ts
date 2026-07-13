import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { GlobalConstants } from './../global/global-constants';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-bottom-banner',
    imports: [RouterModule],
    templateUrl: './bottom-banner.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./bottom-banner.component.css', './../../styles.css']
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
