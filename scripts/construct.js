
/*******************************************
    PRE PROCESS DATA BEFORE CONSTRUCTION
*******************************************/
//CREATE SELECT DROP DOWN MENU
var dropbox = document.getElementsByClassName("chooseGrandParent")[0];
for(key in allGrandParents){

    var newOption = document.createElement('option');
    newOption.setAttribute('value', key);
    newOption.setAttribute('class', "gpn-" + key);
    var innerOption = document.createTextNode(allGrandParents[key]);

    newOption.append(innerOption);
    dropbox.append(newOption);

}


/******************************************************
    TRANSFORM JSON GIVEN INTO ARRAYS DATA STRUCTURE 
******************************************************/
//superStructure[grandParent][parent] = [child, child, child]
var superStructure = [];
var nullChildren = [];
var unusedParent = Object.assign({}, allParents);

//GO THROUGH THE RAW JSON DATA TO CONSTRUCT DATA STRUCTURE
for(key in rawData){
    
    //If the grandParentNode doesn't exist in the superStructure as a key
    if(!(rawData[key].grandParentNode in superStructure)){

        //If the grandparent is null, store the child in another array
        if(rawData[key].grandParentNode == null){
            nullChildren.push(key);
            continue;

        //Else create a key for grandParent in superStructure
        }else{
            superStructure[rawData[key].grandParentNode] = [];
        }
        
    }

    //If the parentNode doesn't exist in the superStructure as a key
    if(!(rawData[key].parentNode in superStructure[rawData[key].grandParentNode])){

        //If the parent is null, store the child in another array
        if(rawData[key].parentNode == null){
            nullChildren.push(key);
            continue;

        //Else create a key for parent in superStructure[grandparent]
        }else{
            superStructure[rawData[key].grandParentNode][rawData[key].parentNode] = [];

            //Remove this parent from the used ones JSON
            if(rawData[key].parentNode in unusedParent){
               delete unusedParent[rawData[key].parentNode];
            }
        }

    }

    //Append this child into his family tree
    superStructure[rawData[key].grandParentNode][rawData[key].parentNode].push(key);
}


/************************************************
    CONSTRUCT NODES USING THE SUPER STRUCTURE
************************************************/
for(keyGrandParent in superStructure){

    //Create new grandparent
    var newGrandParent = returnNewNode("grandParentSupport");

    //Mark this grandparent has selected in the dropbox
    var thisDropbox = newGrandParent.querySelectorAll('.chooseGrandParent .gpn-' + keyGrandParent)[0];
    thisDropbox.setAttribute("selected", "selected");

    //Go through each parent for this grandparent                                                                                                                                                        
    for(keyParent in superStructure[keyGrandParent]){

        //Create a parent container and its manager box
        var newParent = returnNewNode("parentSupport");
        var newManager = returnNewNode("managerSupport")

        newManager.setAttribute("data-child-box", allParents[keyParent]);
        newManager.setAttribute("data-child-header", keyParent);
        newParent.append(newManager);

        //Go through each child for this parent
        for(keyChild in superStructure[keyGrandParent][keyParent]){

            //Create a child container and place its data in it
            var newChild = returnNewNode("childSupport");
            var childData = superStructure[keyGrandParent][keyParent][keyChild];

            newChild.setAttribute("data-child-box", allChildren[childData]);
            newChild.setAttribute("data-child-code", childData);
            newParent.append(newChild);

        }

        //Append this parent to its grandparent (in the class container)
        newGrandParent.querySelectorAll('.patches-container')[0].append(newParent);
    }

    //Store this grandparent in the main container
    document.getElementById("all-hierarchy").append(newGrandParent);
}

/***** APPEND NULL CHILDREN INTO THE SIDE CONTAINER *****/
var sideContainer = document.getElementById("side-container");
for(nullChild in nullChildren){

    //Create a child container and place its data in it
    var newChild = returnNewNode("childSupport");

    newChild.setAttribute("data-child-box", allChildren[nullChildren[nullChild]]);
    newChild.setAttribute("data-child-code", nullChildren[nullChild]);
    sideContainer.querySelectorAll('.dataparentbox')[0].append(newChild);

}

/***** APPEND UNUSED PARENTS INTO THE SIDE CONTAINER *****/
for(thisParent in unusedParent){

    //Create a manager container and place its data in it
    var newManager = returnNewNode("managerSupport");

    newManager.setAttribute("data-child-box", unusedParent[thisParent]);
    newManager.setAttribute("data-child-header", thisParent);
    sideContainer.querySelectorAll('.dataparentbox')[0].append(newManager);

}



//RETURN NEW NODE FROM THE TEMPLATES IN HTML
function returnNewNode(id){
    var supportiveNode = document.getElementById(id);
    var newNode = supportiveNode.cloneNode(true);
    newNode.removeAttribute('id');
    return newNode;
}