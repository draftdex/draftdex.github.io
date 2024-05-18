import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HostListener } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Pokemon } from '../shared/models/pokemon.model';
import { GlobalConstants } from '../global/global-constants';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css', '../../styles.css']
})
export class AddEditComponent implements OnInit {
  // Import table attributes from GlobalConstants
  tableHeaders = GlobalConstants.pokemonAttributesTableHeaders;
  tableHeaderMap = GlobalConstants.tableHeaderMap;
  types = GlobalConstants.typeList;
  abilities = GlobalConstants.abilityList;
  tiers = GlobalConstants.tierList;
  
  pkmnDropdownActive = false;
  type1DropdownActive = false;
  type2DropdownActive = false;
  ability1DropdownActive = false;
  ability2DropdownActive = false;
  hiddenAbilityDropdownActive = false;   // == hiddenAbility
  tierDropdownActive = false;

  pkmn: Pokemon = new Pokemon();
  pkmnNames: any;

  selectedPokemonName = '';

  password = "";    // user password
  newVals: Pokemon = new Pokemon();    // updated/new vals for pokemon (from user input)
  pkmnList = [];

  // Create supabase.io database client
  dbClient: SupabaseClient = createClient('https://kqyshvlibkoatazqavuc.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0Mzc0MTI3MSwiZXhwIjoxOTU5MzE3MjcxfQ.hMsQnDsKARs4OyTsIpUR2nPR86TQxbvn3hOoyuGEnA8');


  constructor(private router: Router) { }

  ngOnInit(): void {
    let query = this.dbClient.from('pokemonInfo').select();
    this.getPokemon(query).then(response => {
      this.pkmnList = response;
      this.pkmnNames = Array.from(response, pMon => (<any> pMon).id);
    });
  }

  async getPokemon(query:any) {
    let { data, error } = await query;
    return data;
  }

  // Register DOM click event to dynamically hide add/edit menu when necessary
  @HostListener("document:click", ['$event']) onClick(event: PointerEvent){
    if ((<HTMLSelectElement> event.target).id === "overlay") {
      this.router.navigateByUrl('/pokemon-search');
    } else if ((<HTMLSelectElement> event.target).id !== "pkmn_choice" && (<HTMLSelectElement> event.target).id !== "pkmn_input" && this.pkmnDropdownActive) {
      this.setDropdownInactive('pkmn');
    } else if ((<HTMLSelectElement> event.target).id !== "type1_choice" && (<HTMLSelectElement> event.target).id !== "type1_input" && this.type1DropdownActive) {
      this.setDropdownInactive('type1');
    } else if ((<HTMLSelectElement> event.target).id !== "type2_choice" && (<HTMLSelectElement> event.target).id !== "type2_input" && this.type2DropdownActive) {
      this.setDropdownInactive('type2');
    } else if ((<HTMLSelectElement> event.target).id !== "ability1_choice" && (<HTMLSelectElement> event.target).id !== "ability1_input" && this.ability1DropdownActive) {
      this.setDropdownInactive('ability1');
    } else if ((<HTMLSelectElement> event.target).id !== "ability2_choice" && (<HTMLSelectElement> event.target).id !== "ability2_input" && this.ability2DropdownActive) {
      this.setDropdownInactive('ability2');
    } else if ((<HTMLSelectElement> event.target).id !== "hiddenAbility_choice" && (<HTMLSelectElement> event.target).id !== "hiddenAbility_input" && this.hiddenAbilityDropdownActive) {
      this.setDropdownInactive('hiddenAbility');
    } else if ((<HTMLSelectElement> event.target).id !== "tier_choice" && (<HTMLSelectElement> event.target).id !== "tier_input" && this.tierDropdownActive) {
      this.setDropdownInactive('tier');
    }
  }

  // Dynamically display pokemon according to input text
  searchPokemon($event: KeyboardEvent) {
    // Grab pokemon from pokemon dropdown
    const pokemon = document.getElementsByClassName('pkmn-select');

    // Determine if a match is found
    let found = false;

    // Display all potential pokemon if no input
    if (!this.pkmnDropdownActive && $event.key !== 'Escape') {
      this.setDropdownActive('pkmn');
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
      this.setDropdownInactive('pkmn');
    }
  }

  // Dynamically display types according to input text
  searchTypes($event: KeyboardEvent, type: number) {
    // Grab types from type dropdown
    const displayed_types = document.getElementsByClassName(`type${type}-select`);

    // Set appropriate vars for correct type
    let active, typeText;
    if (type === 1) {
      active = this.type1DropdownActive;
      typeText = this.newVals.type1;
    } else {
      active = this.type2DropdownActive;
      typeText = this.newVals.type2;
    }
    
    // Determine if a match is found
    let found = false;

    // Display all potential pokemon if no input
    if (!active && $event.key !== 'Escape') {
      this.setDropdownActive(`type${type}`);
      for (let i = 0; i < displayed_types.length; i++) {
        (<HTMLElement> displayed_types[i]).style.display = "";
      }
    }

    // Iterate over pokemon and compare to input text
    // Only display options matching input
    for (let i = 0; i < displayed_types.length; i++) {
      let possible_type = (<HTMLElement> displayed_types[i]);
      if (possible_type.innerText.toUpperCase().indexOf(typeText.toUpperCase()) > -1) {
        possible_type.style.display = "";
        found = true;
      } else {
        possible_type.style.display = "none";
      }
    }

    // Hide dropdown menu if input doesn't match any abilities
    if (!found) {
      this.setDropdownInactive(`type${type}`);
    }
  }

  // Dynamically display abilities according to input text
  searchAbilities($event: KeyboardEvent, abilityType: string) {
    // Grab abilities from ability dropdown
    const displayed_abilities = document.getElementsByClassName(`${abilityType}-select`);

    // Set appropriate vars for correct type
    let active, abilityText;
    if (abilityType === "ability1") {
      active = this.ability1DropdownActive;
      abilityText = this.newVals.ability1;
    } else if (abilityType === "ability2") {
      active = this.ability2DropdownActive;
      abilityText = this.newVals.ability2;
    } else {
      active = this.hiddenAbilityDropdownActive;
      abilityText = this.newVals.hiddenAbility;
    }
    
    // Determine if a match is found
    let found = false;

    // Display all potential abilities if no input
    if (!active && $event.key !== 'Escape') {
      this.setDropdownActive(`${abilityType}`);
      for (let i = 0; i < displayed_abilities.length; i++) {
        (<HTMLElement> displayed_abilities[i]).style.display = "";
      }
    }

    // Iterate over abilities and compare to input text
    // Only display options matching input]
    for (let i = 0; i < displayed_abilities.length; i++) {
      let possible_ability = (<HTMLElement> displayed_abilities[i]);
      if (possible_ability.innerText.toUpperCase().indexOf(abilityText.toUpperCase()) > -1) {
        possible_ability.style.display = "";
        found = true;
      } else {
        possible_ability.style.display = "none";
      }
    }

    // Hide dropdown menu if input doesn't match any abilities
    if (!found) {
      this.setDropdownInactive(`${abilityType}`);
    }
  }

  // Dynamically display tiers according to input text
  searchTiers($event: KeyboardEvent) {
    // Grab tiers from tier dropdown
    const displayedTiers = document.getElementsByClassName('tier-select');

    // Determine if a match is found
    let found = false;

    // Display all potential tiers if no input
    if (!this.tierDropdownActive && $event.key !== 'Escape') {
      this.setDropdownActive('tier');
      for (let i = 0; i < displayedTiers.length; i++) {
        (<HTMLElement> displayedTiers[i]).style.display = "";
      }
    }

    // Iterate over pokemon and compare to input text
    // Only display options matching input
    for (let i = 0; i < displayedTiers.length; i++) {
      let possible_tier = (<HTMLElement> displayedTiers[i]);
      if (possible_tier.innerText.toUpperCase().indexOf(this.newVals.tier.toUpperCase()) > -1) {
        possible_tier.style.display = "";
        found = true;
      } else {
        possible_tier.style.display = "none";
      }
    }

    // Hide dropdown menu if input doesn't match any abilities
    if (!found) {
      this.setDropdownInactive('tier');
    }
  }

  // Show pokemon dropdown menu
  setDropdownActive(fieldName: string) {
    switch (fieldName) {
      case 'pkmn':
        this.pkmnDropdownActive = true;
        break;
      case 'type1':
        this.type1DropdownActive = true;
        break;
      case 'type2':
        this.type2DropdownActive = true;
        break;
      case 'ability1':
          this.ability1DropdownActive = true;
          break;
      case 'ability2':
        this.ability2DropdownActive = true;
        break;
      case 'hiddenAbility':
        this.hiddenAbilityDropdownActive = true;
        break;
      case 'tier':
        this.tierDropdownActive = true;
        break;
      default:
        break; 
    }
  }

  // Hide Pokemon dropdown menu
  setDropdownInactive(fieldName: string) {
    switch (fieldName) {
      case 'pkmn':
        this.pkmnDropdownActive = false;
        break;
      case 'type1':
        this.type1DropdownActive = false;
        break;
      case 'type2':
        this.type2DropdownActive = false;
        break;
      case 'ability1':
        this.ability1DropdownActive = false;
        break;
      case 'ability2':
        this.ability2DropdownActive = false;
        break;
      case 'hiddenAbility':
        this.hiddenAbilityDropdownActive = false;
        break;
      case 'tier':
        this.tierDropdownActive = false;
        break;
      default:
        break; 
    }
  }
  
  // Register dropdown menu selection for pkmn
  selectPkmn(pkmn: string) {
    this.pkmn = this.pkmnList.filter(mon => (<any>mon).id === pkmn)[0];
    this.selectedPokemonName = this.pkmn.name;
    this.pkmnDropdownActive = false;
    this.newVals = this.pkmn;
  }

  // Register dropdown menu selection for type
  selectType(type: string, typeNum: number) {
    const filteredType = this.types.filter(tempType => tempType === type)[0];
    if (typeNum === 1) {
      this.type1DropdownActive = false;
      this.newVals.type1 = filteredType;
    } else {
      this.type2DropdownActive = false;
      this.newVals.type2 = filteredType;
    }
  }

  // Register ability menu selection for ability
  selectAbility(ability: string, abilityNum: number) {
    const filteredAbility = this.abilities.filter(tempAbility => tempAbility === ability)[0];
    if (abilityNum === 1) {
      this.ability1DropdownActive = false;
      this.newVals.ability1 = filteredAbility;
    } else if (abilityNum === 2) {
      this.ability2DropdownActive = false;
      this.newVals.ability2 = filteredAbility;
    } else {
      this.hiddenAbilityDropdownActive = false;
      this.newVals.hiddenAbility = filteredAbility;
    }
  }

  // Register dropdown menu selection for tier
  selectTier(tier: string) {
    const filteredTier = this.tiers.filter(t => t === tier)[0];
    this.newVals.tier = filteredTier;
    this.tierDropdownActive = false;
  }

  // Verify password and submit user input values
  submitNewVals() {
    // Create supabase.io database client
    const dbClient = createClient('https://kqyshvlibkoatazqavuc.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0Mzc0MTI3MSwiZXhwIjoxOTU5MzE3MjcxfQ.hMsQnDsKARs4OyTsIpUR2nPR86TQxbvn3hOoyuGEnA8');
    let query: any;
    let pwdCorrect = false;   // Flag to verify pwd

    const pwd = dbClient.from('users').select().eq('username', 'Admin');
    pwd.then(response => {
      let md5 = require('md5');   // hashing function
      let user;
      response.body ? user = response.body[0] : null;
      if (user) {
        pwdCorrect = (<any>user).password == md5(this.password);
      }

      // Replace any unchanged values w/ original Pokemon vals
      if (pwdCorrect) {
        if (this.selectedPokemonName !== '') {
          query = dbClient.from('pokemonInfo').update(this.newVals);
          query.eq('name', this.selectedPokemonName);
        } else if (this.newVals.name !== '') {
          // Create new entry
          let bst: number = this.newVals['hp'] + this.newVals['attack'] + this.newVals['defense'] + this.newVals['spAttack'] + this.newVals['spDefense'] + this.newVals['speed'];
          let id: string = this.newVals.form + this.newVals.name;
          let valsToInsert = { 
            'id': id,
            'bst': bst,
            ...this.newVals 
          };
          query = dbClient.from('pokemonInfo').insert([valsToInsert]);
        } else {
          alert('Please select a Pokemon to update or provide a new Pokemon name.');
        }
    
        // Gather response from query and clear overlay
        
        if (query) {
          let res = query.then((response: { error: null; }) => {
            if (response.error === null) {
              alert("Database Commit Successful")
              this.pkmn = new Pokemon();
              this.newVals = new Pokemon();
              this.selectedPokemonName = '';
              this.password = '';
              this.router.navigateByUrl('/pokemon-search');
            } else {
              alert(`Error: ${response.error}`);
            }
          });
        }
      } else {
        alert('Password incorrect');
      }
    });
  }
}
