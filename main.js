// Q no 94
var words = ["Pakistan", "Islamic", "Muslims", "Love", "Beauty"];
var lengths = words.map(function (word) { return word.length; });
console.log(lengths);
//  Q no 95
function filterGreaterThanTen(numbers) {
    return numbers.filter(function (number) { return number > 10; });
}
var numbers = [5, 10, 15, 20, 25, 30];
console.log(filterGreaterThanTen(numbers));
//  Q no 96
function calculateSum(numbers1) {
    return numbers1.reduce(function (accumulator, current) { return accumulator + current; }, 0);
}
var numbers1 = [1, 2, 3, 4, 5];
console.log(calculateSum(numbers));
