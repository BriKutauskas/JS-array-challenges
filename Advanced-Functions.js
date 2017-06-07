// Create a function that returns an array with only the even elements from the array
var arr = [1,2,6,78,9,7,245,0]
function callEvens()  {
  function even(number) {
    if (number % 2 === 0) {
      return number
    }
  }
console.log(arr.filter(even))
}

//Create a function that returns an array with oinly the odd elements from the array
var arr = [1,2,6,78,9,7,245,0]
function callOdds()  {
  function odd(number) {
    if (number % 2 != 0) {
      return number
    }
  }
console.log(arr.filter(odd))
}

//Create a function that takes an array and a function, and returns a new array with return value of the function on each of the elemnts of the array.
var arr = [1,2,6,78,9,7,245,0]
function multiplyAll(num){
  return num * 2
}
function arrMultiply() {
   return arr.map(multiplyAll)
}
arrMultiply();

// Create a function that take an array and a function, and returns a new array with only the elements for which the function returns true.
var arr = [1,2,6,78,9,7,245,0]
function isEvenAfterX()  {
  function multiplyAll(num){
    return num * 2
  }
  function arrMultiply() {
    var arr2 = arr.map(multiplyAll)
  }
  arrMultiply();
  if (arr2 % 2 === 0) {
    return arr2
  }
console.log(arr2)
}
