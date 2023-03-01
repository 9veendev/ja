const cars = ["benz", "Audi", "volvo"];
// const carss = cars.unshift("mango");
// console.log(cars);

// console.log(cars);
// cars.shift();
// console.log(cars);

// console.log(cars);
// cars[2] = "Bus";
// console.log(cars);

console.log(cars);
// cars[cars.length] = "Cycle";
// console.log(cars);

delete cars[0];
console.log(cars[0]);

const girls = ["a","b","c","d"];
const boys = ["1","2","3","4"];
const trans = ["A","B"];
// const Both = girls.concat(boys);
const Both = girls.concat(boys,trans);
console.log(Both);