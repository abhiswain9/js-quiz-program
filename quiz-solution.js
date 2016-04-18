// quiz begins, no answers correct
var correct = 0;
var totalAsked = 0;

var query = ["Name a programming language that's also a gem","Name a programming language that's also a snake","What language do you use to style web pages?","What language do you use to build the structure of web pages?","What language do you use to add interactivity to a web page?"];
var ans = ["RUBY","PYTHON","CSS","HTML","JAVASCRIPT"];

function question(question, answer){
  totalAsked++;
  var answerInput = prompt(question);
  if ( answerInput.toUpperCase() === answer ) {
   correct += 1;
  }
  else {
    document.write("<p> WRONG ANSWER: "+ answerInput + "</p>")
  }
}

function askAll(){
  for(i=0;i<query.length;i++){
    question(query[i],ans[i]);
  }
}

askAll();


// output results
document.write("<p>You got " + correct + " out of " + totalAsked + " questions correct.<p>");

// output rank
if ( correct === 5 ) {
  document.write("<p><strong>You earned a gold crown!</strong></p>");
} else if (correct > 3) {
  document.write("<p><strong>You earned a silver crown.</strong></p>");
} else if (correct > 2) {
  document.write("<p><strong>You earned a bronze crown.</strong></p>");
} else {
  document.write("<p><strong>No crown for you. You need to study.</strong></p>");
}
