// Magic 8 Ball Challenge
// Story
//
// As a user I can enter a question on a web page and magically get an answer to my question.
// Goal:
//
// Create an array with the following answers: Yup!, Fuhgeddaboudit, Maybe, Ask: what would your mother do?, Ask: what would an Australian do, then do the opposite, Your answer here.
// Input a question from the user.
// Create a random number to select one of the answers (hint: use Math.random() and change the magnitude).
// Output the question with the random answer.
// Stretch goal:
//
// Put the question and answer into a loop that stops when the user enters STOP.
function eightBall()  {
  var q = prompt("Ask a question")
  var a = ["Yup!", "Fuhgeddaboudit", "Maybe", "what would your mother do?",
  "what would an Australian do", "then do the opposite", "Go home"]
  var p = Math.floor((Math.random()* 7))

  alert(a[p])

}
