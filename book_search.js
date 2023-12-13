/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 
 function findSearchTermInBooks(searchTerm, scannedTextObj) {
    //the actual return object
    var matches = {
        "SearchTerm": searchTerm,
        "Results": []
    };
    //
    var matchedTexts = [];
    //for every book, iterate through all of the lines in its content 
    //checking for exact matches(takes care of capitalization, hyphenation, substring matches)
    scannedTextObj.forEach(book => {
        book.Content.forEach(content => {
            const words = content.Text.split(/\s+/);
            for (let word of words) {
                if (word === searchTerm) {
                    matchedTexts.push({
                        ISBN: book.ISBN,
                        Page: content.Page,
                        Line: content.Line
                    });
                    break; // no need to continue looking if we've already found a match
                }
            }
        });
    });

    matches["Results"] = matchedTexts

    
    
    return matches; 
}

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]

const multiBookTesting = [
    {
        "Title": "Gardening in the Tropics",
        "ISBN": "9781000000000",
        "Content": [
            {
                "Page": 22,
                "Line": 7,
                "Text": "Tropical plants often require abundant sunlight."
            },
            {
                "Page": 22,
                "Line": 8,
                "Text": "The key to a lush garden is understanding the climate."
            }
        ]
    },
    {
        "Title": "Mastering Chess Strategies",
        "ISBN": "9782000000000",
        "Content": [
            {
                "Page": 15,
                "Line": 3,
                "Text": "Chess is not just about tactics, but also patience."
            },
            {
                "Page": 15,
                "Line": 4,
                "Text": "Understanding the opponent's strategy is crucial."
            }
        ]
    },
    {
        "Title": "Secrets of Amateur Astronomy",
        "ISBN": "9783000000000",
        "Content": [
            {
                "Page": 40,
                "Line": 1,
                "Text": "Stargazing requires clear skies and a keen eye."
            },
            {
                "Page": 40,
                "Line": 2,
                "Text": "The beauty of astronomy is in its endless discovery."
            }
        ]
    }
];
    
/** Example output object */
const twentyLeaguesOut_the = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

const twentyLeaguesOut_dark = {
    "SearchTerm": "dark",
    "Results": [
   
    ]
}

const twentyLeaguesOut_water = {
    "SearchTerm": "water",
    "Results": [
   
    ]
}

const twentyLeaguesOut_The = {
    "SearchTerm": "The",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 8
        }
    ]
}

const multiBookOut_the = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9781000000000",
            "Page": 22,
            "Line": 8
        },
        {
            "ISBN": "9782000000000",
            "Page": 15,
            "Line": 4
        }
    ]
};


/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut_the) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut_the);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut_the.Results.length);
    console.log("Received:", test2result.Results.length);
}

//check to make sure hyphenated words don't get found
const test3result = findSearchTermInBooks("dark", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut_dark) === JSON.stringify(test3result)) {
    console.log("PASS: Test 3");
} else {
    console.log("FAIL: Test 3");
    console.log("Expected:", JSON.stringify(twentyLeaguesOut_dark));
    console.log("Received:", test3result);
}

//should return nothing
const test4result = findSearchTermInBooks("water", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut_water) === JSON.stringify(test4result)) {
    console.log("PASS: Test 4");
} else {
    console.log("FAIL: Test 4");
    console.log("Expected:", JSON.stringify(twentyLeaguesOut_water));
    console.log("Received:", test4result);
}

//test case-sensitivity
const test5result = findSearchTermInBooks("The", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut_The) === JSON.stringify(test5result)) {
    console.log("PASS: Test 5");
} else {
    console.log("FAIL: Test 5");
    console.log("Expected:", twentyLeaguesOut_The);
    console.log("Received:", test5result);
}

//testing with multiple books
const test6result = findSearchTermInBooks("the", multiBookTesting);
if (JSON.stringify(multiBookOut_the) === JSON.stringify(test6result)) {
    console.log("PASS: Test 6");
} else {
    console.log("FAIL: Test 6");
    console.log("Expected:", multiBookOut_the);
    console.log("Received:", test6result);
}
