/*If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.*/
//var target = prompt("target number");
//var sum = 0;
//for (var i = 0; i < target; i++) {
//   if (i%3===0 || i%5===0){
//     sum = sum + 1;
//   }
//}
//   console.log(sum);

/*now with a function*/

var target = prompt("target number");

function sumDivisableBy(n){
  var p=target / n;
  return n*(p*(p+1))/2;
}

console.log(sumDivisableBy(3)+sumDivisableBy(5)-sumDivisableBy(15))
