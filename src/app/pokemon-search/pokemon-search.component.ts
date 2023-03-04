import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth-service';
import { SupabaseService } from '../shared/services/supabase-service';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css', './../../styles.css']
})
export class PokemonSearchComponent implements OnInit {
  pkmnList = [];
  filterVals: any = {};
  shortList: any = [];
  filterMenuOpen: boolean = true;

  queryProcessing = false;

  constructor(private authService: AuthService,
              private supabaseService: SupabaseService) {}

  ngOnInit(): void {
    this.getPokemonForTeam(this.authService.userSession.team);
  }

  private getPokemonForTeam(teamName: string | undefined): void {
    this.queryProcessing = true;
    this.supabaseService.getPokemonForTeam(teamName).subscribe({
      next: (pokemon) => {
        this.pkmnList = pokemon;
        this.queryProcessing = false;
      },
      error: (error) => console.error(`Error retrieving pokemon for ${teamName}`, error)
    })
  }

  async getPokemon(query:any) {
    let { data, error } = await query;
    return data;
  }

  // Listens for filterUpdate event fired from filter-menu component
  // Sets filterVals to filter selections and calls getPokemon() to query database
  getFilterUpdate(filter_vals: any): void {
    this.filterVals = filter_vals;
    this.processFilters();
  }

  // Query database using filter values
  processFilters() {    
    this.queryProcessing = true;  // Initiate start of query processing
    this.pkmnList = [];           // Reset pokemon list when new filters applied

    // TODO -- Make filters object and add team
    this.filterVals.team = this.authService.userSession.team;
    this.supabaseService.getPokemonFromFilters(this.filterVals)
      .subscribe(filteredPkmn => this.setPkmnList(filteredPkmn)
    );
  }

  // Assign pokemonList to database query results
  setPkmnList(pkmn: any) {
    this.pkmnList = pkmn;

    // Check shortList and appropriately set icon for any pkmn within
    this.shortList.forEach((elem:any) => {
      let pmonInShortList:any = (this.pkmnList.find(({name}) => name == elem.name));
      if (pmonInShortList) pmonInShortList.inShortList = true;
    })
    this.queryProcessing = false;
    
    if (this.pkmnList.length === 0) {
      alert("No matching Pokemon were found. Please try again.");
    }
  }
  
  // Add pkmn to shortList and change icon to MINUS
  addToShortlist(pkmn: any) {
    this.shortList.push(pkmn);
    pkmn.inShortList = true;
  }

  // Remove pkmn from shortList and change icon to PLUS
  removeFromShortList(pkmn: any) {
    // Locate pkmn in shortList and remove 
    this.shortList.forEach((elem:any,index:number)=>{
      if (elem.name==pkmn.name) {
        this.shortList.splice(index, 1);
      }
   });
   // Swaps icon back to PLUS
   pkmn.inShortList = false;
  }

  // Toggle view to shortList pkmn
  displayShortList() {
    this.pkmnList = this.shortList;
  }

}
