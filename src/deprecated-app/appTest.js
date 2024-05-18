import { createClient } from '@supabase/supabase-js';

// List of queries, each element is a list of conditions
// Each condition is a 3-tuple for (condition type, field to check, value)
const listOfQueries = [
    [["or", "type1.eq.Normal, type2.eq.Normal"],["eq", "tier", "1"],["eq","available","true"]],              // 0. Test number of Normal type Pokemon (Tier 1)  -------Tests 5-22 Types
    [["or", "type1.eq.Normal, type2.eq.Normal"],["eq", "tier", "2"],["eq","available","true"]],               // 1. Test number of Normal type Pokemon (Tier 2)  
    [["or", "type1.eq.Normal, type2.eq.Normal"],["eq", "tier", "3"],["eq","available","true"]],               // 2. Test number of Normal type Pokemon (Tier 3)  
    [["or", "type1.eq.Normal, type2.eq.Normal"],["eq", "tier", "4"],["eq","available","true"]],               // 3. Test number of Normal type Pokemon (Tier 4)  

    [["or", "type1.eq.Psychic, type2.eq.Psychic"],["eq", "tier", "1"],["eq","available","true"]],             // 4. Test number of Psychic type Pokemon (Tier 1)
    [["or", "type1.eq.Psychic, type2.eq.Psychic"],["eq", "tier", "2"],["eq","available","true"]],             // 5. Test number of Psychic type Pokemon (Tier 2)  
    [["or", "type1.eq.Psychic, type2.eq.Psychic"],["eq", "tier", "3"],["eq","available","true"]],             // 6. Test number of Psychic type Pokemon (Tier 3)  
    [["or", "type1.eq.Psychic, type2.eq.Psychic"],["eq", "tier", "4"],["eq","available","true"]],             // 7. Test number of Psychic type Pokemon (Tier 4)  

    [["or", "type1.eq.Dark, type2.eq.Dark"],["eq", "tier", "1"],["eq","available","true"]],                   // 8. Test number of Dark type Pokemon (Tier 1)
    [["or", "type1.eq.Dark, type2.eq.Dark"],["eq", "tier", "2"],["eq","available","true"]],                   // 9. Test number of Dark type Pokemon (Tier 2)
    [["or", "type1.eq.Dark, type2.eq.Dark"],["eq", "tier", "3"],["eq","available","true"]],                   // 10. Test number of Dark type Pokemon (Tier 3)  
    [["or", "type1.eq.Dark, type2.eq.Dark"],["eq", "tier", "4"],["eq","available","true"]],                   // 11. Test number of Dark type Pokemon (Tier 4)  

    [["or", "type1.eq.Fighting, type2.eq.Fighting"],["eq", "tier", "1"],["eq","available","true"]],           // 12. Test number of Fighting type Pokemon (Tier 1)
    [["or", "type1.eq.Fighting, type2.eq.Fighting"],["eq", "tier", "2"],["eq","available","true"]],           // 13. Test number of Fighting type Pokemon (Tier 2)
    [["or", "type1.eq.Fighting, type2.eq.Fighting"],["eq", "tier", "3"],["eq","available","true"]],           // 14. Test number of Fighting type Pokemon (Tier 3)  
    [["or", "type1.eq.Fighting, type2.eq.Fighting"],["eq", "tier", "4"],["eq","available","true"]],           // 15. Test number of Fighting type Pokemon (Tier 4)  

    [["or", "type1.eq.Ghost, type2.eq.Ghost"],["eq", "tier", "1"],["eq","available","true"]],                 // 16. Test number of Ghost type Pokemon (Tier 1)
    [["or", "type1.eq.Ghost, type2.eq.Ghost"],["eq", "tier", "2"],["eq","available","true"]],                 // 17. Test number of Ghost type Pokemon (Tier 2)
    [["or", "type1.eq.Ghost, type2.eq.Ghost"],["eq", "tier", "3"],["eq","available","true"]],                 // 18. Test number of Ghost type Pokemon (Tier 3)  
    [["or", "type1.eq.Ghost, type2.eq.Ghost"],["eq", "tier", "4"],["eq","available","true"]],                 // 19. Test number of Ghost type Pokemon (Tier 4)  

    [["or", "type1.eq.Poison, type2.eq.Poison"],["eq", "tier", "1"],["eq","available","true"]],               // 20. Test number of Poison type Pokemon (Tier 1)
    [["or", "type1.eq.Poison, type2.eq.Poison"],["eq", "tier", "2"],["eq","available","true"]],               // 21. Test number of Poison type Pokemon (Tier 2)
    [["or", "type1.eq.Poison, type2.eq.Poison"],["eq", "tier", "3"],["eq","available","true"]],               // 22. Test number of Poison type Pokemon (Tier 3)  
    [["or", "type1.eq.Poison, type2.eq.Poison"],["eq", "tier", "4"],["eq","available","true"]],               // 23. Test number of Poison type Pokemon (Tier 4)  

    [["or", "type1.eq.Grass, type2.eq.Grass"],["eq", "tier", "1"],["eq","available","true"]],                 // 24. Test number of Grass type Pokemon (Tier 1)
    [["or", "type1.eq.Grass, type2.eq.Grass"],["eq", "tier", "2"],["eq","available","true"]],                 // 25. Test number of Grass type Pokemon (Tier 2)
    [["or", "type1.eq.Grass, type2.eq.Grass"],["eq", "tier", "3"],["eq","available","true"]],                 // 26. Test number of Grass type Pokemon (Tier 3)  
    [["or", "type1.eq.Grass, type2.eq.Grass"],["eq", "tier", "4"],["eq","available","true"]],                 // 27. Test number of Grass type Pokemon (Tier 4)  

    [["or", "type1.eq.Fire, type2.eq.Fire"],["eq", "tier", "1"],["eq","available","true"]],                   // 28. Test number of Fire type Pokemon (Tier 1)
    [["or", "type1.eq.Fire, type2.eq.Fire"],["eq", "tier", "2"],["eq","available","true"]],                   // 29. Test number of Fire type Pokemon (Tier 2)
    [["or", "type1.eq.Fire, type2.eq.Fire"],["eq", "tier", "3"],["eq","available","true"]],                   // 30. Test number of Fire type Pokemon (Tier 3)  
    [["or", "type1.eq.Fire, type2.eq.Fire"],["eq", "tier", "4"],["eq","available","true"]],                   // 31. Test number of Fire type Pokemon (Tier 4)  

    [["or", "type1.eq.Water, type2.eq.Water"],["eq", "tier", "1"],["eq","available","true"]],                 // 32. Test number of Water type Pokemon (Tier 1)
    [["or", "type1.eq.Water, type2.eq.Water"],["eq", "tier", "2"],["eq","available","true"]],                 // 33. Test number of Water type Pokemon (Tier 2)
    [["or", "type1.eq.Water, type2.eq.Water"],["eq", "tier", "3"],["eq","available","true"]],                 // 34. Test number of Water type Pokemon (Tier 3)  
    [["or", "type1.eq.Water, type2.eq.Water"],["eq", "tier", "4"],["eq","available","true"]],                 // 35. Test number of Water type Pokemon (Tier 4)  

    [["or", "type1.eq.Electric, type2.eq.Electric"],["eq", "tier", "1"],["eq","available","true"]],           // 36. Test number of Electric type Pokemon (Tier 1)
    [["or", "type1.eq.Electric, type2.eq.Electric"],["eq", "tier", "2"],["eq","available","true"]],           // 37. Test number of Electric type Pokemon (Tier 2)
    [["or", "type1.eq.Electric, type2.eq.Electric"],["eq", "tier", "3"],["eq","available","true"]],           // 38. Test number of Electric type Pokemon (Tier 3)  
    [["or", "type1.eq.Electric, type2.eq.Electric"],["eq", "tier", "4"],["eq","available","true"]],           // 39. Test number of Electric type Pokemon (Tier 4)  

    [["or", "type1.eq.Rock, type2.eq.Rock"],["eq", "tier", "1"],["eq","available","true"]],                   // 40. Test number of Rock type Pokemon (Tier 1)
    [["or", "type1.eq.Rock, type2.eq.Rock"],["eq", "tier", "2"],["eq","available","true"]],                   // 41. Test number of Rock type Pokemon (Tier 2)
    [["or", "type1.eq.Rock, type2.eq.Rock"],["eq", "tier", "3"],["eq","available","true"]],                   // 42. Test number of Rock type Pokemon (Tier 3)  
    [["or", "type1.eq.Rock, type2.eq.Rock"],["eq", "tier", "4"],["eq","available","true"]],                   // 43. Test number of Rock type Pokemon (Tier 4)  

    [["or", "type1.eq.Ground, type2.eq.Ground"],["eq", "tier", "1"],["eq","available","true"]],               // 44. Test number of Ground type Pokemon (Tier 1)
    [["or", "type1.eq.Ground, type2.eq.Ground"],["eq", "tier", "2"],["eq","available","true"]],               // 45. Test number of Ground type Pokemon (Tier 2)
    [["or", "type1.eq.Ground, type2.eq.Ground"],["eq", "tier", "3"],["eq","available","true"]],               // 46. Test number of Ground type Pokemon (Tier 3)  
    [["or", "type1.eq.Ground, type2.eq.Ground"],["eq", "tier", "4"],["eq","available","true"]],               // 47. Test number of Ground type Pokemon (Tier 4)  

    [["or", "type1.eq.Steel, type2.eq.Steel"],["eq", "tier", "1"],["eq","available","true"]],                 // 48. Test number of Steel type Pokemon (Tier 1)
    [["or", "type1.eq.Steel, type2.eq.Steel"],["eq", "tier", "2"],["eq","available","true"]],                 // 49. Test number of Steel type Pokemon (Tier 2)
    [["or", "type1.eq.Steel, type2.eq.Steel"],["eq", "tier", "3"],["eq","available","true"]],                 // 50. Test number of Steel type Pokemon (Tier 3)  
    [["or", "type1.eq.Steel, type2.eq.Steel"],["eq", "tier", "4"],["eq","available","true"]],                 // 51. Test number of Steel type Pokemon (Tier 4)  

    [["or", "type1.eq.Fairy, type2.eq.Fairy"],["eq", "tier", "1"],["eq","available","true"]],                 // 52. Test number of Fairy type Pokemon (Tier 1)
    [["or", "type1.eq.Fairy, type2.eq.Fairy"],["eq", "tier", "2"],["eq","available","true"]],                 // 53. Test number of Fairy type Pokemon (Tier 2)
    [["or", "type1.eq.Fairy, type2.eq.Fairy"],["eq", "tier", "3"],["eq","available","true"]],                 // 54. Test number of Fairy type Pokemon (Tier 3)  
    [["or", "type1.eq.Fairy, type2.eq.Fairy"],["eq", "tier", "4"],["eq","available","true"]],                 // 55. Test number of Fairy type Pokemon (Tier 4)  

    [["or", "type1.eq.Dragon, type2.eq.Dragon"],["eq", "tier", "1"],["eq","available","true"]],               // 56. Test number of Dragon type Pokemon (Tier 1)
    [["or", "type1.eq.Dragon, type2.eq.Dragon"],["eq", "tier", "2"],["eq","available","true"]],               // 57. Test number of Dragon type Pokemon (Tier 2)
    [["or", "type1.eq.Dragon, type2.eq.Dragon"],["eq", "tier", "3"],["eq","available","true"]],               // 58. Test number of Dragon type Pokemon (Tier 3)  
    [["or", "type1.eq.Dragon, type2.eq.Dragon"],["eq", "tier", "4"],["eq","available","true"]],               // 59. Test number of Dragon type Pokemon (Tier 4)  

    [["or", "type1.eq.Bug, type2.eq.Bug"],["eq", "tier", "1"],["eq","available","true"]],                     // 60. Test number of Bug type Pokemon (Tier 1)
    [["or", "type1.eq.Bug, type2.eq.Bug"],["eq", "tier", "2"],["eq","available","true"]],                     // 61. Test number of Bug type Pokemon (Tier 2)
    [["or", "type1.eq.Bug, type2.eq.Bug"],["eq", "tier", "3"],["eq","available","true"]],                     // 62. Test number of Bug type Pokemon (Tier 3)  
    [["or", "type1.eq.Bug, type2.eq.Bug"],["eq", "tier", "4"],["eq","available","true"]],                     // 63. Test number of Bug type Pokemon (Tier 4)  

    [["or", "type1.eq.Flying, type2.eq.Flying"],["eq", "tier", "1"],["eq","available","true"]],               // 64. Test number of Flying type Pokemon (Tier 1)
    [["or", "type1.eq.Flying, type2.eq.Flying"],["eq", "tier", "2"],["eq","available","true"]],               // 65. Test number of Flying type Pokemon (Tier 2)
    [["or", "type1.eq.Flying, type2.eq.Flying"],["eq", "tier", "3"],["eq","available","true"]],               // 66. Test number of Flying type Pokemon (Tier 3)  
    [["or", "type1.eq.Flying, type2.eq.Flying"],["eq", "tier", "4"],["eq","available","true"]],               // 67. Test number of Flying type Pokemon (Tier 4)  

    [["or", "type1.eq.Ice, type2.eq.Ice"],["eq", "tier", "1"],["eq","available","true"]],                     // 68. Test number of Ice type Pokemon (Tier 1)
    [["or", "type1.eq.Ice, type2.eq.Ice"],["eq", "tier", "2"],["eq","available","true"]],                     // 69. Test number of Ice type Pokemon (Tier 2)
    [["or", "type1.eq.Ice, type2.eq.Ice"],["eq", "tier", "3"],["eq","available","true"]],                     // 70. Test number of Ice type Pokemon (Tier 3)  
    [["or", "type1.eq.Ice, type2.eq.Ice"],["eq", "tier", "4"],["eq","available","true"]],                     // 71. Test number of Ice type Pokemon (Tier 4)  
];

// Deprecated tests
/*
    [["eq", "tier", "1"]],                                  // 0. Test number of Tier 1 Pokemon
    [["eq", "tier", "2"]],                                  // 1. Test number of Tier 2 Pokemon
    [["eq", "tier", "3"]],                                  // 2. Test number of Tier 3 Pokemon
    [["eq", "tier", "Legend"]],                             // 3. Test number of Legend Tier Pokemon
    [["eq", "tier", "Restricted"]],                         // 4. Test number of Restricted Tier Pokemon
    [["or", "type1.eq.Normal, type2.eq.Normal"]],           // 5. Test number of Normal type Pokemon  -------Tests 5-22 Types
    [["or", "type1.eq.Psychic, type2.eq.Psychic"]],         // 6. Test number of Psychic type Pokemon
    [["or", "type1.eq.Dark, type2.eq.Dark"]],               // 7. Test number of Dark type Pokemon
    [["or", "type1.eq.Fighting, type2.eq.Fighting"]],       // 8. Test number of Fighting type Pokemon
    [["or", "type1.eq.Ghost, type2.eq.Ghost"]],             // 9. Test number of Ghost type Pokemon
    [["or", "type1.eq.Poison, type2.eq.Poison"]],           // 10. Test number of Poison type Pokemon
    [["or", "type1.eq.Grass, type2.eq.Grass"]],             // 11. Test number of Grass type Pokemon
    [["or", "type1.eq.Fire, type2.eq.Fire"]],               // 12. Test number of Fire type Pokemon
    [["or", "type1.eq.Water, type2.eq.Water"]],             // 13. Test number of Water type Pokemon
    [["or", "type1.eq.Electric, type2.eq.Electric"]],       // 14. Test number of Electric type Pokemon
    [["or", "type1.eq.Rock, type2.eq.Rock"]],               // 15. Test number of Rock type Pokemon
    [["or", "type1.eq.Ground, type2.eq.Ground"]],           // 16. Test number of Ground type Pokemon
    [["or", "type1.eq.Steel, type2.eq.Steel"]],             // 17. Test number of Steel type Pokemon
    [["or", "type1.eq.Fairy, type2.eq.Fairy"]],             // 18. Test number of Fairy type Pokemon
    [["or", "type1.eq.Dragon, type2.eq.Dragon"]],           // 19. Test number of Dragon type Pokemon
    [["or", "type1.eq.Bug, type2.eq.Bug"]],                 // 20. Test number of Bug type Pokemon
    [["or", "type1.eq.Flying, type2.eq.Flying"]],           // 21. Test number of Flying type Pokemon
    [["or", "type1.eq.Ice, type2.eq.Ice"]],                 // 22. Test number of Ice type Pokemon
    [["eq", "form", "Alolan"]],                             // 23. Test number of Alolan Form Pokemon  -------Tests 23-26 Forms
    [["eq", "form", "Galarian"]],                           // 24. Test number of Galarian Form Pokemon
    [["eq", "form", "Therian"]],                            // 25. Test number of Therian Form Pokemon
    [["eq", "form", "Incarnate"]],                          // 26. Test number of Incarnate Form Pokemon
    [["eq", "gmax", true]],                                 // 27. Test Number of Gigantamax Pokemon    -------Test 27 Gmax
    [["eq", "bst", 600]],                                   // 28. Test Number of Base Stat 600 pokemon -------Test 28-34 Stats
    [["eq", "hp", 60]],                                     // 29. Test Number of Hp Stat 60 pokemon
    [["eq", "attack", 65]],                                 // 30. Test Number of Atk Stat 65 pokemon
    [["eq", "defense", 50]],                                // 31. Test Number of Def Stat 50 pokemon
    [["eq", "spAttack", 40]],                               // 32. Test Number of SpAtk Stat 40 Pokemon
    [["eq", "spDefense", 50]],                              // 33. Test Number of SpDef Stat 50 pokemon
    [["eq", "speed", 50]],                                  // 34. Test Number of Speed Stat 50 pokemon
*/

const listOfAnswers = [ 
    6,                       // 0.  Test number of Available Normal type Pokemon (Tier 1)  -------Tests 5-22 Available Types
    8,                       // 1.  Test number of Available Normal type Pokemon (Tier 2)
    11,                      // 2.  Test number of Available Normal type Pokemon (Tier 3)
    35,                      // 3.  Test number of Available Normal type Pokemon (Tier 4)

    7,                       // 4.  Test number of Available Psychic type Pokemon (Tier 1)
    13,                      // 5.  Test number of Available Psychic type Pokemon (Tier 2)
    7,                       // 6.  Test number of Available Psychic type Pokemon (Tier 3)
    18,                      // 7.  Test number of Available Psychic type Pokemon (Tier 4)

    12,                      // 8.  Test number of Available Dark type Pokemon (Tier 1)
    10,                      // 9.  Test number of Available Dark type Pokemon (Tier 2)
    10,                      // 10. Test number of Available Dark type Pokemon (Tier 3)
    20,                      // 11. Test number of Available Dark type Pokemon (Tier 4)

    8,                       // 12. Test number of Available Fighting type Pokemon (Tier 1)
    14,                      // 13. Test number of Available Fighting type Pokemon (Tier 2)
    13,                      // 14. Test number of Available Fighting type Pokemon (Tier 3)
    12,                      // 15. Test number of Available Fighting type Pokemon (Tier 4)

    8,                       // 16. Test number of Available Ghost type Pokemon (Tier 1)
    10,                      // 17. Test number of Available Ghost type Pokemon (Tier 2)
    8,                       // 18. Test number of Available Ghost type Pokemon (Tier 3)
    18,                      // 19. Test number of Available Ghost type Pokemon (Tier 4)

    5,                       // 20. Test number of Available Poison type Pokemon (Tier 1)
    9,                       // 21. Test number of Available Poison type Pokemon (Tier 2)
    8,                       // 22. Test number of Available Poison type Pokemon (Tier 3)
    28,                      // 23. Test number of Available Poison type Pokemon (Tier 4)

    7,                       // 24. Test number of Available Grass type Pokemon (Tier 1)
    6,                       // 25. Test number of Available Grass type Pokemon (Tier 2)
    19,                      // 26. Test number of Available Grass type Pokemon (Tier 3)
    33,                      // 27. Test number of Available Grass type Pokemon (Tier 4)

    10,                      // 28. Test number of Available Fire type Pokemon (Tier 1)
    12,                      // 29. Test number of Available Fire type Pokemon (Tier 2)
    5,                       // 30. Test number of Available Fire type Pokemon (Tier 3)
    23,                      // 31. Test number of Available Fire type Pokemon (Tier 4)

    8,                       // 32. Test number of Available Water type Pokemon (Tier 1)
    13,                      // 33. Test number of Available Water type Pokemon (Tier 2)
    13,                      // 34. Test number of Available Water type Pokemon (Tier 3)
    36,                      // 35. Test number of Available Water type Pokemon (Tier 4)

    9,                       // 36. Test number of Available Electric type Pokemon (Tier 1)
    5,                       // 37. Test number of Available Electric type Pokemon (Tier 2)
    12,                      // 38. Test number of Available Electric type Pokemon (Tier 3)
    21,                      // 39. Test number of Available Electric type Pokemon (Tier 4)

    4,                       // 40. Test number of Available Rock type Pokemon (Tier 1)
    3,                       // 41. Test number of Available Rock type Pokemon (Tier 2)
    8,                       // 42. Test number of Available Rock type Pokemon (Tier 3)
    15,                      // 43. Test number of Available Rock type Pokemon (Tier 4)

    10,                      // 44. Test number of Available Ground type Pokemon (Tier 1)
    6,                       // 45. Test number of Available Ground type Pokemon (Tier 2)
    9,                       // 46. Test number of Available Ground type Pokemon (Tier 3)
    19,                      // 47. Test number of Available Ground type Pokemon (Tier 4)

    6,                       // 48. Test number of Available Steel type Pokemon (Tier 1)
    8,                       // 49. Test number of Available Steel type Pokemon (Tier 2)
    6,                       // 50. Test number of Available Steel type Pokemon (Tier 3)
    11,                      // 51. Test number of Available Steel type Pokemon (Tier 4)

    11,                      // 52. Test number of Available Fairy type Pokemon (Tier 1)
    5,                       // 53. Test number of Available Fairy type Pokemon (Tier 2)
    5,                       // 54. Test number of Available Fairy type Pokemon (Tier 3)
    12,                      // 55. Test number of Available Fairy type Pokemon (Tier 4)

    8,                       // 56. Test number of Available Dragon type Pokemon (Tier 1)
    7,                       // 57. Test number of Available Dragon type Pokemon (Tier 2)
    3,                       // 58. Test number of Available Dragon type Pokemon (Tier 3)
    14,                      // 59. Test number of Available Dragon type Pokemon (Tier 4)

    1,                       // 60. Test number of Available Bug type Pokemon (Tier 1)
    3,                       // 61. Test number of Available Bug type Pokemon (Tier 2)
    6,                       // 62. Test number of Available Bug type Pokemon (Tier 3)
    23,                      // 63. Test number of Available Bug type Pokemon (Tier 4)

    15,                      // 64. Test number of Available Flying type Pokemon (Tier 1)
    11,                      // 65. Test number of Available Flying type Pokemon (Tier 2)
    10,                      // 66. Test number of Available Flying type Pokemon (Tier 3)
    33,                      // 67. Test number of Available Flying type Pokemon (Tier 4)

    4,                      // 68. Test number of Available Ice type Pokemon
    4,                      // 69. Test number of Available Ice type Pokemon (Tier 2)
    7,                      // 70. Test number of Available Ice type Pokemon (Tier 3)
    18,                      // 71. Test number of Available Ice type Pokemon (Tier 4)
];

// Deprecated test answers
/*
    138,                    // 0. Test number of Tier 1 Pokemon  -----Tests 0-4 Tiers
    148,                    // 1. Test number of Tier 2 Pokemon
    158,                    // 2. Test number of Tier 3 Pokemon
    384,                    // 3. Test number of Legend Tier Pokemon
    49,                     // 4. Test number of Restricted Tier Pokemon
    63,                     // 5. Test number of Available Normal type Pokemon  -------Tests 5-22 Available Types
    44,                     // 6. Test number of Available Psychic type Pokemon
    53,                     // 7. Test number of Available Dark type Pokemon
    47,                     // 8. Test number of Available Fighting type Pokemon
    43,                     // 9. Test number of Available Ghost type Pokemon
    50,                     // 10. Test number of Available Poison type Pokemon
    66,                    // 11. Test number of Available Grass type Pokemon
    50,                     // 12. Test number of Available Fire type Pokemon
    71,                    // 13. Test number of Available Water type Pokemon
    46,                     // 14. Test number of Available Electric type Pokemon
    30,                     // 15. Test number of Available Rock type Pokemon
    43,                     // 16. Test number of Available Ground type Pokemon
    30,                     // 17. Test number of Available Steel type Pokemon
    33,                     // 18. Test number of Available Fairy type Pokemon
    31,                     // 19. Test number of Available Dragon type Pokemon
    33,                     // 20. Test number of Available Bug type Pokemon
    65,                    // 21. Test number of Available Flying type Pokemon
    33,                     // 22. Test number of Available Ice type Pokemon
    18,                     // 23. Test number of Alolan Form Pokemon  -------Tests 23-26 Forms
    19,                     // 24. Test number of Galarian Form Pokemon
    3,                      // 25. Test number of Therian Form Pokemon
    3,                      // 26. Test number of Incarnate Form Pokemon
    34,                     // 27. Test Number of Gigantamax Pokemon    -------Test 27 Gmax
    39,                     // 28. Test Number of Base Stat 600 pokemon -------Test 28-34 Stats
    78,                     // 29. Test Number of Hp Stat 60 pokemon
    50,                     // 30. Test Number of Atk Stat 65 pokemon
    63,                     // 31. Test Number of Def Stat 50 pokemon
    67,                     // 32. Test Number of SpAtk Stat 40 Pokemon
    65,                     // 33. Test Number of SpDef Stat 50 pokemon
    54,                     // 34. Test Number of Speed Stat 50 pokemon
*/


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
            if (response.body.length != listOfAnswers[index]) {
                console.log(`Non-matching answers at index ${index}, \t Expecting: ${listOfAnswers[index]} | Recieved: ${response.body.length}`);
            }
        });
    });
}

initTests();