var btn1 =document.getElementById("btn1");
var btn2=document.getElementById("btn2");
var btn3=document.querySelector("#btn3");
var sm1=document.querySelector("#sm1");
var sm2=document.querySelector("#sm2");
var h1=document.querySelector("h1");
var result=document.querySelector("#result");
var gameOver=false;
var winningScore=5;
var game=document.getElementById("game");


var no=document.querySelector("#ii");
no.addEventListener('change',function()
{
	winningScore=no.value;
	game.textContent=no.value;

});

var score1=0;
var score2=0;
var decision;
btn1.addEventListener('click',function(){
	if(!gameOver)
	{
		score1++;
		//console.log(score1);
		sm1.textContent=score1;
		if(score1==winningScore)
		{
			sm1.classList.add('winner')
			gameOver=true;
			result.textContent="player1 won";
			result.classList.add('alert');
			alert("CONGRATES PLAYER1");
		}
	}
	
});
btn2.addEventListener('click',function(){
	if(!gameOver)
	{
		score2++;
		sm2.textContent=score2;
		if(score2==winningScore)
		{
			sm2.classList.add('winner')
			gameOver=true;
			result.textContent="player2 won";
			result.classList.add('alert');
			alert("CONGRATES PLAYER2");
		}
	}
	
});
btn3.addEventListener('click',function(){
	decision=prompt("Are you sure you want to reser<br>y or n>");
	if(decision==="y")
	{
	score1=0;
	score2=0;
	gameOver=false;
	alert("GAME ID RESET");
	sm1.textContent=0;
	sm2.textContent=0;
	result.textContent="";
	sm1.classList.remove('winner');
	sm2.classList.remove('winner');
	game.textContent=5;
	no.value="";
	winningScore=5;

	}
});
