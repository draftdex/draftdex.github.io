import { Component } from '@angular/core';
import { GlobalConstants } from './global/global-constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  /*
    Define component properties
  */
  title = 'DraftDex';
  MasterSheet = GlobalConstants.MasterSheet;
  Help = GlobalConstants.Help;
  Ruleset = GlobalConstants.Ruleset;
  Showdown = GlobalConstants.Showdown;
  ScheduleLink = GlobalConstants.ScheduleLink;
}
