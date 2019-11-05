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
  ev.dataTransfer.setData("text", ev.target.id);
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
    var data = ev.dataTransfer.getData("text");
    var dragged = document.getElementById(data);


    ev.target.appendChild(dragged);



    //PUT DATA IN ARRAY
    arrayOfChanges[data] = {
        areaPatch: dragged.parentNode.id,
        regionalPatch: dragged.parentNode.parentNode.id
    }




    // if(!arrayOfChanges.includes(data)){
    //     arrayOfChanges.push(data);
    // }

    //console.log(arrayOfChanges["aaa"]);


    dragged.className += " dropped";

    console.log(arrayOfChanges);

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



