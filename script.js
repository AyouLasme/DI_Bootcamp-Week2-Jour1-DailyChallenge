// Exercice1
const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.splice(0,1);
fruits.sort();
fruits.push("Kiwi");
fruits.shift("Apples");
fruits.reverse();
console.log("mon tableau final est: " +fruits)


// Exercice2
const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
moreFruits[1][1];