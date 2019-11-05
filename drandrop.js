var json = {};

var arrayOfChanges = [];


//PASSING OVER CONTAINER TO RECEIVE DROPS
const overDrop = (ev) => {
    ev.preventDefault();

    const thisElement = ev.target;

    //Don't allow drop (for items)
    if(ev.target.classList.contains("itemdraggable")){
        ev.dataTransfer.dropEffect = "none";

    //Allow drop in container
    }else{
        ev.dataTransfer.dropEffect = "all";  
        thisElement.style.background = "orange";
    }

}


//NO PASSING OVER CONTAINER ANYMORE
const leaveDrop = (ev) => {
    ev.preventDefault();

    const thisElement = ev.target;
    thisElement.style.background = "#efefef";
}


//SET 
function dragStart(ev){
  ev.dataTransfer.setData("textaa", ev.target.id);
}



const dragend = (ev) => {

  let thisElement = ev.target;
  let thisElementParent = thisElement.parentNode;

  //Make parent default values
  thisElementParent.style.background = "#efefef";
  this.highlightTarget(thisElement);


}


//SCRIPT happens an element receives a 'DROP'
function drop(ev){
    ev.preventDefault();

    //This element
    var data = ev.dataTransfer.getData("textaa");
    var dragged = document.getElementById(data);


    ev.target.appendChild(dragged);



    //PUT DATA IN ARRAY
    arrayOfChanges[data] = {
        areaPatch: dragged.parentNode.id,
        regionalPatch: dragged.parentNode.parentNode.id
    }


    this.sortByAlphabet( dragged.parentNode);
    //console.log(dragged.parentNode.childNodes);
   // dragged.className += " dropped";

    //console.log(arrayOfChanges);

}










/************************
    SUPPORT FUNCTIONS
************************/


function highlightTarget(element){

  setTimeout(() => {
    element.style.outline = "pink 5px solid";
    element.style.transition = "0.4s";
  }, 10)

  setTimeout(() => {
    element.style.outline = "none";
  }, 400)

}



//SORT ELEMENTS OF A PARENT BY ITS INNERTEXT
function sortByAlphabet(parent){

    let rawArray = [];
    let newParent = parent.cloneNode(true);
    let childrenLength = parent.children.length;



while (newParent.firstChild) {
    newParent.firstChild.remove();
}



    //Go through each children of the parent
    for(var i = 0; i < childrenLength; i++){

        //Append this child to the raw array for reference
        rawArray.push({
            id: parent.children[i].id,
            innerText: parent.children[i].innerText
        });

    }

    //Sort the raw array for reference
    rawArray.sort((a, b) => a.innerText.localeCompare(b.innerText));

    //Go through the raw array
    for(var j = 0; j < rawArray.length; j++){
        
        var thisChild = document.getElementById(rawArray[j].id);
        newParent.appendChild(thisChild);

    }


    parent.innerHTML = '';

    while(newParent.firstChild){
        parent.appendChild(newParent.firstChild);

    }








}


