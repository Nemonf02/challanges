const numbers = [4, 7, 8, 17, 20, 25];
function evenNumbers() {
  const evenNumbers = [numbers[0], numbers[2], numbers[4]];
  return evenNumbers;
}
function oddNumbers() {
  const oddNumbers = [numbers[1], numbers[3], numbers[5]];
  return oddNumbers
}
console.log(evenNumbers(), oddNumbers());