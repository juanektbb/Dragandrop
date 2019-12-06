//RAW DATA
var rawData = {
    "R1":{"parentNode":"P1","grandParentNode":"Op2"},
    "R2":{"parentNode":"P1","grandParentNode":"Op2"},
    "R3":{"parentNode":"P1","grandParentNode":"Op2"},
    "R4":{"parentNode":"P2","grandParentNode":"Op2"},
    "R5":{"parentNode":"M2","grandParentNode":"Op2"},
    "R6":{"parentNode":"M3","grandParentNode":null},
    "R7":{"parentNode":null,"grandParentNode":"Op1"},
    "R8":{"parentNode":null,"grandParentNode":"Op1"},
    "R9":{"parentNode":"M4","grandParentNode":"Op1"}
};





/******************************************************
    TRANSFORM JSON GIVEN INTO ARRAYS DATA STRUCTURE 
******************************************************/
//superStructure[grandParent][parent] = [child, child, child]
var superStructure = [];
var nullChildren = [];

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
        }

    }

    //Append this child into his family tree
    superStructure[rawData[key].grandParentNode][rawData[key].parentNode].push(key);
}


/*************************************************************************************/

/************************************************
    CONSTRUCT NODES USING THE SUPER STRUCTURE
************************************************/
for(keyGrandParent in superStructure){

    //Create new grandparent
    var newGrandParent = returnNewNode("grandParentSupport");

    //Go through each parent for this grandparent                                                                                                                                                        
    for(keyParent in superStructure[keyGrandParent]){

        //Create a parent container and its manager box
        var newParent = returnNewNode("parentSupport");
        var newManager = returnNewNode("managerSupport")

        newManager.setAttribute("data-child-box", keyParent);
        newManager.setAttribute("data-child-header", keyParent);
        newParent.append(newManager);

        //Go through each child for this parent
        for(keyChild in superStructure[keyGrandParent][keyParent]){

            //Create a child container and place its data in it
            var newChild = returnNewNode("childSupport");
            var childData = superStructure[keyGrandParent][keyParent][keyChild];

            newChild.setAttribute("data-child-box", childData);
            newChild.setAttribute("data-child-code", childData);
            newParent.append(newChild);

        }

        //Append this parent to its grandparent (in the class container)
        newGrandParent.querySelectorAll('.patches-container')[0].append(newParent);
    }

    //Store this grandparent in the main container
    document.getElementById("all-hierarchy").append(newGrandParent);
}


/***************************************************
    APPEND NULL CHILDREN INTO THE SIDE CONTAINER
***************************************************/
var sideContainer = document.getElementById("side-container");
for(nullChild in nullChildren){;

    //Create a child container and place its data in it
    var newChild = returnNewNode("childSupport");

    newChild.setAttribute("data-child-box", nullChildren[nullChild]);
    newChild.setAttribute("data-child-code", nullChildren[nullChild]);
    sideContainer.querySelectorAll('.dataparentbox')[0].append(newChild);

}



//Return a node clone of the given example requested
function returnNewNode(id){
    var supportiveNode = document.getElementById(id);
    var newNode = supportiveNode.cloneNode(true);
    newNode.removeAttribute('id');
    return newNode;
}