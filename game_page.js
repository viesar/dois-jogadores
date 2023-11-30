player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":"
document.getElementById("player2_name").innerHTML = player2_name + ":"

document.getElementById("player1_score").innerHTML = player1_score
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Turno de Pergunta - " + player1_name;
document.getElementById("player_answer").innerHTML = "Turno de Resposta - " + player2_name;

function send() {
    get_word = document.getElementById("word").ariaValueMax;
    word = get_word.toLowerCase();
  console.log("utilizando a toLowercase = " + word );

  charAt1 = word.charAt(1);
  console.log(charAt1);
  length_divide_2 = Math.floor(word.length/2);
charAt2 = word.charAt(length_divide_2);
console.log(charAt2);

length_minus_1 = word.length - 1;
charAt3 = word.charAt(length_minus_1);
 console.log(charAt3);

 remove_charAt1 = word.replace(charAt1, "_");
 remove_charAt2 = remove_charAt1.replace(charAt2, "_");
 console.log(remove_charAt3);
 
 question_word = "<h4 id='word_diplay'> P. "+remove_charAt3+"</h4>";
 input_box = "<br>Resposta : <input type= 'text' id= 'input_check_box'>";
 check_button = "<br><br><button class='btn btn-info' onclick='check()'>checar</button>";
 row = question_word + input_box + check_button ;
 document.getElementById("output").innerHTML = row;
 document.getElementById("word").value = "";
}

questionTurn = "player1";
answerTurn = "player2";

function check()
{
  getAnswer = document.getElementById("inputCheckBox").value;
  answer = getAnswer.toLowerCase();
console.log("resposta em caixa baixa -" + answer);
if(answer == word)
{
  if(answerTurn == "player1")
  {
    player1_score = player1_score +1;
    document.getElementById("player1_score").innerHTML = player1_score;
  }
  else
  {
    player2_score = player2_score +1
    document.getElementById(player2_score).innerHTML = player2_score;
  }
}
if(questionTurn == "player1")
{
  questionTurn == "player2"
  document.getElementById("playerQuestion").innerHTML = "Turno de pergunta: " + player2_name;
}
else
{
  questionTurn = "player1"
  document.getElementById("playerQuestion").innerHTML = "Turno de pergunta: " + player1_name
}
if (answerTurn == "player1")
{
  answerTurn == "Player2"
  document.getElementById("playerAnswer").innerHTML = "Turno de resposta: " + player2_name;
}
else
{
  answerTurn = "player1"
  document.getElementById("playerAnswer").innerHTML = "Turno de resposta:" + player1_name
}
document.getElementById("output").innerHTML = "";
}