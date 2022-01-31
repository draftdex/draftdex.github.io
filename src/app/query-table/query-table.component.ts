import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { faAngleUp, faSpinner } from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-query-table',
  templateUrl: './query-table.component.html',
  styleUrls: ['./query-table.component.css']
})
export class QueryTableComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnInit(): void {
  }

  tableHeaders = [
    'Name',
    'Form',
    'GMax',
    'Type 1',
    'Type 2',
    'Ability 1',
    'Ability 2',
    'Hidden Ability',
    'HP',
    'Attack',
    'Defense',
    'Sp. Attack',
    'Sp. Defense',
    'Speed',
    'Tier',
    'Free',
    'Team'
  ]

  tableHeaderMap: any = {
    'Name' : "name",
    'Form' : "form",
    'GMax' : "gmax",
    'Type 1' : "type1",
    'Type 2' : "type2",
    'Ability 1' : "ability1",
    'Ability 2' : "ability2",
    'Hidden Ability' : "hiddenAbility",
    'HP' : "hp",
    'Attack' : "attack",
    'Defense' : "defense",
    'Sp. Attack' : "spAttack",
    'Sp. Defense' : "spDefense",
    'Speed' : "speed",
    'Tier' : "tier",
    'Free' : "available",
    'Team' : "team"
  };

  // Define icons used in this component
  faAngleUp = faAngleUp;
  faSpinner = faSpinner;

  @Input() pkmnList: any;
  @Input() queryProcessing: any;  // boolean to determine if a query is being processed (if so, display spinner)

  // Flip angle determining column sort direction
  flipIcon(event: MouseEvent) {
    // Grab clicked element
    let element = <HTMLElement>event.target;

    // Check if icon was clicked directly
    if (element.classList.contains("svg-inline--fa") || element.classList.contains("ng-fa-icon")) {
      element.classList.contains("fa-rotate-180") ? element.classList.remove("fa-rotate-180") : element.classList.add("fa-rotate-180");
    } else {
      // Check if icon is embedded in div that was clicked
      let tableHeaderIcon = (<HTMLElement>event.target).querySelector('fa-icon')?.querySelector('svg');
      tableHeaderIcon?.classList.contains("fa-rotate-180") ? tableHeaderIcon?.classList.remove("fa-rotate-180") : tableHeaderIcon?.classList.add("fa-rotate-180");
    }
}

  /**
   * Add listener for changes to variables defined in parent component
   * @param changes - SimpleChanges object, where keys are input prop names and val is 
   *                  instance of SimpleChange class
   * @returns nothing
   */
  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case 'pkmnList': {
            console.log(changes[propName]);
            break;
          } case 'queryProcessing': {
            console.log(changes[propName]);
            break;
          }
        }
      }
    }
  }
}
