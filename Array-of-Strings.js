var siblings = ["Christiaan", "Courtney", "Adam"]
var parents = ["Ed", "Bonnie", "Frank", "David", "Amy", "Sandra"]

// Alphabateize the siblings
function alphabetize()  {
  return siblings.sort()
}

// Reverse the alphabetize of the parents
function reverseParents() {
  return parents.sort().reverse()
}

// Sort all of the names in alphabetical order
function alphabetizeAll() {
  return siblings.concat(parents).sort()
}

// Sort all the names in reverse alpha. order
function reverseAll() {
  return siblings.concat(parents).sort().reverse()
}

//Create a function that checks if a given name is in there
function nameCheck()  {
  var family = siblings.concat(parents)
  var name = prompt("Please enter a name")
  function nameID(a)  {
    return a === name
  }
  family.some(nameID)
}
