import { Component, OnInit, Output } from '@angular/core';
import { Input, HostListener, SimpleChanges, EventEmitter } from '@angular/core';
import { GlobalConstants } from './../global/global-constants';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.pkmnDropdownActive = false;
    let query = this.dbClient.from('pokemonInfo').select();
    this.getPokemon(query).then(response => {
      this.pkmnList = response;
      this.pkmnNames = Array.from(response, pMon => (<any> pMon).name);
    });
  }

  async getPokemon(query:any) {
    let { data, error } = await query;
    return data;
  }

  // Import table attributes from GlobalConstants
  tableHeaders = GlobalConstants.pokemonAttributesTableHeaders;
  tableHeaderMap = GlobalConstants.tableHeaderMap;
  
  pkmnDropdownActive = false;
  pkmn: any;
  pkmnNames: any;
  selectedPokemonName = '';

  @Input() addEditEnabled = false;
  @Input() dbClient: any;
  @Output() onAddEditDisabled = new EventEmitter<any>();

  pkmnList = [];
  // Register DOM click event to dynamically hide add/edit menu when necessary
  @HostListener("document:click", ['$event']) onClick(event: PointerEvent){
    if ((<HTMLSelectElement> event.target).id === "overlay" && this.addEditEnabled) {
      this.onAddEditDisabled.emit();
    }
  }

  // Dynamically display pokemon according to input text
  searchPokemon($event: KeyboardEvent) {
    // Grab pokemon from pokemon dropdown
    const pokemon = document.getElementsByClassName('pokemon-select-active'); // innerText only gives human-readable content of <a> tag
    
    // Determine if a match is found
    let found = false;

    // Display all potential pokemon if no input
    if (!this.pkmnDropdownActive && $event.key !== 'Escape') {
      this.setPkmnDropdownActive();
      for (let i = 0; i < pokemon.length; i++) {
        (<HTMLElement> pokemon[i]).style.display = "";
      }
    }

    // Iterate over pokemon and compare to input text
    // Only display options matching input
    for (let i = 0; i < pokemon.length; i++) {
      let possible_pkmn = (<HTMLElement> pokemon[i]);
      if (possible_pkmn.innerText.toUpperCase().indexOf(this.selectedPokemonName.toUpperCase()) > -1) {
        possible_pkmn.style.display = "";
        found = true;
      } else {
        possible_pkmn.style.display = "none";
      }
    }

    // Hide dropdown menu if input doesn't match any abilities
    if (!found) {
      this.setPkmnDropdownInactive();
    }
  }

  // Show pokemon dropdown menu
  setPkmnDropdownActive() {
    this.pkmnDropdownActive = true;
  }

  // Hide Pokemon dropdown menu
  setPkmnDropdownInactive() {
    this.pkmnDropdownActive = false;
  }

  
  // Register dropdown menu selection
  selectPkmn(pkmn: string) {
    this.pkmn = this.pkmnList.filter(mon => (<any>mon).name === pkmn);
    this.selectedPokemonName = this.pkmn.name;
    this.pkmnDropdownActive = false;
  }
}
