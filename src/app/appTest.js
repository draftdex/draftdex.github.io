import { createClient } from '@supabase/supabase-js';

// List of queries, each element is a list of conditions
// Each condition is a 3-tuple for (condition type, field to check, value)
const listOfQueries = [
    [["eq", "tier", "1"]],  // 0. Test number of tier 1 Pokemon
];

const listOfAnswers = [ 
    81,                     // 0. Test number of tier 1 Pokemon
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
                default:
                    console.log("Unknown function");
            }
        });

        // Gather response from query, compare to answer
        let res = queryBuilder.then(response => {
            if (response.body.length != listOfAnswers[index]) {
                console.log(`Non-matching answers at index ${index}`);
            }
        });
    });
}

initTests();