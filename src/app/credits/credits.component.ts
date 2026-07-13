import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-credits',
    templateUrl: './credits.component.html',
    styleUrls: ['./credits.component.css', './../../styles.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class CreditsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
