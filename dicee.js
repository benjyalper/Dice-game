

function rollDice() {
    var imgArray = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];

    var player1Num = Math.floor(Math.random() * 6);
    var player2Num = Math.floor(Math.random() * 6);

    document.querySelector(".img1").setAttribute("src", imgArray[player1Num]);
    document.querySelector(".img2").setAttribute("src", imgArray[player2Num]);

    if (player1Num > player2Num) {
        document.querySelector("h1").innerHTML = "Adar wins!";
    } else if (player1Num < player2Num) {
        document.querySelector("h1").innerHTML = "Aba wins!";
    } else {
        document.querySelector("h1").innerHTML = "Draw! Roll the dice!";
    }
}

rollDice();


