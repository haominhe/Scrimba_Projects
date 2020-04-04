// Run: node index.js

const {Cat, Animal} = require('./animal');
let cat = new Animal('Cat', 4);
let cat2 = new Cat('Kat', 8);


console.log(cat.legs)
cat.makeNoise();
console.log(cat.metaData)
console.log(Animal.return10());

cat2.makeNoise();
console.log(cat2.metaData)

