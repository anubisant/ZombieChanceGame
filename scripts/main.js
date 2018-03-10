

alert("Its the zombie apocalypse. You are looting a store and suddenly a zombie burst through the door!");

const weapon = prompt("You are searching for a weapon. What do you choose? Knife, Axe, Frypan?");

//const dessision = prompt("Do you want to run? or stay and fight?");

const randomNumber = Math.round(Math.random());

alert("You attack the zombie with your" + " " + weapon);

if(randomNumber === 0) {
	alert("The zombie bites you. You Die!");
}else{
	alert("You kill the zombie with your" + " " + ". You Win");
}