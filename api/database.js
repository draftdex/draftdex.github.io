// This ensures that things do not fail silently but will throw errors instead.
"use strict";
// Require better-sqlite.
const Database = require('better-sqlite3');

// Connect to a database or create one if it doesn't exist yet.
const db = new Database('DexDB.db');

// Is the database initialized or do we need to initialize it?
const stmt = db.prepare(`SELECT name FROM sqlite_master WHERE type='table' and name='pokemonInfo';`);
let row = stmt.get();

if (row === undefined) {
    console.log('The DraftDex is currently empty. Initializing now.');
    // Set a const that will contain SQL commands to initialize the database.
    const sqlInit = `
        CREATE TABLE pokemonInfo (id TEXT PRIMARY KEY, name TEXT, type1 TEXT, type2 TEXT, sprite TEXT, form TEXT, gmax BINARY, ability1 TEXT, ability2 TEXT, hiddenAbility TEXT, hp INTEGER, attack INTEGER, defense INTEGER, spAttack INTEGER, spDefense INTEGER, speed INTEGER, bst INTEGER, tier TEXT, available BINARY, team TEXT);
		INSERT INTO pokemonInfo (id, name, type1, type2, sprite, form, gmax, ability1, ability2, hiddenAbility, hp, attack, defense, spAttack, spDefense, speed, bst, tier, available, team) VALUES 
        ('VENUSAUR', 'Venusaur', 'Grass', 'Poison', 'Venusaur.png', '-', 1, 'Overgrow', '-', 'Chlorophyll', 80, 82, 83, 100, 100, 80, 525, '1', 1, '-'),
        ('DUGTRIOALOLAN', 'Dugtrio', 'Ground', 'Steel', 'DugtrioAlolan.png', 'Alolan', 0, 'Sand Veil', 'Tangling Hair', 'Sand Force', 35, 100, 60, 50, 70, 110, 425, '3', 0, 'TTR.png'),
        ('MEOWSTICMALE', 'Meowstic', 'Psychic', '-', 'MaleMeowstic.png', 'Male', 0, 'Keen Eye', 'Infiltrator', 'Prankster', 74, 48, 76, 83, 81, 104, 466, '1', 0, 'NN.png'),
        ('BRAVIARY', 'Braviary', 'Normal', 'Flying', 'Braviary.png', '-', 0, 'Keen Eye', 'Sheer Force', 'Defiant', 100, 123, 75, 57, 75, 80, 510, '2', 0, '-'),
        ('WIMPOD', 'Wimpod', 'Bug', 'Water', 'Wimpod.png', '-', 0, 'Wimp Out', '-', '-', 25, 35, 40, 20, 30, 80, 230, 'Unlisted', 1, '-'),
        ('MEW', 'Mew', 'Psychic', '-', 'Mew.png', '-', 0, 'Synchronize', '-', '-', 100, 100, 100, 100, 100, 100, 600, 'Banned', 0, '-'),
        ('MOLTRESGALARIAN', 'Moltres', 'Dark', 'Flying', 'MoltresGalarian.png', 'Galarian', 0, 'Berserk', '-', '-', 90, 85, 90, 100, 125, 90, 580, 'Legend', 0, 'TTR.png')
    `;
    // Execute SQL commands to initialize database
    db.exec(sqlInit);
    console.log('The DraftDex has been initialized.');
}

// Export all of the above as a module (db) so that we can use it elsewhere.
module.exports = db