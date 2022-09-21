function diceRoll() {
    var random1 = Math.floor((Math.random()*6) + 1);
    var random2 = Math.floor((Math.random()*6) + 1);
    
    document.querySelector(".player1").src = `images/dice${random1}.png`;
    document.querySelector(".player2").src = `images/dice${random2}.png`;

    if(random1 > random2) {
        document.querySelector("h1").textContent = "🚩 Player 1 Wins"
    } else {
        document.querySelector("h1").textContent = "Player 2 Wins 🚩"
    }
}