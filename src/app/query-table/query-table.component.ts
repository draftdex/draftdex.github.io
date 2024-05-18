import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GlobalConstants } from './../global/global-constants';

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

  @Input() pkmnList: any;
  @Input() filterMenuOpen: boolean = true;

  // Event listener to prompt addition to shortlist
  @Output() onAddToShortlist = new EventEmitter<any>();
  @Output() onRemoveFromShortList = new EventEmitter<any>();

  // Add pokemon to shortlist
  editShortlist(pkmn: any) {
    // Emit event to edit pkmn in shortlist
    pkmn.inShortList ? this.onRemoveFromShortList.emit(pkmn) : this.onAddToShortlist.emit(pkmn);
  }
}
