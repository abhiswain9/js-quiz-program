// variables
var prompts = ["What is the capital of Wyoming?","What is the capital of New Jersey?","What is the capital of New York?","What is the capital of New Hampshire?","What is the capital of California?"];
var rightAnswer = ["CHEYENNE","TRENTON","ALBANY","CONCORD","SACRAMENTO"];


var answer = new Array(5);
var correctAnswers = 0;
var corrects = [];
var wrongs = [];

//collect the answers from the user
for(i=0;i<prompts.length;i++){
  answer[i]= prompt(prompts[i]);
}

//evaluate the answers
for(i=0; i< answer.length ; i++){
  if(answer[i].trim().toUpperCase()== rightAnswer[i]){
    correctAnswers += 1;
    corrects.push(i);
  } else {
    wrongs.push(i);
  }
}

// output results
document.write("<h2>Your got " + correctAnswers + " right ! </h2>");

if(corrects.length!=0){
  document.write("<h3> Correct Answers:</h3>");
  for(i=0; i< corrects.length ; i++){
    document.write("<p>"+prompts[corrects[i]]+ answer[corrects[i]] +"</p>");
  }
}

if(wrongs.length!=0){
  document.write("<h3> Incorrect Answers:</h3>");
  for(i=0; i< wrongs.length ; i++){
    document.write("<p>"+ prompts[wrongs[i]]+ " " + answer[wrongs[i]]+"</p>");
  }
}

if(correctAnswers == 5){
  document.write("<h2>You have been awarded a GOLD medal ! </h2>")
} else if(correctAnswers == 4){
  document.write("<h2>You have been awarded a SILVER medal ! </h2>")
} else if(correctAnswers == 3){
  document.write("<h2>You have been awarded a BRONZE medal ! </h2>")
} else {
  document.write("<h2> No medal awarded :( </h2>")
}
