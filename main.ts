// Q no 94

const words:string[]=["Pakistan","Islamic","Muslims","Love","Beauty"];

const lengths:number[]=words.map(word => word.length)
console.log(lengths);

//  Q no 95

function filterGreaterThanTen(numbers:number[]):number[]{
    return numbers.filter(number => number>10)
}

const numbers:number[]=[5,10,15,20,25,30]
console.log(filterGreaterThanTen(numbers));

//  Q no 96

function calculateSum(numbers1:number[]):number{
    return numbers1.reduce((accumulator,current)=>accumulator + current,0);
}
const numbers1:number[]=[1,2,3,4,5]
console.log(calculateSum(numbers));
