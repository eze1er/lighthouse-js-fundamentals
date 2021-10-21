const chooseRecipe = function(bakeryA, bakeryB, recipes) {
    // Code here!
    
    var findA = 0;
    var findB = 0; // is a switch recipes match with bakeray
    var i = 0; // index for recipes elements inside object
    // recipes length. for know it is only 3.
    let keys = Object.keys(recipes);
    var num = keys;
    var valueNameA = [];
    var valueNameB = [];

    let values = Object.values(recipes[i]);  

    for (let i = 0; i < num.length; i++) {
            if (valueNameA !== valueNameB) {
                findA = 0;
                findB = 0;
                valueNameA = [];
                valueNameB = [];
            }
        values = Object.values(recipes[i]); 

        for (let a = 0; a < bakeryB.length; a++) {
            if ((bakeryB[a] === values[1][0]) || (bakeryB[a] === values[1][1])) {
 
                    valueNameB = values[0];
                    a += bakeryB.length;
                }
        }

        for (let a = 0; a < bakeryA.length; a++) {
            if ((bakeryA[a] === values[1][0]) || (bakeryA[a] === values[1][1])) {

                    valueNameA += values[0];
                    bakeryA.length;
                }
        }
 
        if (valueNameA === valueNameB) {

               return valueNameA;
        }

    }

}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
