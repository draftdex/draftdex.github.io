import { createClient } from '@supabase/supabase-js';

// List of queries, each element is a list of conditions
// Each condition is a 3-tuple for (condition type, field to check, value)
const listOfQueries = [
    [["eq", "tier", "1"]],              // 0. Test number of Tier 1 Pokemon
    [["eq", "tier", "2"]],              // 1. Test number of Tier 2 Pokemon
    [["eq", "tier", "3"]],              // 2. Test number of Tier 3 Pokemon
    [["eq", "tier", "Legend"]],         // 3. Test number of Legend Tier Pokemon
    [["eq", "tier", "Restricted"]],     // 4. Test number of Restricted Tier Pokemon
    [["or", "type1.eq.Normal, type2.eq.Normal"]],        // 5. Test number of Normal type Pokemon  -------Tests 5-22 Types
    [["or", "type1.eq.Psychic, type2.eq.Psychic"]],       // 6. Test number of Psychic type Pokemon
    [["or", "type1.eq.Dark, type2.eq.Dark"]],          // 7. Test number of Dark type Pokemon
    [["or", "type1.eq.Fighting, type2.eq.Fighting"]],      // 8. Test number of Fighting type Pokemon
    [["or", "type1.eq.Ghost, type2.eq.Ghost"]],         // 9. Test number of Ghost type Pokemon
    [["or", "type1.eq.Poison, type2.eq.Poison"]],        // 10. Test number of Poison type Pokemon
    [["or", "type1.eq.Grass, type2.eq.Grass"]],         // 11. Test number of Grass type Pokemon
    [["or", "type1.eq.Fire, type2.eq.Fire"]],          // 12. Test number of Fire type Pokemon
    [["or", "type1.eq.Water, type2.eq.Water"]],         // 13. Test number of Water type Pokemon
    [["or", "type1.eq.Electric, type2.eq.Electric"]],      // 14. Test number of Electric type Pokemon
    [["or", "type1.eq.Rock, type2.eq.Rock"]],          // 15. Test number of Rock type Pokemon
    [["or", "type1.eq.Ground, type2.eq.Ground"]],        // 16. Test number of Ground type Pokemon
    [["or", "type1.eq.Steel, type2.eq.Steel"]],         // 17. Test number of Steel type Pokemon
    [["or", "type1.eq.Fairy, type2.eq.Fairy"]],         // 18. Test number of Fairy type Pokemon
    [["or", "type1.eq.Dragon, type2.eq.Dragon"]],        // 19. Test number of Dragon type Pokemon
    [["or", "type1.eq.Bug, type2.eq.Bug"]],           // 20. Test number of Bug type Pokemon
    [["or", "type1.eq.Flying, type2.eq.Flying"]],        // 21. Test number of Flying type Pokemon
    [["or", "type1.eq.Ice, type2.eq.Ice"]],           // 22. Test number of Ice type Pokemon
    [["eq", "form", "Alolan"]],         // 23. Test number of Alolan Form Pokemon  -------Tests 23-26 Forms
    [["eq", "form", "Galarian"]],       // 24. Test number of Galarian Form Pokemon
    [["eq", "form", "Therian"]],        // 25. Test number of Therian Form Pokemon
    [["eq", "form", "Incarnate"]],      // 26. Test number of Incarnate Form Pokemon
    [["eq", "gmax", true]],             // 27. Test Number of Gigantamax Pokemon    -------Test 27 Gmax
    [["eq", "bst", 600]],               // 28. Test Number of Base Stat 600 pokemon -------Test 28-34 Stats
    [["eq", "hp", 60]],                 // 29. Test Number of Hp Stat 60 pokemon
    [["eq", "attack", 65]],                // 30. Test Number of Atk Stat 65 pokemon
    [["eq", "defense", 50]],                // 31. Test Number of Def Stat 50 pokemon
    [["eq", "spAttack", 40]],              // 32. Test Number of SpAtk Stat 40 Pokemon
    [["eq", "spDefense", 50]],              // 33. Test Number of SpDef Stat 50 pokemon
    [["eq", "speed", 50]],              // 34. Test Number of Speed Stat 50 pokemon
];

const listOfAnswers = [ 
    81,                     // 0. Test number of Tier 1 Pokemon  -----Tests 0-4 Tiers
    96,                     // 1. Test number of Tier 2 Pokemon
    109,                    // 2. Test number of Tier 3 Pokemon
    39,                     // 3. Test number of Legend Tier Pokemon
    28,                     // 4. Test number of Restricted Tier Pokemon
    121,                    // 5. Test number of Normal type Pokemon  -------Tests 5-22 Types
    109,                    // 6. Test number of Psychic type Pokemon
    65,                     // 7. Test number of Dark type Pokemon
    65,                     // 8. Test number of Fighting type Pokemon
    56,                     // 9. Test number of Ghost type Pokemon
    75,                     // 10. Test number of Poison type Pokemon
    109,                    // 11. Test number of Grass type Pokemon
    75,                     // 12. Test number of Fire type Pokemon
    146,                    // 13. Test number of Water type Pokemon
    69,                     // 14. Test number of Electric type Pokemon
    70,                     // 15. Test number of Rock type Pokemon
    73,                     // 16. Test number of Ground type Pokemon
    64,                     // 17. Test number of Steel type Pokemon
    59,                     // 18. Test number of Fairy type Pokemon
    60,                     // 19. Test number of Dragon type Pokemon
    86,                     // 20. Test number of Bug type Pokemon
    113,                    // 21. Test number of Flying type Pokemon
    53,                     // 22. Test number of Ice type Pokemon
    18,                     // 23. Test number of Alolan Form Pokemon  -------Tests 23-26 Forms
    19,                     // 24. Test number of Galarian Form Pokemon
    3,                      // 25. Test number of Therian Form Pokemon
    3,                      // 26. Test number of Incarnate Form Pokemon
    33,                     // 27. Test Number of Gigantamax Pokemon    -------Test 27 Gmax
    39,                     // 28. Test Number of Base Stat 600 pokemon -------Test 28-34 Stats
    79,                     // 29. Test Number of Hp Stat 60 pokemon
    52,                     // 30. Test Number of Atk Stat 65 pokemon
    68,                     // 31. Test Number of Def Stat 50 pokemon
    67,                     // 32. Test Number of SpAtk Stat 40 Pokemon
    70,                     // 33. Test Number of SpDef Stat 50 pokemon
    58,                     // 34. Test Number of Speed Stat 50 pokemon
];

const sampleQuery = "";
const sampleAnswer = "";

//// Run the query check against answers
function initTests() {
    const dbClient = createClient('https://kqyshvlibkoatazqavuc.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0Mzc0MTI3MSwiZXhwIjoxOTU5MzE3MjcxfQ.hMsQnDsKARs4OyTsIpUR2nPR86TQxbvn3hOoyuGEnA8');
    let query = dbClient.from('pokemonInfo').select();
    executeTests(dbClient);
}

/*
    Execute tests
*/
function executeTests(dbClient) {
    // Iterate over queries
    listOfQueries.forEach((query, index) => {
        let queryBuilder = dbClient.from('pokemonInfo').select();
        // Iterate over conditions for current query
        query.forEach(condition => {
            switch (condition[0]) {
                case "eq":
                    queryBuilder.eq(condition[1], condition[2]);
                    break;
                
                case "or":
                    queryBuilder.or(condition[1]);
                    break;
                
                default:
                    console.log("Unknown function");

                
            }
        });

        // Gather response from query, compare to answer
        let res = queryBuilder.then(response => {
            //console.log(`Index: ${index}`);
            if (response.body.length != listOfAnswers[index]) {
                console.log(`Non-matching answers at index ${index}, \t Expecting: ${listOfAnswers[index]} | Recieved: ${response.body.length}`);
            }
        });
    });
}

initTests();