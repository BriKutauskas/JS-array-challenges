// Create a function that finds the highest number
var arr = [0.6, 0.4, 0.2, 0.1, 0.9]
function highestNumber()  {
  arr.sort(function(a,b) {
     return b-a
  })
  return arr[0]
}
// Version two to do the same as above following the stupid directions
var arr = [0.6, 0.4, 0.2, 0.1, 0.9]
var max = arr[0]
function highestNumber() {
  arr.forEach(function(a){
    if (a>max)  {
      max = a
    }
  })
  return max
}

// Create a function that finds the lowest number
var arr = [0.6, 0.4, 0.2, 0.1, 0.9]
function lowestNumber()  {
  arr.sort()
  return arr[0]
}
// Version two to do the same as above following the stupid directions
var arr = [0.6, 0.4, 0.2, 0.1, 0.9]
var max = arr[0]
function lowestNumber() {
  arr.forEach(function(a){
    if (a<max)  {
      max = a
    }
  })
  return max
}


// Create a function that finds the smallest number (the closest to zero)
var arr = [-7, -3, 10, 5]
var number = 0

function smallestNumber() {
  var min = arr[0]
  arr.forEach(function(a) {
    if (Math.abs(number - a) < Math.abs(number - min))  {
      min = a
    }
  })
  return min
}


// Create a function that caluclates the sum
var arr = [-7, -3, 10, 5]
function sum(){
  total = 0
  arr.forEach(function(a){
    total =+ a
  })
  return total
}

//Version 2 of sum calculator
var arr = [-7, -3, 10, 5]
var total = 0
function sum() {
  for (var i = 0; i <= arr.length-1; i++) {
    total += arr[i]
  }
  return total
}
sum();


// Creates the mean value of a array
var arr = [-7, -3, 10, 5]

  function mean(){
    total = 0
    arr.forEach(function(a){
      total =+ a
    })
    return total / arr.length
  }


// Create a function that finds the index of the highest number
var arr = [0.6, 0.4, 0.2, 0.1, 0.9]
var max = arr[0]
function indexHighNumber() {
  arr.forEach(function(a){
    if (a>max)  {
      max = a
    }
  })
  return arr.indexOf(max)
}

//
