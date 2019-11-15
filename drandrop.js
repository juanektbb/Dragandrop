/*

THIS PROGRAM DOESN'T USE IDs TO IDENTIFY ANY ELEMENT
INSTEAD, IT USES data-child-box (It acts an ID, DONT REPEAT FIELDS)


*/






var jsonBuilder = {};





//FILL EACH CHILD BOX AND SORT BY ALPHABET
function sortFill(){

    let getAllChildren = document.getElementById("patches-container").children;

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

    var allowDropHeader = true;

    //GET THE ELEMENT DROPPED
    var dataChildBox = ev.dataTransfer.getData("thisDataChild");
    var draggedItem = document.querySelector("[data-child-box='" + dataChildBox +"'");

    //Set the container as its main target
    var whoIsTarget = whoIsThisTarget(ev.target);

    //IF THIS DRAGGED ITEM IS A HEADER AND THE TARGET HAS A HEADER ALREADY
    if(draggedItem.hasAttribute("data-child-header")){
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
        document.getElementById("responseToUser").innerText = "";
        this.sortByAlphabet(whoIsTarget);

    //IF THE ITEM CAN NOT BE DROPPED
    }else{
        document.getElementById("responseToUser").innerText = "You can't set two headers to same box";
        whoIsTarget.style.background = "#efefef";
    }
    
}


//***** FUNCTIONALITY & STYLES: CHANGE COLOUR WHEN PASSING OVER *****//
function overDrop(ev){
    ev.preventDefault();

    //Set the container as its main target
    var whoIsTarget = whoIsThisTarget(ev.target);
    whoIsTarget.style.background = "orange";
}


//***** STYLES: CHANGE COLOUR WHEN PASSING AWAY *****//
function leaveDrop(ev){
   ev.preventDefault();

    //Set the container as its main target
    var whoIsTarget = whoIsThisTarget(ev.target);
    whoIsTarget.style.background = "#efefef";
}


//***** STYLES: CHANGE COLOUR BACK WHEN DROPPING *****//
function dragEnd(ev){

  let thisElement = ev.target;
  let thisElementParent = thisElement.parentNode;

  //Make parent default values
  thisElementParent.style.background = "#efefef";
  this.highlightTarget(thisElementParent);
  this.highlightTarget(thisElement);
}










/****************************************
            SUPPORT FUNCTIONS
****************************************/

function whoIsThisTarget(target){
    return (target.classList.contains("itemdraggable")) ? target.parentNode : target;
}


function highlightTarget(element){

  setTimeout(() => {
    element.style.outline = "pink 5px solid";
    element.style.transition = "0.4s";
  }, 10)

  setTimeout(() => {
    element.style.outline = "none";
  }, 400)

}







function buildJSON(){

    var thisContainer = document.getElementById("patches-container");

    //Go through each box container
    for(var i = 0; i < thisContainer.children.length; i++){

        var thisHeader = thisContainer.children[i].getAttribute("data-parent-box");

        //Go through each 
        for(var j = 0; j < thisContainer.children[i].children.length; j++){

            if(!thisContainer.children[i].children[j].hasAttribute("data-child-header"))
            jsonBuilder[thisContainer.children[i].children[j].getAttribute("data-child-code")] = { parentNode: thisHeader};

        }

    }


    document.getElementById("textarea").innerHTML = JSON.stringify(jsonBuilder);
}









//SORT ELEMENTS OF A PARENT BY ITS INNERTEXT
function sortByAlphabet(parent){

    let rawArray = [];
    let newParent = parent.cloneNode(true);
    let childrenLength = parent.children.length;
    let thisHeader;

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
            thisHeader = thisChild;
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

    //Put the header in first place if exists
    if(thisHeader != null)
        parent.insertBefore(thisHeader, parent.firstChild);

}

sortFill();
buildJSON();





document.getElementById("saveStructure").addEventListener("click", function(ev){

    buildJSON();

});