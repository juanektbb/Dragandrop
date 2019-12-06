/*

THIS PROGRAM DOESN'T USE IDs TO IDENTIFY ANY ELEMENT
INSTEAD, IT USES data-child-box (It acts an ID, DONT REPEAT FIELDS)


*/


var jsonBuilder = {};

var stylesCSS = {
    "parentBox": "#fff",
    "hover": "pink",
    "transferEffect": "5px solid pink"
}


//FILL EACH CHILD BOX AND SORT BY ALPHABET
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

        whoIsTarget.style.background = stylesCSS.parentBox;
    }
    
}

//***** FUNCTIONALITY & STYLES: CHANGE COLOUR WHEN PASSING OVER *****//
function overDrop(ev){
    ev.preventDefault();

    //Set the container as its main target
    var whoIsTarget = whoIsThisTarget(ev.target);
    whoIsTarget.style.background = stylesCSS.hover;
}

//***** STYLES: CHANGE COLOUR WHEN PASSING AWAY *****//
function leaveDrop(ev){
   ev.preventDefault();

    //Set the container as its main target
    var whoIsTarget = whoIsThisTarget(ev.target);
    whoIsTarget.style.background = stylesCSS.parentBox;
}

//***** STYLES: CHANGE COLOUR BACK WHEN DROPPING *****//
function dragEnd(ev){

  let thisElement = ev.target;
  let thisElementParent = thisElement.parentNode;

  //Make parent default values
  thisElementParent.style.background = stylesCSS.parentBox;
  this.highlightTarget(thisElementParent);
  this.highlightTarget(thisElement);
}


// ---------------------------------------------------------------------------- //

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
  }, 400)

}


/*******************
    JSON BUILDER
*******************/
function buildJSON(){

    jsonBuilder = {};

    var getAllParents = document.getElementsByClassName("patches-container");

    //Go through all existing parents in the DOM with that class name
    for(var h = 0; h < getAllParents.length; h++){
        var thisContainer = getAllParents[h]; //Only for improving reading

        //Go through each box container
        for(var i = 0; i < thisContainer.children.length; i++){
            var thisHeader = null;  //No header found yet

            //Go through each element till the header is found and break it
            for(var j = 0; j < thisContainer.children[i].children.length; j++){
                if(thisContainer.children[i].children[j].hasAttribute("data-child-header")){
                    thisHeader = thisContainer.children[i].children[j].getAttribute("data-child-header");
                    break;
                }
            }

            //Go through each element except header and append to JSON
            for(var j = 0; j < thisContainer.children[i].children.length; j++){
                if(!thisContainer.children[i].children[j].hasAttribute("data-child-header")){

                    var thisGrandParent = thisContainer.getAttribute("data-grandparent");

                    //If there was not value, make grandparent null
                    if(thisGrandParent == '')
                        thisGrandParent = null;
                    
                    //Build JSON entry
                    jsonBuilder[thisContainer.children[i].children[j].getAttribute("data-child-code")] = { 
                        parentNode: thisHeader,
                        grandParentNode: thisGrandParent 
                    };

                }
            }
        }
    }

    console.log(jsonBuilder);
    document.getElementById("textarea").innerHTML = JSON.stringify(jsonBuilder);
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


/***************************************
    GRAND PARENT - BIGGER CONTAINERS
***************************************/
//TAKE THE BUTTON AND PLACE ITS VALUE INTO THE CONTAINER PLACE
function setGrandparent(whatButton){
    var parent = whatButton.parentNode.parentNode;
    var brother = parent.children[1];

    brother.setAttribute("data-grandparent", whatButton.value);
}

//GET ALL BUTTONS TO CHANGE GRANDPARENTS, LOOP THEM, SET GRANDPARENTS AND CREATE LISTENERS
var allSelectButons = document.getElementsByClassName("chooseGrandParent");
for(var i = 0; i < allSelectButons.length; i++){

    //Set default values
    setGrandparent(allSelectButons[i]);

    //Create a listener for every change
    allSelectButons[i].addEventListener("change", function(ev){
        setGrandparent(this);
    });

}


/**********************************
    ADD PATCHES TO MAIN PARENTS
**********************************/
//GET ALL BUTTONS TO ADD NEW PATCH CONTAINER AND LOOP THEM
var addNewPatchContainers = document.getElementsByClassName("addNewPatchContainer");
for(var i = 0; i < addNewPatchContainers.length; i++){

    //Create a listener for press
    addNewPatchContainers[i].addEventListener("click", function(ev){

        var parent = this.parentNode.parentNode;
        var brother = parent.children[1];

        var supportiveDataParent = document.getElementById("parentSupport");

        //Copy the supportive parent (empty template) + its classes and id
        var newDataParent = supportiveDataParent.cloneNode(true);
        newDataParent.setAttribute('class', 'dataparentbox');
        newDataParent.removeAttribute('id');
        brother.append(newDataParent);

    });

}


/************************************************
    REMOVE ALL EMPTY PATCHES FROM GRANDPARENT
************************************************/
//GET ALL BUTTONS TO REMOVE PATCHES AND LOOP THEM
var removeEmptyPatches = document.getElementsByClassName("removeEmptyPatches");
for(var i = 0; i < removeEmptyPatches.length; i++){

    //Create a listener for press
    removeEmptyPatches[i].addEventListener("click", function(ev){

        var parent = this.parentNode.parentNode;
        var brother = parent.children[1];
        var arrayToRemove = [];

        //Go trought each node, find if it is empty and append to array
        for(var j = 0; j < brother.children.length; j++){
            if(brother.children[j].children.length == 0){
                arrayToRemove.push(brother.children[j]);
            }
        }

        //Go through array and remove all nodes
        for(var x = 0; x < arrayToRemove.length; x++){
            arrayToRemove[x].parentNode.removeChild(arrayToRemove[x]);
        }

    });

}





sortFill("patches-container");
sortFill("side-container");

buildJSON();





document.getElementById("saveStructure").addEventListener("click", function(ev){

    buildJSON();

});
