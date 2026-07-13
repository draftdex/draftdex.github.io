import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleUp, faMinusCircle, faPlusSquare, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { SortDirective } from '../directive/sort.directive';
import { ShortlistPokemon } from '../shared/models/pokemon.model';
import { GlobalConstants } from './../global/global-constants';

@Component({
  selector: 'app-query-table',
  templateUrl: './query-table.component.html',
  styleUrls: ['./query-table.component.css', './../../styles.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [NgClass, FontAwesomeModule, SortDirective],
  standalone: true
})
export class QueryTableComponent {

  // Import table attributes from GlobalConstants
  tableHeaders = GlobalConstants.pokemonAttributesTableHeaders;
  tableHeaderMap = GlobalConstants.tableHeaderMap;

  // Define icons used in this component
  faAngleUp = faAngleUp;
  faSpinner = faSpinner;
  faPlusSquare = faPlusSquare;
  faMinusCircle = faMinusCircle;

  readonly pkmnList = input.required<ShortlistPokemon[]>();
  readonly filterMenuOpen = input(true);

  // Event listener to prompt addition to shortlist
  readonly onAddToShortlist = output<ShortlistPokemon>();
  readonly onRemoveFromShortList = output<ShortlistPokemon>();

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
  editShortlist(pkmn: ShortlistPokemon) {
    // Emit event to edit pkmn in shortlist
    pkmn.inShortList ? this.onRemoveFromShortList.emit(pkmn) : this.onAddToShortlist.emit(pkmn);
  }
}
