//https://www.learnacademy.org/current-days/524

// This is a counter to 10
var i = 0
while (i<10) {
  i++
  console.log(i)
}

// This is a countdown from 10
for (var i = 10; i > 0; i--) {
  console.log(i)
}

// Write a function that merges two arrays and removes all duplicates
var arr1 = [1,2,3]
var arr2 = [2,30,1]
var arr3 = arr1.concat(arr2)

function mergeArray() {
  for(var i=0; i<arr3.length; i++) {
    for(var j=i+1; j<arr3.length; j++) {
        if  (arr3[i] === arr3[j]) {
            arr3.splice(j--, 1);
        }
    }
  }
console.log(arr3);
}

//Write a Javascript function called fillArray to create a specified number of elements with a pre-filled numeric values in an array.
var d = []
function fillArray(a,b) {
  var c = a*b
  for (var i = 0; i < a; i++) {
      d.push(c)
  }
  console.log(d)
}

//Write a Javascript function to filter false, null, 0 and blank values from an array.
var arr = [58, '', 'abcd', true, null, false, 0]
function clean()  {
  function  cleanFilter(value) {
    return value != 0 && value !== null
  }
  console.log(arr.filter(cleanFilter))
}

// Write a Javascript function to find a pair of elements (indices of the two numbers) from a given array whose sum equals a specific target number.
// function findPair(num, array){
//   forEach(function(a){
//     if(firstvalue)
//   }
// )
// }
var numbers= [10,20,30,40,50,60,70], target = 50;
function findNumber (a,b) {
  var arr = [];
  for(var i = 0; i < a.length ; i++) {
    for(var j = 0; j < a.length ; j++) {
      if( a[i] + a[j] === b ) {
        arr = [a.indexOf(a[i]),a.indexOf(a[j])];
      }
    }
  }
return arr;
}
console.log(findNumber(numbers,target));
