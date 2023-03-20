const option1 = document.getElementById("option1"),
      option2 = document.getElementById("option2"),
      option3 = document.getElementById("option3"),
      audioWrong = document.getElementById("myAudioWrong"),
      audioRight = document.getElementById("myAudioRight");
      
var answer = 0;

function generate_equation(){ 
  var num1 = Math.floor(Math.random() * 13),
      num2 = Math.floor(Math.random() * 13),
      wrongAnswer1 = Math.floor(Math.random() * 50),
      wrongAnswer12 = Math.floor(Math.random() * 50),
      allAnswers = [],
      switchAnswers = [];

  answer = eval(num1 * num2);
  
  document.getElementById("num1").innerHTML = num1; 
  document.getElementById("num2").innerHTML = num2; 

  allAnswers = [answer, wrongAnswer1, wrongAnswer12];

  for (i = allAnswers.length; i--;){
    switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
  };

  option1.innerHTML = switchAnswers[0];
  option2.innerHTML = switchAnswers[1];
  option3.innerHTML = switchAnswers[2]; 

};

option1.addEventListener("click", function(){
    if(option1.innerHTML == answer){
      generate_equation();
      audioRight.play();
      document.getElementById("answer_published").innerHTML = "Yup, the answer is correct!" + "<br>" + "Solve the next one:";
      document.getElementById("answer_published").style.color = "rgb(48,227,223)";
      document.getElementById("img-smile").style.visibility = "hidden";

    }
    else{
      audioWrong.play();
      document.getElementById("answer_published").innerHTML = "Sorry, wrong answer." + "<br>" + "Try again.";
      document.getElementById("answer_published").style.color = "OrangeRed";
      document.getElementById("img-smile").style.visibility = "hidden";
    }
});

option2.addEventListener("click", function(){
    if(option2.innerHTML == answer){
      generate_equation();
      audioRight.play();
      document.getElementById("answer_published").innerHTML = "Yup, the answer is correct!" + "<br>" + "Solve the next one:";
      document.getElementById("answer_published").style.color = "rgb(48,227,223)";
      document.getElementById("img-smile").style.visibility = "hidden";
    }
    else{
      audioWrong.play();
      document.getElementById("answer_published").innerHTML = "Sorry, wrong answer." + "<br>" + "Try again.";
      document.getElementById("answer_published").style.color = "OrangeRed";
      document.getElementById("img-smile").style.visibility = "hidden";
    }
});

option3.addEventListener("click", function(){
    if(option3.innerHTML == answer){
     generate_equation();
     audioRight.play();
     document.getElementById("answer_published").innerHTML = "Yup, the answer is correct!" + "<br>" + "Solve the next one:";
     document.getElementById("answer_published").style.color = "rgb(48,227,223)";
     document.getElementById("img-smile").style.visibility = "hidden";
    }
    else{
      audioWrong.play();
      document.getElementById("answer_published").innerHTML = "Sorry, wrong answer." + "<br>" + "Try again.";
      document.getElementById("answer_published").style.color = "OrangeRed";
      document.getElementById("img-smile").style.visibility = "hidden";
    }
});

generate_equation();


