import { Component } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  /* 
    Firebase Config
  */
  firebaseConfig = {
    apiKey: "AIzaSyAE-POqe7JhHNEXXBLcLO1i-lKiiBKZAr4",
    authDomain: "draftdex-39a23.firebaseapp.com",
    projectId: "draftdex-39a23",
    storageBucket: "draftdex-39a23.appspot.com",
    messagingSenderId: "961962497554",
    appId: "1:961962497554:web:4f87742983885e2f71aacb",
    measurementId: "G-J12SJ7VWP4"
  };

  // Initialize Firebase
  app = initializeApp(this.firebaseConfig);
  db = getFirestore(this.app);
  async getPokemonTest() {
    const pokemonCol = collection(this.db, 'pokemonInfo');
    const pokemonSnapshot = await getDocs(pokemonCol);
    const pokemonList = pokemonSnapshot.docs.map(doc => doc.data());
    console.log(pokemonList);
  }

  /*
    Define component properties
  */
  title = 'DraftDex';
  pkmnList = [];
  queryProcessing = false;
  filterVals:any = {};

  // Query database using filter values
  getPokemon() {
    this.getPokemonTest();
    /*
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
    })*/
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
