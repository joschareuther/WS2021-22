interface Person {
    name: string;
    hairColour: string;
    age: number;
    food: string[];
}

// tslint:disable-next-line: variable-name
let Liste: Person[] = [ 
    {
        name: "Ronja",
        hairColour: "blond",
        age: 20 ,
        food: ["Auflauf", "LinsenmitSpätzle"]},
    {    
        name: "Hanna",
        hairColour: "red",
        age: 19,
        food: ["Pizza", "Gemüse", "Lasagne"]},
    {
        name: "Marc" , 
        hairColour: "braun", 
        age: 19,
        food: ["Döner", "Fischstäbchen"]}

];


for (let index:  number = 0; index < Liste.length; index++) {
    console.log (Liste[0].name);
    
}

let nums: number[] = [2, 345, 34, 347, 1, 46, 42, 63, 346];

let sum: number = 0;

for (let index: number = 0; index < nums.length; index++) {
sum += nums[index];
}

console.log(sum);




