
function func(){
    const diceVoice = new Audio('Audio/dice-audio.mp3');
    diceVoice.play();
    setTimeout( display, 3000);
}


function display(){
    var dice1=Math.ceil(Math.random()*6);
    var dice2=Math.ceil(Math.random()*6);
    if(dice1==dice2)
    {
        document.querySelector("h1").innerHTML="Match Draw!";
    }
    else if(dice1>dice2)
    {
        document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
    }
    else 
    {
        document.querySelector("h1").innerHTML="Player 2 Wins!🚩";
    }
    var image1Src="images/dice"+dice1+".png";
    var image2Src="images/dice"+dice2+".png";
    document.querySelector(".img1").setAttribute("src", image1Src);
    document.querySelector(".img2").setAttribute("src", image2Src);
}

