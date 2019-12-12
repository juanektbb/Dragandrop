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

    console.log(jsonBuilder);
    handledata(jsonBuilder);
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



















buildJSON();


document.getElementById("saveStructure").addEventListener("click", function(ev){
    buildJSON();
});