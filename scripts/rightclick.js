/****************************************************************
        BUTTONS AND FUNCTIONALY FOR EVERY ELEMENT OF MENU
****************************************************************/
var whoIsNewTarget = null;

//Create new member of the family
function appendNewFamilyMember(whichSupport){
    var familyMember = returnNewNode(whichSupport);
    whoIsNewTarget.append(familyMember);
    return familyMember;
}

//BUTTON AND FUNCTIONALY FOR ADDING GRANDPARENT
var buttonAddGrandParent = document.getElementById("addGrandParent");
buttonAddGrandParent.addEventListener("click", function(e){
    var theNewGrandParent = appendNewFamilyMember("grandParentSupport");

    //CREATE LISTENERS FOR EVERY BUTTON OF THE GRANDPARENT
    var thisSelectElem = theNewGrandParent.querySelector(".chooseGrandParent");
    createListenerGP(thisSelectElem);

    var thisAddElem = theNewGrandParent.querySelector(".addNewPatchContainer");
    createListenerPC(thisAddElem);

    var thisRemElem = theNewGrandParent.querySelector(".removeEmptyPatches");
    createListenerRP(thisRemElem);
});

//BUTTON AND FUNCTIONALY FOR ADDING PARENT
var buttonAddParent = document.getElementById("addParent");
buttonAddParent.addEventListener("click", function(e){
    appendNewFamilyMember("parentSupport");
});

//BUTTON AND FUNCTIONALY FOR DELETING GRANDPARENT
var buttonDeleteGrandParent = document.getElementById("deleteGrandParent");
buttonDeleteGrandParent.addEventListener("click", function(e){
    var bool = true;
   
    //Find out if the container is empty
    for(var i = 0; i < whoIsNewTarget.children.length; i++){
        if(whoIsNewTarget.children[i].children.length > 0){
            bool = false;
            break;
        }
    }

    //If the grandparent was not empty
    if(!bool){
        createResponse("You can't remove this grandparent if still has data in it");
    }else{
        whoIsNewTarget.parentNode.remove();
    }
});

//BUTTON AND FUNCTIONALY FOR DELETING PARENT
var buttonDeleteParent = document.getElementById("deleteParent");
buttonDeleteParent.addEventListener("click", function(e){

    //If this parent was not empty
    if(whoIsNewTarget.children.length > 0){
        createResponse("You can't remove this parent if still has data in it");
    }else{
        whoIsNewTarget.remove();
    }

});

//BUTTON AND FUNCTIONALY FOR DUPLICATING A HEADING
var buttonDuplicateHeading = document.getElementById("duplicateHeading");
buttonDuplicateHeading.addEventListener("click", function(e){
    
    var whereToAppend = theSideContainer;
    var newNodeHeading = whoIsNewTarget.cloneNode(true);
    newNodeHeading.classList.add("duplicatedParent");
    whereToAppend.append(newNodeHeading);

    whereToAppend.parentNode.parentNode.parentNode.scrollIntoView({behavior: 'smooth'});

    sortByAlphabet(whereToAppend);
    highlightTarget(newNodeHeading);

});

//BUTTON AND FUNCTIONALY FOR CLOSING A RESTAURANT
var buttonCloseRestaurant = document.getElementById("closeRestaurant");
buttonCloseRestaurant.addEventListener("click", function(e){
    
    //Personalized: Change the commented lines below to append to the side container and effect
    var whereToAppend = document.querySelector("div[data-grandparent='100'] .dataparentbox");
    whereToAppend.parentNode.parentNode.scrollIntoView({behavior: 'smooth'});
    // var whereToAppend = theSideContainer;
    // whereToAppend.parentNode.parentNode.parentNode.scrollIntoView({behavior: 'smooth'});
    whereToAppend.append(whoIsNewTarget);

    sortByAlphabet(whereToAppend);
    highlightTarget(whoIsNewTarget);

});

//BUTTON AND FUNCTIONALY FOR DELETING PARENT
var buttonRemoveDuplicatedParent = document.getElementById("removeDuplicatedParent");
buttonRemoveDuplicatedParent.addEventListener("click", function(e){
    whoIsNewTarget.remove();
});


/**************************************
    VITAL MENU SUPPORTIVE FUNCTIONS
**************************************/
var menu = document.querySelector(".menu");
let menuVisible = false;

menu.addEventListener("contextmenu", e => {
    e.preventDefault();
    return false;
});

function toggleMenu(command) {
  menu.style.display = (command == "show") ? "block" : "none";
  menuVisible = !menuVisible;
};

function setPosition(top, left){
    var aleft= left + "px";
    var atop = top + "px";

    menu.style.left = aleft;
    menu.style.top = atop;
    toggleMenu("show");
};

window.addEventListener("click", e => {
    toggleMenu("hide");
});


/**************************************************
        RIGHT CLICK ON SCREEN FUNCTIONALITY
**************************************************/
function showOptions(type){

    //Hide all the options from the dropdown menu
    var menuOption = document.getElementsByClassName("menu-option");
    for(i = 0; i < menuOption.length; i++){
        menuOption[i].style.display = "none";
    }

    //Display the correct options of the menu
    if(type == "allHierarchy"){
        buttonAddGrandParent.style.display = "block";

    }else if(type == "patchesContainer"){
        buttonAddParent.style.display = "block";
        buttonDeleteGrandParent.style.display = "block";

    }else if(type == "dataParentBox"){
        buttonDeleteParent.style.display = "block";

    }else if(type == "itemHeading"){
        buttonDuplicateHeading.style.display = "block";
    
    }else if(type == "dataChildBox"){
        buttonCloseRestaurant.style.display = "block";

    }else if(type == "duplicatedParent"){
        buttonDuplicateHeading.style.display = "block";
        buttonRemoveDuplicatedParent.style.display = "block";
    }

}

//MAIN FUNCTION TO DETECT RIGHT CLICK
var supercontiner = document.getElementsByClassName("supercontiner")[0];
supercontiner.addEventListener("contextmenu", e => {

    //Avoid any of these to be clickable
    if(e.target.getAttribute("id") == "side-container" || e.target.parentNode.getAttribute("id") == "side-container" || e.target.classList.contains("supercontiner") || e.target.classList.contains("side-title") || 
       e.target.classList.contains("chooseGrandParent") || e.target.classList.contains("addNewPatchContainer") || e.target.classList.contains("removeEmptyPatches")){
        e.preventDefault();
        return false;
    }

    //CLICK INSIDE OF THE BIG HIERARCHY
    if(e.target.getAttribute('id') == "all-hierarchy"){
        e.preventDefault();

        //Display correct target
        whoIsNewTarget = e.target;
        highlightTarget(whoIsNewTarget);
        this.showOptions("allHierarchy");

        var left = e.pageX;
        var top = e.pageY;
        setPosition(top, left);
        return false;
    }

    //CLICK INSIDE OF A GRANDPARENT
    if(e.target.classList.contains('patches-container') || e.target.classList.contains('sub-hierarchy') || e.target.classList.contains('patches-header')){
        e.preventDefault();

        //Find the correct target
        var getPatchesContainer = e.target;
        var animateSubHierarchy = e.target.parentNode;
        if(e.target.classList.contains('sub-hierarchy')){
            getPatchesContainer = e.target.querySelector(".patches-container");
            animateSubHierarchy = e.target;
        }
        if(e.target.classList.contains('patches-header')){
            getPatchesContainer = e.target.parentNode.querySelector(".patches-container");
        }

        //Display correct target
        whoIsNewTarget = getPatchesContainer;
        highlightTarget(animateSubHierarchy);
        this.showOptions("patchesContainer");

        var left = e.pageX;
        var top = e.pageY;
        setPosition(top, left);
        return false;
    }

    //CLICK INSIDE OF A PARENT
    if(e.target.classList.contains('dataparentbox')){
        e.preventDefault();

        //Display correct target
        whoIsNewTarget = e.target;
        highlightTarget(whoIsNewTarget);
        this.showOptions("dataParentBox");

        var left = e.pageX;
        var top = e.pageY;
        setPosition(top, left);
        return false;
    }

    //CLICK INSIDE OF A DUPLICATED ELEMENT
    if(e.target.classList.contains('duplicatedParent')){
        e.preventDefault();

        //Display correct target
        whoIsNewTarget = e.target;
        highlightTarget(whoIsNewTarget);
        this.showOptions("duplicatedParent");

        var left = e.pageX;
        var top = e.pageY;
        setPosition(top, left);
        return false;
    }

    //CLICK INSIDE OF A HEADING
    if(e.target.classList.contains('itemHeading')){
        e.preventDefault();

        //Display correct target
        whoIsNewTarget = e.target;
        highlightTarget(whoIsNewTarget);
        this.showOptions("itemHeading");

        var left = e.pageX;
        var top = e.pageY;
        setPosition(top, left);
        return false;
    }

    //CLICK INSIDE OF A CHILD
    if(e.target.hasAttribute("data-child-code")){
        e.preventDefault();

        //Display correct target
        whoIsNewTarget = e.target;
        highlightTarget(whoIsNewTarget);
        this.showOptions("dataChildBox");

        var left = e.pageX;
        var top = e.pageY;
        setPosition(top, left);
        return false;
    }

});