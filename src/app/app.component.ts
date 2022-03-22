import { Component } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { GlobalConstants } from './global/global-constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // Create supabase.io database client
  dbClient = createClient('https://kqyshvlibkoatazqavuc.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0Mzc0MTI3MSwiZXhwIjoxOTU5MzE3MjcxfQ.hMsQnDsKARs4OyTsIpUR2nPR86TQxbvn3hOoyuGEnA8');

  async getPokemon(query:any) {
    let { data, error } = await query;
    return data;
  }

  /*
    Define component properties
  */
  title = 'DraftDex';
  pkmnList = [];
  shortList:any = [];
  queryProcessing = false;
  filterVals:any = {};
  MasterSheet = GlobalConstants.MasterSheet;
  Help = GlobalConstants.Help;
  Ruleset = GlobalConstants.Ruleset;
  Showdown = GlobalConstants.Showdown;
  addEditEnabled = false;                     // Boolean to control add/edit overlay

  // Query database using filter values
  processFilters() {    
    this.queryProcessing = true;  // Initiate start of query processing
    this.pkmnList = [];           // Reset pokemon list when new filters applied

    let query = this.dbClient.from('pokemonInfo').select();

    // Ability filters
    if (this.filterVals.ability) 
      query.or(`ability1.ilike.${this.filterVals.ability},ability2.ilike.${this.filterVals.ability},hiddenAbility.ilike.${this.filterVals.ability}`);
    
    // Available filter
    if (this.filterVals.available) 
      query.eq('available', this.filterVals.available);

    // Tier filter
    if (this.filterVals.tier)
      query.ilike('tier', this.filterVals.tier);  // ilike case insensitive match

    // Type filters
    if (this.filterVals.type1 || this.filterVals.type2) {
      if (this.filterVals.dualTypeExclusive) {
        // Dual-typing required
        query.or(`and(type1.eq.${this.filterVals.type1},type2.eq.${this.filterVals.type2}),and(type1.eq.${this.filterVals.type2},type2.eq.${this.filterVals.type1})`);
      } else {
        // Dual-typing optional
        query.or(`type1.eq.${this.filterVals.type1},type1.eq.${this.filterVals.type2},type2.eq.${this.filterVals.type1},type2.eq.${this.filterVals.type2}`);
      }
    }

    this.getPokemon(query).then((data) => {
      this.setPkmnList(data);
    });
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

  // Listens for filterUpdate event fired from filter-menu component
  // Sets filterVals to filter selections and calls getPokemon() to query database
  getFilterUpdate(filter_vals: any):void {
    this.filterVals = filter_vals;
    console.log(this.filterVals);
    this.processFilters();
  }

  // Toggle view to shortList pkmn
  displayShortList() {
    this.pkmnList = this.shortList;
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

  // Disable Add/Edit Overlay
  disableAddEdit() {
    this.addEditEnabled = false;
  }
}
