// 1. Mama cat
// Define an object called cat1 that contains the following properties:

// name
// breed
// age (a number)
// console.log the cat's age
// console.log the cat's breed
const cat1 = {
    name: "Tommy",
    breed: "Domestic Shorthair",
    age: 1
}
console.log(cat1.age);
console.log(cat1.breed);

// Papa cat
// Define an object called cat2that also contains the properties:
// name
// breed
// age (a number)
const cat2 = {
    name: "Jerry",
    breed: "American Shorthair",
    age: 2
}

/*3. Combine Cats!
The cats are multiplying!
Write a function combineCatsthat has two parameters mama, and papa. 
The function will take two arguments -- each a cat object.
Pass cat1and cat2as arguments to the combineCatsfunction. The function should console.log them.*/
// function combineCats(argueX, argueY) {
//     console.log(argueX);
//     console.log(argueY);
// }
// console.log(combineCats(cat1, cat2))

function combineTwoCats(argue1, argue2) {
    return {
    name: argue1.name + argue2.name,
    breed: argue1.breed + " - " + argue2.breed,
    age: 1
} 
    }
    
console.log(combineTwoCats(cat1, cat2));

// 4. Cat brain bender
// Write a console.log that is three levels deep of combineCats. combineCats should have two arguments, 
// each which are combineCats, each which have two arguments, each which are combineCats.
console.log(combineTwoCats(
        combineTwoCats(cat1, cat2),
        combineTwoCats(cat1, cat2)
    )
);
console.log(combineTwoCats(combineTwoCats(cat1, cat2), combineTwoCats(cat1, cat2)));

// Write a console.log that is three levels deep of combineCats. combineCats should have two arguments, 
// each which are combineCats, each which have two arguments, each which are combineCats.
console.log(combineTwoCats(
    combineTwoCats(
     combineTwoCats(
        combineTwoCats(cat1, cat2),
        combineTwoCats(cat1, cat2),
        ),
        combineTwoCats(
            combineTwoCats(cat1, cat2),
            combineTwoCats(cat1, cat2) 
        )
    )
)
);