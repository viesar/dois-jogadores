function updateScore()
{
    score = score + 1;
    document.gerElementBYID("score").innerHTML = "pontuação :" + score;
}
function saveScore()
{
    localStorage.setItem("score", score);
}
function nextPage() {
    window.location = "activity_2.html";
}