var playerMoney = 0;

var num_clickers = 0;
var num_juicers = 0;
var num_crushers = 0;
var num_jackhammers = 0;

var clicker_cost = 10;
var juicer_cost = 50;
var crushers_cost = 150;
var jackhammer_cost = 500;

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

//implement a multipier to make game more engageing
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

function ApplyUpgrades() {
    ApplyClickerPoints();
    ApplyJuicerPoints();
    ApplyCrusherPoints();
    ApplyJackhammerPoints();
}

function game() {
    setInterval(() => {
        ApplyUpgrades();
        updateDisplay();
    }, 1000); 
}

function updateDisplay() {
    document.getElementById("scoreDisplay").innerText = playerMoney;
    document.getElementById("Clicker").innerText = clicker_cost;
    document.getElementById("Juicer").innerText = juicer_cost;
    document.getElementById("Crusher").innerText = crushers_cost;
    document.getElementById("Jackhammer").innerText = jackhammer_cost;
}


// Start the game loop
game();
