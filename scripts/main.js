
alert("Its the zombie apocalypse. You are looting a store and suddenly a zombie burst through the door!");

const weapon = prompt("You are searching for a weapon. What do you choose? Knife, Axe, Frypan?");

const randomNumber = Math.round(Math.random());

alert("You attack the zombie with your" + " " + weapon);

if(randomNumber === 0) {

	alert("The zombie bites you. You Die!");

}else if(randomNumber === 1){

	alert("You kill the zombie with your" + " " + ". You Win");

}



const safebox = alert("You have found a safe box. Click for a chance to open the box!");

const lockPick = Math.round(Math.random());

if(lockPick === 8) {

	alert("Try again. There is something clicking!");

}else if(lockPick === 1){

	alert("You have open the box!");

}