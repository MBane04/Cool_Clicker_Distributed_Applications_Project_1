var playerOnePoints = 0;
var playerTwoPoints = 0;

var coconut;//coconut image
//another change


//add player 1 and player 2 points
function addPlayerOnePoints() {
    coconut = document.getElementById("coconut");
    coconut.style.transform = 'translateY(-30px)'; // little hop animation
    setTimeout(() => {
        coconut.style.transform = 'translateY(0)';
    }, 100);
    playerOnePoints += 1;
    updateCompDisplay();
}

//add player 2 points
function addPlayerTwoPoints() {
    coconut = document.getElementById("coconut");
    coconut.style.transform = 'translateY(-30px)'; // little hop animation
    setTimeout(() => {
        coconut.style.transform = 'translateY(0)';
    }, 100);
    playerTwoPoints += 1;
    updateCompDisplay();
}
function updateCompDisplay() {
    document.getElementById("comp1ScoreDisplay").innerText = playerOnePoints;
    document.getElementById("comp2ScoreDisplay").innerText = playerTwoPoints;
}