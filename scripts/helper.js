/**************************************
Copyright (c) 2019, Juan D. Diaz
https://github.com/juanektbb/Dragandrop

Open Source Code - Enjoy it ;)
version: 1.0.0
**************************************/

var theSideContainer = document.querySelector("#side-container .dataparentbox");

var errorOne = "You can't remove this region as it still has data in it";
var errorTwo = "You can't remove this area as it still has data in it";
var errorThree = "You can't set two area managers to the same area";

/***************************
    STYLES FUNCTIONALITY
***************************/
var stylesCSS = {
    "bgParentBox": "#fff",
    "bgHoverParentBox": "#fff",
    "borderOn": "2px dashed #630041",
    "borderOff": "1px dashed #630041",
    "borderTopSyleNone" : "none",

    "transferEffect": "3px solid #ffbaba"
}

function animateEaseIn(elem){
    elem.style.opacity = "0.3";
    elem.style.transform = "scale(0.9)";
}
function animateEaseOut(elem){
    elem.style.opacity = "1";
    elem.style.transform = "scale(1)";
}
function hoverOn(thisElement){
    thisElement.style.border = stylesCSS.borderOn;
    thisElement.style.background = stylesCSS.bgHoverParentBox;

    if(thisElement.parentNode.id == "side-container"){
         thisElement.style.borderTopStyle = stylesCSS.borderTopSyleNone; 
    }
}
function hoverOff(thisElement){
    thisElement.style.background = stylesCSS.bgParentBox;
    thisElement.style.border = stylesCSS.borderOff;
    thisElement.style.transition = "0.1s"; //Improve animation effect

    if(thisElement.parentNode.id == "side-container"){
        thisElement.style.borderTopStyle = stylesCSS.borderTopSyleNone; 
    }
}

//SPECIAL ANIMATION AFTER DROPPING
function highlightTarget(element){
	setTimeout(() => {
		element.style.outline = stylesCSS.transferEffect;
		element.style.transition = "0.3s";
	}, 10)

	setTimeout(() => {
		element.style.outline = "none";
		element.style.transition = "0s";
	}, 400)
}


/*******************************
    	HELPER FUNCTIONS
*******************************/
//SHOW ERRORS TO THE USER
function createResponse(text){
    var responseToUser = document.getElementById("responseToUser");
    responseToUser.innerText = text;
    responseToUser.style.display = 'block';

    var getTopPage = document.getElementsByTagName("html")[0];
    getTopPage.scrollIntoView({behavior: 'smooth'});
}
function clearResponse(){
    var responseToUser = document.getElementById("responseToUser");
    responseToUser.innerText = "";
    responseToUser.style.display = 'none';
}

//RETURN NEW NODE FROM THE TEMPLATES IN HTML
function returnNewNode(id){
    var supportiveNode = document.getElementById(id);
    var newNode = supportiveNode.cloneNode(true);
    newNode.removeAttribute('id');
    return newNode;
}