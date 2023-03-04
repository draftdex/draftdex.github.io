import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faAngleUp, faSpinner, faPlusSquare, faMinusCircle } from '@fortawesome/free-solid-svg-icons'; 
import { GlobalConstants } from '../shared/global-constants';

@Component({
  selector: 'app-query-table',
  templateUrl: './query-table.component.html',
  styleUrls: ['./query-table.component.css', './../../styles.css']
})
export class QueryTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Import table attributes from GlobalConstants
  tableHeaders = GlobalConstants.pokemonAttributesTableHeaders;
  tableHeaderMap = GlobalConstants.tableHeaderMap;

  // Define icons used in this component
  faAngleUp = faAngleUp;
  faSpinner = faSpinner;
  faPlusSquare = faPlusSquare;
  faMinusCircle = faMinusCircle;

  @Input() pkmnList: any;
  @Input() filterMenuOpen: boolean = true;

  // Event listener to prompt addition to shortlist
  @Output() onAddToShortlist = new EventEmitter<any>();
  @Output() onRemoveFromShortList = new EventEmitter<any>();

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

  // Add pokemon to shortlist
  editShortlist(pkmn: any) {
    // Emit event to edit pkmn in shortlist
    pkmn.inShortList ? this.onRemoveFromShortList.emit(pkmn) : this.onAddToShortlist.emit(pkmn);
  }
}
