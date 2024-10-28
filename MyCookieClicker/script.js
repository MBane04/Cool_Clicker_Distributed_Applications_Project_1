// money & points variable 
var playerMoney = 0;


// Upgrade variable 
var num_clickers = 0;
var num_juicers = 0;
var num_crushers = 0;
var num_jackhammers = 0;


var clicker_cost = 10;
var juicer_cost = 50;
var crushers_cost = 150;
var jackhammer_cost = 500;
// coconut element delcairation variable 
var coconut;

function IncrementMoney(coconut) {
    coconut = document.getElementById("coconut");
    coconut.style.transform = 'translateY(-30px)'; // little hop animation
    setTimeout(() => {
        coconut.style.transform = 'translateY(0)'; 
    }, 100); 

    playerMoney += 1;
    updateDisplay(); 
}

// Buy Upgrade functions 
//implemented a multipier to make game more engageing
function purchaseClicker() {
    if (playerMoney >= clicker_cost) {
        playerMoney -= clicker_cost;
        num_clickers += 1;
        clicker_cost = Math.floor(clicker_cost * 1.5);
        updateDisplay();
    } else {
        alert("Not enough money!");
    }
}

function purchaseJuicer() {
    if (playerMoney >= juicer_cost) {
        playerMoney -= juicer_cost;
        num_juicers += 1;
        juicer_cost = Math.floor(juicer_cost * 1.5);
        updateDisplay();
    } else {
        alert("Not enough money!");
    }
}

function purchaseCrusher() {
    if (playerMoney >= crushers_cost) {
        playerMoney -= crushers_cost;
        num_crushers += 1;
        crushers_cost = Math.floor(crushers_cost * 1.5); 
        updateDisplay();
    } else {
        alert("Not enough money!");
    }
}

function purchaseJackhammer() {
    if (playerMoney >= jackhammer_cost) {
        playerMoney -= jackhammer_cost;
        num_jackhammers += 1;
        jackhammer_cost = Math.floor(jackhammer_cost * 1.5); 
        updateDisplay();
    } else {
        alert("Not enough money!");
    }
}

// Do Upgrade functions 
function ApplyClickerPoints() {
    playerMoney += (num_clickers);
}

function ApplyJuicerPoints() {
    playerMoney += (5 * num_juicers);
}

function ApplyCrusherPoints() {
    playerMoney += (15 * num_crushers);
}

function ApplyJackhammerPoints() {
    playerMoney += (25 * num_jackhammers);
}

// Do all Upgrade actions
function ApplyUpgrades() {
    ApplyClickerPoints();
    ApplyJuicerPoints();
    ApplyCrusherPoints();
    ApplyJackhammerPoints();
}
// game 'ssetInterval' does what is specified on a given interavl, in this case one second
function game() {
    setInterval(() => {
        ApplyUpgrades();  // applys upgrade to balance
        updateDisplay(); // updates the values on page  
    }, 1000); // 1000ms or 1s
}
// updates the displays 
function updateDisplay() {
    document.getElementById("scoreDisplay").innerText = playerMoney;
    document.getElementById("Clicker").innerText = clicker_cost;
    document.getElementById("Juicer").innerText = juicer_cost;
    document.getElementById("Crusher").innerText = crushers_cost;
    document.getElementById("Jackhammer").innerText = jackhammer_cost;
}



// start the game
game();
