/**************************************
Copyright (c) 2019, Juan D. Diaz
https://github.com/juanektbb/Dragandrop

Open Source Code - Enjoy it ;)
version: 1.0.0
**************************************/

/****************************
    JSON BUILDER FUNCTION
****************************/
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

                    if(thisHeader == null){
                        thisHeader = thisGrandParent;
                    }
                    
                    //Build JSON entry
                    jsonBuilder[thisContainer.children[i].children[j].getAttribute("data-child-code")] = { 
                        parentNode: thisHeader,
                        grandParentNode: thisGrandParent 
                    };

                }
            }
        }
    }

    return jsonBuilder;
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

//This function is also used when dynamically adds grandparents
function createListenerGP(selectTarget){
    selectTarget.addEventListener("change", function(ev){
        setGrandparent(this);
    });
}

//GET ALL BUTTONS TO CHANGE GRANDPARENTS, LOOP THEM, SET GRANDPARENTS AND CREATE LISTENERS
var allSelectButtons = document.getElementsByClassName("chooseGrandParent");
for(var i = 0; i < allSelectButtons.length; i++){

    //Set default values
    this.setGrandparent(allSelectButtons[i]);

    //Create a listener for every change
    this.createListenerGP(allSelectButtons[i]);

}


/**********************************
    ADD PATCHES TO MAIN PARENTS
**********************************/
//This function is also used when dynamically adds a parent
function createListenerPC(button){

    //Create a listener for click
    button.addEventListener("click", function(ev){
        var parent = this.parentNode.parentNode;
        var brother = parent.children[1];

        var newDataParent = returnNewNode("parentSupport");
        newDataParent.setAttribute('class', 'dataparentbox');
        brother.append(newDataParent);
    });

}

//GET ALL BUTTONS TO ADD NEW PATCH CONTAINER AND LOOP THEM
var addNewPatchContainers = document.getElementsByClassName("addNewPatchContainer");
for(var i = 0; i < addNewPatchContainers.length; i++){

    //Create a listener for press
    this.createListenerPC(addNewPatchContainers[i]);

}


/************************************************
    REMOVE ALL EMPTY PATCHES FROM GRANDPARENT
************************************************/
//This function is also used when dynamically remove parents
function createListenerRP(button){

    button.addEventListener("click", function(ev){
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

//GET ALL BUTTONS TO REMOVE PATCHES AND LOOP THEM
var removeEmptyPatches = document.getElementsByClassName("removeEmptyPatches");
for(var i = 0; i < removeEmptyPatches.length; i++){

    //Create a listener for press
    this.createListenerRP(removeEmptyPatches[i]);

}


/*****************************************
        CONFIRMATION EXPORT WINDOW
*****************************************/
var modalBg = document.getElementById("modalConfirm");
var xbuttonClose = document.getElementById("xbuttonClose");
var buttonSaveStructure = document.getElementById("saveStructure");
var buttonConfirmStructure = document.getElementById("confirmStructure");

//Open modal window
buttonSaveStructure.onclick = function(){
  modalBg.style.display = "block";
}

//Close modal by using x 
xbuttonClose.onclick = function(){
    modalBg.style.display = "none";
}

//Close modal by clicking outside
window.onclick = function(event){
    if(event.target == modalBg){
        modalBg.style.display = "none";
    }
}

//Confirm button is clicked
buttonConfirmStructure.onclick = function(){
    var newJSON = buildJSON();
    handledata(newJSON);
    modalBg.style.display = "none";
}

//MANIPULATE FINAL JSON
function handledata(json_data){

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "endpoint.php", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(json_data);

    console.log(json_data);
    //location.reload();

}