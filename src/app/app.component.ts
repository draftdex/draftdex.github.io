import { Component } from '@angular/core';

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
  pkmnList = [];
  queryProcessing = false;
  filterVals:any = {};

  // Query database using filter values
  getPokemon() {
    this.queryProcessing = true;  // Initiate start of query processing
    this.pkmnList = [];           // Reset pokemon list when new filters applied

    //filterVals[ability, available, dualTypeExclusive, tier, type1, type2]
    var sendArg = 'SELECT * FROM pokemonInfo WHERE ';
    if (this.filterVals.ability)
      sendArg += `(ability1 = '${this.filterVals.ability}' OR ability2 = '${this.filterVals.ability}' OR hiddenAbility = '${this.filterVals.ability}') AND ` ;
    
    if (this.filterVals.available)
      sendArg += `available = '${this.filterVals.available}' AND `;

    if (this.filterVals.tier)
      sendArg += `tier = '${this.filterVals.tier}' AND `;

    if (this.filterVals.type1 || this.filterVals.type2) {
      if(this.filterVals.dualTypeExclusive){
        sendArg += `((type1 = '${this.filterVals.type1}' AND type2 = '${this.filterVals.type2}') OR (type2 = '${this.filterVals.type1}' AND type1 = '${this.filterVals.type2}'))`;
      }
      else{
        sendArg += `((type1 = '${this.filterVals.type1}' OR type2 = '${this.filterVals.type1}') OR (type1 = '${this.filterVals.type2}' OR type2 = '${this.filterVals.type2}'))`;
      }
    }
    

    // Fix end of query if no filters are selected or query ends with 'AND'
    if (sendArg.substring(sendArg.length - 6) === "WHERE ") {
      sendArg = sendArg.slice(0, sendArg.length - 7);    // Remove leading and trailing spaces
    } else if (sendArg.substring(sendArg.length - 4) === "AND ") {
      sendArg = sendArg.slice(0, sendArg.length - 5);    // Remove leading and trailing spaces
    }
    console.log(sendArg);

    const getFltrdRequest = new XMLHttpRequest();
    getFltrdRequest.open("GET", "http://localhost:7982/app/fltrd/" + sendArg);
    getFltrdRequest.send();

    // Process response from request
    getFltrdRequest.addEventListener("load", (event) => {
      this.queryProcessing = false;

      // Handle non-200 response codes
      if (getFltrdRequest.status !== 200) {
        console.log(getFltrdRequest.response);
        alert(`An error has occurred. Please try again or contact the dev team with the following information: \n${getFltrdRequest.response}`);
      } else {  // Process successful response
        var pkmn = JSON.parse(getFltrdRequest.response);
        this.setPkmnList(pkmn);
      }
    });

    // Handle request error
    getFltrdRequest.addEventListener("error", (event) => {
      this.queryProcessing = false;
      console.log(event)
      alert(`An error has occurred. Please try again or contact the dev team with the following information: \n${event}`);
    })
  }

  // Assign pokemonList to database query results
  setPkmnList(pkmn: any) {
    this.pkmnList = pkmn;
    
    if (this.pkmnList.length === 0) {
      alert("No matching Pokemon were found. Please try again.");
    }
  }

  // Listens for filterUpdate event fired from filter-menu component
  // Sets filterVals to filter selections and calls getPokemon() to query database
  getFilterUpdate(filter_vals: any):void {
    this.filterVals = filter_vals;
    console.log(this.filterVals);
    this.getPokemon();
  }
}
