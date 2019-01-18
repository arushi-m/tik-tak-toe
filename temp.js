var btn1 =document.getElementById("btn1");
var btn2=document.getElementById("btn2");
var btn3=document.querySelector("#btn3");
var sm1=document.querySelector("#sm1");
var sm2=document.querySelector("#sm2");
var h1=document.querySelector("h1");
var result=document.querySelector("#result");
var gameOver=false;
var winningScore=5;
var arr=[];
var td1=document.querySelector('#td1');
var td2=document.querySelector('#td2');
var td3=document.querySelector('#td3');
var td4=document.querySelector('#td4');
var td5=document.querySelector('#td5');
var td6=document.querySelector('#td6');
var td7=document.querySelector('#td7');
var td8=document.querySelector('#td8');
var td9=document.querySelector('#td9');
var count=1;
var flag=0;
var gameDone=false;
var score1=0;
var score2=0;
var decision;
var no=document.querySelector("#ii");
var check=function()
{
	if(arr[0]==arr[1] && arr[1]==arr[2] && arr[0]==arr[2] && arr[0]!="")
		flag=1;
	else if(arr[3]==arr[4] && arr[4]==arr[5] && arr[3]==arr[5] && arr[3]!="")
		flag=1;
	else if(arr[6]==arr[7] && arr[7]==arr[8] && arr[8]==arr[6] && arr[6]!="")
		flag=1;
	else if(arr[0]==arr[3] && arr[3]==arr[6] && arr[0]==arr[6] && arr[0]!="")
		flag=1;
	else if(arr[1]==arr[4] && arr[1]==arr[7] && arr[4]==arr[7] && arr[1]!="")
		flag=1;
	else if(arr[2]==arr[5] && arr[8]==arr[2] && arr[5]==arr[8] && arr[2]!="")
		flag=1;
	else if(arr[0]==arr[4] && arr[4]==arr[8] && arr[0]==arr[8] && arr[0]!="")
		flag=1;
	else if(arr[2]==arr[4] && arr[4]==arr[6] && arr[6]==arr[2] && arr[2]!="")
		flag=1;
	if(flag===1)
	{
		gameDone=true;
		if(count%2==0)
			alert("player1 won");
		else
			alert("player2 won");
	}
}

/*no.addEventListener('change',function(){
	winningScore=no.value;
	game.textContent=no.value;

});
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
	decision=prompt("Are you sure you want to reser (y/n)?");
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
		no.value="";
		winningScore=5;
	}
});
*/
td1.addEventListener('click',function(){
	if(td1.textContent=="")
	{
		if(count%2===0)
		{
			td1.textContent="o";
			arr[0]=0;
		}
		else
		{
			td1.textContent='x';
			arr[0]=1;
		}
		count++;
		check();
	}

});

td2.addEventListener('click',function(){
if(td2.textContent=="")
{
	if(count%2===0)
	{
		td2.textContent="o";
		arr[1]=0;
	}	
	else
	{
		td2.textContent='x';
		arr[1]=1;
	}
	count++;
	check();
}
});
td3.addEventListener('click',function(){
if(td3.textContent=="")
{
	if(count%2===0)
	{
		td3.textContent="o";
		arr[2]=0;
	}	
	else
	{
		td3.textContent='x';
		arr[2]=1;
	}
	count++;
	check();
}
});
td4.addEventListener('click',function(){
if(td4.textContent=="")
{
	if(count%2===0)
	{
		td4.textContent="o";
		arr[3]=0;
	}	
	else
	{
		td4.textContent='x';
		arr[3]=1;
	}
	count++;
	check();
}
//check();
});
td5.addEventListener('click',function(){
if(td5.textContent=="")
{
	if(count%2===0)
	{
		td5.textContent="o";
		arr[4]=0;
	}	
	else
	{
		td5.textContent='x';
		arr[4]=1;
	}
	count++;
	check();
}
});
td6.addEventListener('click',function(){
if(td6.textContent=="")
{
	if(count%2===0)
	{
		td6.textContent="o";
		arr[5]=0;
	}	
	else
	{
		td6.textContent='x';
		arr[5]=1;
	}
	count++;
	check();
}
});
td7.addEventListener('click',function(){
if(td7.textContent=="")
{
	if(count%2===0)
	{
		td7.textContent="o";
		arr[6]=0;
	}	
	else
	{
		td7.textContent='x';
		arr[6]=1;
	}
	count++;
	check();
}
//check();
});
td8.addEventListener('click',function(){
if(td8.textContent=="")
{
	if(count%2===0)
	{
		td8.textContent="o";
		arr[7]=0;
	}	
	else
	{
		td8.textContent='x';
		arr[7]=1;
	}
	count++;
	check();
}
//check();
});
td9.addEventListener('click',function(){
if(td9.textContent=="")
{
	if(count%2===0)
	{
		td9.textContent="o";
		arr[8]=0;
	}	
	else
	{
		td9.textContent='x';
		arr[8]=1;
	}
	count++;
	check();
}
//check();
});