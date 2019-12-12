/*
Copyright (c) 2019, Juan D. Diaz
Code licensed under the BSD License:
http://www.diazportfolio.co.uk
version: 1.1.0
build: 3167
*/





var jsonBuilder = {};

var stylesCSS = {
    "bgParentBox": "#fff",
    "bgHoverParentBox": "#fff",
    "borderOn": "2px dashed #8a005a",
    "borderOff": "1px dashed #8a005a",
    "borderTopSyleNone" : "none",

    "transferEffect": "5px solid pink"
}


// ---------------------------------------------------------------------------- //

/***************************************************
        MAIN FUNCTIONALITY FOR DRAG AND DROP
***************************************************/

//***** FUNCTIONALITY: SET THIS ELEMENT IS GOING TO BE DRAGGED *****//
function dragStart(ev){
    ev.dataTransfer.setData("thisDataChild", ev.target.getAttribute('data-child-box'));
}

//***** FUNCTIONALITY: PARENT RECEIVES ITEM TO BE DROPPED *****//
function drop(ev){
    ev.preventDefault();

    var responseToUser = document.getElementById("responseToUser");

    responseToUser.innerText = ""; //Clear error box
    responseToUser.style.display = 'none';
    var allowDropHeader = true;

    //GET THE ELEMENT DROPPED
    var dataChildBox = ev.dataTransfer.getData("thisDataChild");
    var draggedItem = document.querySelector("[data-child-box='" + dataChildBox +"'");

    //Set the container as its main target
    var whoIsTarget = whoIsThisTarget(ev.target);

    //IF THIS DRAGGED ITEM IS A HEADER AND THE TARGET HAS A HEADER ALREADY
    if(draggedItem.hasAttribute("data-child-header") && whoIsTarget.parentNode.getAttribute('id') != 'side-container'){
        for(var i = 0; i < whoIsTarget.children.length; i++){
            if(whoIsTarget.children[i].hasAttribute("data-child-header")){
                allowDropHeader = false;
                break;
            }
        }
    }

    //PLACE THE DRAGGED ITEM INTO THE CONTAINER
    if(allowDropHeader){
        whoIsTarget.appendChild(draggedItem);
        this.sortByAlphabet(whoIsTarget);

    //IF THE ITEM CAN NOT BE DROPPED
    }else{

        //Show error message if the actual header is different from what it is intended to drop. This discards error message for dropping same item in same box
        if(whoIsTarget.children[0].getAttribute("data-child-header") != draggedItem.getAttribute("data-child-header")){
            responseToUser.innerText = "You can't set two headers to same box";
            responseToUser.style.display = 'block';
        }

        this.hoverOff(whoIsTarget);
    }
    
}

//***** FUNCTIONALITY & STYLES: CHANGE COLOUR WHEN PASSING OVER *****//
function overDrop(ev){
    ev.preventDefault();

    //Set the container as its main target
    var whoIsTarget = whoIsThisTarget(ev.target);
    this.hoverOn(whoIsTarget);
}

//***** STYLES: CHANGE COLOUR WHEN PASSING AWAY *****//
function leaveDrop(ev){
   ev.preventDefault();

    //Set the container as its main target
    var whoIsTarget = whoIsThisTarget(ev.target);
    this.hoverOff(whoIsTarget);
}

//***** STYLES: CHANGE COLOUR BACK WHEN DROPPING *****//
function dragEnd(ev){

  let thisElement = ev.target;
  let thisElementParent = thisElement.parentNode;

  //Make parent default values
  this.hoverOff(thisElementParent);

  this.highlightTarget(thisElementParent);
  this.highlightTarget(thisElement);
}

// ---------------------------------------------------------------------------- //

function hoverOn(thisElement){
    thisElement.style.border = stylesCSS.borderOn;
    thisElement.style.background = stylesCSS.bgHoverParentBox;

    if(thisElement.parentNode.id == "side-container"){
        // thisElement.style.borderTopStyle = stylesCSS.borderTopSyleNone; 
    }
}

function hoverOff(thisElement){
    thisElement.style.background = stylesCSS.bgParentBox;
    thisElement.style.border = stylesCSS.borderOff;

    if(thisElement.parentNode.id == "side-container"){
        thisElement.style.borderTopStyle = stylesCSS.borderTopSyleNone; 
    }
}

/****************************************
            SUPPORT FUNCTIONS
****************************************/
function whoIsThisTarget(target){
    return (target.hasAttribute('draggable')) ? target.parentNode : target;
}

function highlightTarget(element){

  setTimeout(() => {
    element.style.outline = stylesCSS.transferEffect;
    element.style.transition = "0.4s";
  }, 10)

  setTimeout(() => {
    element.style.outline = "none";
    element.style.transition = "0s";
  }, 400)

}


/***********************************************
    FILL EACH CHILD BOX AND SORT BY ALPHABET
***********************************************/
function sortFill(parentID){

    let getAllParents = document.getElementsByClassName(parentID);

    //Go through all existing parents in the DOM with that class name
    for(var k = 0; k < getAllParents.length; k++){

        //All children of this particular parent
        let getAllChildren = getAllParents[k].children;

        //Populate the innerText with attribute data-child-box
        for(var i = 0; i < getAllChildren.length; i++){
            for(var j = 0; j < getAllChildren[i].children.length; j++){
                getAllChildren[i].children[j].innerText = getAllChildren[i].children[j].getAttribute("data-child-box");
            }
        }

        //Sort when is loaded
        for(var i = 0; i < getAllChildren.length; i++){
            sortByAlphabet(getAllChildren[i]);
        }

    }

}


/*************************************
    SORT ELEMENTS BY ITS INNERTEXT
*************************************/
function sortByAlphabet(parent){

    let rawArray = [];
    let headersArray = [];
    let newParent = parent.cloneNode(true);
    let childrenLength = parent.children.length;
    
    //Empty the parent copy
    newParent.innerHTML = "";

    //Go through each children of the parent
    for(var i = 0; i < childrenLength; i++){

        //Append this child to the raw array for reference
        rawArray.push({
            dataChildBox: parent.children[i].getAttribute("data-child-box")
        });

    }

    //Sort the raw array for reference
    rawArray.sort((a, b) => a.dataChildBox.localeCompare(b.dataChildBox));

    //Go through the raw array
    for(var j = 0; j < rawArray.length; j++){

        var thisChild = document.querySelector("[data-child-box='" + rawArray[j].dataChildBox + "']");

        //If this child is a header
        if(thisChild.hasAttribute("data-child-header")){
            headersArray.push(thisChild);
            continue;
        }

        //Append to new parent 
        newParent.appendChild(thisChild);

    }

    //Empty the old parent
    parent.innerHTML = '';

    //Append each sorted child to parent
    while(newParent.firstChild){
        parent.appendChild(newParent.firstChild);
    }

    //Put the headers into the container in reverse order
    if(headersArray.length != 0){
        for(var i = headersArray.length - 1; i >= 0; i--){
            parent.insertBefore(headersArray[i], parent.firstChild);
        }
    }

}



sortFill("patches-container");
sortFill("side-container");


