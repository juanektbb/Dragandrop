//RAW DATA






var allGrandParents = {
    "1":"David Pratt",
    "2":"Farid Pokun",
    "3":"Senait Asmerom",
    "4":"Georgina McCann",
    "5":"Steven Verity",
    "6":"Ralph Chapman",
    "7":"Jane Wilson",
    "8":"Neil Lycett",
    "9":"Carla Shan",
    "10":"Ella Malczyk",
    "11":"Martin Giles",
    "12":"Tracey Evans",
    "13":"Carley O Neill",
    "14":"Rashed Mazumder",
    "15":"Priyanka Kholsa",
    "16":"Thulsi Ravichandran",
    "17":"Craig Hodgson",
    "18":"Gerry Flynn",
    "19":"Laura Adams",
    "20":"Linda Marshall",
    "21":"Sohaib Aslam",
    "22":"Rupi Darar",
    "31":"Phillip Davies",
    "32":"Jessica Barden",
    "33":"Steve Nash",
    "34":"Mike Cody",
    "35":"Aidan Tjinakiet",
    "36":"Tommy McGee",
    "37":"Dorota Kawczynska",
    "38":"Louise Hagland",
    "39":"Sue Wallis",
    "40":"Sarah Jamieson",
    "41":"Gary Ford",
    "42":"Darren Moore",
    "43":"Ian Penny",
    "44":"Andy Thomas",
    "45":"Sajjad Ahmed",
    "46":"Dan Standish",
    "47":"Andy Stokes",
    "48":"Adiyam",
    "49":"Ralph Chapman",
    "50":"Saman Darar",
    "51":"Hannah",
    "52":"Chris Hayward",
    "53":"Liz Carlton",
    "54":"Roshni Durgai",
    "55":"Peter Denison",
    "56":"Shevourne Hall",
    "57":"Annmarie Sayers",
    "58":"Amit Chander",
    "59":"Abid Hussain",
    "60":"Darren Walsh",
    "61":"Girish Ayyanna",
    "100":"Closed"
}

var allParents = {
    "1":"David Pratt",
    "2":"Farid Pokun",
    "3":"Senait Asmerom",
    "4":"Georgina McCann",
    "5":"Steven Verity",
    "6":"Ralph Chapman",
    "7":"Jane Wilson",
    "8":"Neil Lycett",
    "9":"Carla Shan",
    "10":"Ella Malczyk",
    "11":"Martin Giles",
    "12":"Tracey Evans",
    "13":"Carley O Neill",
    "14":"Rashed Mazumder",
    "15":"Priyanka Kholsa",
    "16":"Thulsi Ravichandran",
    "17":"Craig Hodgson",
    "18":"Gerry Flynn",
    "19":"Laura Adams",
    "20":"Linda Marshall",
    "21":"Sohaib Aslam",
    "22":"Rupi Darar",
    "31":"Phillip Davies",
    "32":"Jessica Barden",
    "33":"Steve Nash",
    "34":"Mike Cody",
    "35":"Aidan Tjinakiet",
    "36":"Tommy McGee",
    "37":"Dorota Kawczynska",
    "38":"Louise Hagland",
    "39":"Sue Wallis",
    "40":"Sarah Jamieson",
    "41":"Gary Ford",
    "42":"Darren Moore",
    "43":"Ian Penny",
    "44":"Andy Thomas",
    "45":"Sajjad Ahmed",
    "46":"Dan Standish",
    "47":"Andy Stokes",
    "48":"Adiyam",
    "49":"Ralph Chapman",
    "50":"Saman Darar",
    "51":"Hannah",
    "52":"Chris Hayward",
    "53":"Liz Carlton",
    "54":"Roshni Durgai",
    "55":"Peter Denison",
    "56":"Shevourne Hall",
    "57":"Annmarie Sayers",
    "58":"Amit Chander",
    "59":"Abid Hussain",
    "60":"Darren Walsh",
    "61":"Girish Ayyanna",
    "100":"Closed"
}

var allChildren = {
    "6366":"Stevenage",
    "6663":"Manchester Piccadilly",
    "6664":"Leeds",
    "6673":"Gateshead",
    "6750":"Newcastle",
    "6761":"Gloucester Road",
    "6822":"Hemel Hempstead",
    "7363":"Thorpe Park 1",
    "7393":"Liverpool Lord St",
    "7640":"Liverpool Ranelagh",
    "7642":"Enfield",
    "7646":"Chester",
    "7712":"Uxbridge",
    "7761":"Darlington",
    "7905":"Perry Barr",
    "8021":"Coventry",
    "8330":"Liverpool EPR",
    "8372":"Blackburn",
    "8373":"Manchester Fallowfields",
    "8781":"Bolton",
    "8782":"Park Royal",
    "8802":"York",
    "8903":"Derby",
    "8950":"Letchworth",
    "8951":"Thorpe Park 2",
    "10001":"SS Leeds Merrion",
    "10002":"SS Farnborough",
    "10003":"SS Harlow Town Centre",
    "10744":"Feltham",
    "11539":"Bexleyheath",
    "11662":"Wigan",
    "12319":"Winwick Quay",
    "12645":"Liverpool Queen Sq",
    "12738":"Cheshire Oaks",
    "12808":"Lowry Centre",
    "13050":"Grimsby",
    "13124":"Harlow Town Centre",
    "13157":"Peterborough",
    "13267":"Sheffield",
    "13443":"St Helens",
    "13515":"Rotherham",
    "13670":"Wood Green",
    "13808":"Harrow St Annes",
    "13831":"Stockton",
    "14005":"Preston",
    "14133":"Yeading",
    "14489":"Wakefield",
    "14780":"Kingsway",
    "17506":"Hanley",
    "17548":"Clacton",
    "17671":"Hull St Stephens",
    "18278":"Trafford Centre",
    "18660":"Burton-on-Trent",
    "18932":"Leicester",
    "19008":"Macclesfield",
    "19009":"Bury",
    "19010":"Talke Point",
    "19011":"Peterborough Queensgate",
    "19085":"Twickenham",
    "19559":"Great Yarmouth",
    "19645":"Skegness",
    "19744":"Bury St Edmunds",
    "19975":"Hull Prospect",
    "20037":"Doncaster Frenchgate",
    "20038":"Wakefield Trinity",
    "20050":"Leicester Haymarket",
    "20354":"Llanelli",
    "20368":"Carmarthen",
    "20857":"Bangor",
    "20952":"Banbury",
    "21181":"Redditch",
    "21215":"Runcorn",
    "21335":"Blackpool",
    "21336":"Bridlington",
    "21517":"Shrewsbury",
    "21703":"Huddersfield Packhorse",
    "21780":"North Shields",
    "21922":"Bradford",
    "22004":"Nottingham",
    "22178":"Lincoln BK",
    "22275":"Port Talbot",
    "22276":"Sheffield Parkway",
    "22279":"Nottingham CB",
    "22281":"Dudley",
    "22315":"South Shields",
    "22339":"Bootle",
    "22340":"Gillingham",
    "22341":"Hinckley",
    "22614":"Wolverhampton",
    "22925":"Morecambe",
    "22928":"West Brom",
    "23217":"Wallsend",
    "23218":"Sandiacre",
    "23545":"Preston St George",
    "23553":"Blackburn The Mall",
    "23778":"Hounslow Treaty Centre",
    "23936":"Leeds Merrion",
    "29001":"Hounslow Telepizza",
    "40001":"RC Blackpool",
    "40002":"RC Hull Prospect",
    "50001":"ROO Blackpool",
    "50002":"ROO Hull Prospect",
    "50004":"ROO West Brom",
    "50005":"ROO Wolverhampton",
    "60001":"ETL Blackburn",
    "60002":"ETL Blackpool",
    "60003":"ETL Huddersfield",
    "60004":"ETL Hull St Stephens",
    "60005":"ETL Hull Prospect",
    "60007":"ETL Redditch",
    "60008":"ETL West Brom",
    "60009":"ETL Wolverhampton",
    "80003":"Lincoln CI",
    "9999998":"Crust",
    "25424":"Walsall",
    "25563":"Huddersfield Leeds Road",
    "10004":"SS Thorpe Park",
    "90001":"DD Hull Prospect",
    "50006":"ROO Huddersfield Packhorse",
    "70001":"Clacton Just Spuds",
    "40004":"RC West Brom",
    "60010":"ETL Leeds Merrion",
    "60011":"ETL Farnborough"
}

var rawData = {
    "6366":{"parentNode":"61","grandParentNode":"52"},
    "6663":{"parentNode":"13","grandParentNode":"50"},
    "6664":{"parentNode":"46","grandParentNode":"34"},
    "6673":{"parentNode":"40","grandParentNode":"34"},
    "6750":{"parentNode":"40","grandParentNode":"34"},
    "6761":{"parentNode":"3","grandParentNode":"52"},
    "6822":{"parentNode":"61","grandParentNode":"52"},
    "7363":{"parentNode":"3","grandParentNode":"52"},
    "7393":{"parentNode":"60","grandParentNode":"50"},
    "7640":{"parentNode":"60","grandParentNode":"50"},
    "7642":{"parentNode":"19","grandParentNode":"50"},
    "7646":{"parentNode":"100","grandParentNode":"100"},
    "7712":{"parentNode":"61","grandParentNode":"52"},
    "7761":{"parentNode":"40","grandParentNode":"34"},
    "7905":{"parentNode":"59","grandParentNode":"52"},
    "8021":{"parentNode":"100","grandParentNode":"100"},
    "8330":{"parentNode":"60","grandParentNode":"50"},
    "8372":{"parentNode":"17","grandParentNode":"34"},
    "8373":{"parentNode":"60","grandParentNode":"50"},
    "8781":{"parentNode":"13","grandParentNode":"50"},
    "8782":{"parentNode":"3","grandParentNode":"52"},
    "8802":{"parentNode":"34","grandParentNode":"34"},
    "8903":{"parentNode":"55","grandParentNode":"52"},
    "8950":{"parentNode":"61","grandParentNode":"52"},
    "8951":{"parentNode":"3","grandParentNode":"52"},
    "10001":{"parentNode":"17","grandParentNode":"43"},
    "10002":{"parentNode":"17","grandParentNode":"43"},
    "10003":{"parentNode":"17","grandParentNode":"43"},
    "10744":{"parentNode":"3","grandParentNode":"52"},
    "11539":{"parentNode":"19","grandParentNode":"50"},
    "11662":{"parentNode":"17","grandParentNode":"34"},
    "12319":{"parentNode":"13","grandParentNode":"50"},
    "12645":{"parentNode":"60","grandParentNode":"50"},
    "12738":{"parentNode":"60","grandParentNode":"50"},
    "12808":{"parentNode":"13","grandParentNode":"50"},
    "13050":{"parentNode":"34","grandParentNode":"34"},
    "13124":{"parentNode":"19","grandParentNode":"50"},
    "13157":{"parentNode":"55","grandParentNode":"52"},
    "13267":{"parentNode":"20","grandParentNode":"50"},
    "13443":{"parentNode":"17","grandParentNode":"34"},
    "13515":{"parentNode":"20","grandParentNode":"50"},
    "13670":{"parentNode":"19","grandParentNode":"50"},
    "13808":{"parentNode":"61","grandParentNode":"52"},
    "13831":{"parentNode":"40","grandParentNode":"34"},
    "14005":{"parentNode":"17","grandParentNode":"34"},
    "14133":{"parentNode":"3","grandParentNode":"52"},
    "14489":{"parentNode":"46","grandParentNode":"34"},
    "14780":{"parentNode":"3","grandParentNode":"52"},
    "17506":{"parentNode":"20","grandParentNode":"50"},
    "17548":{"parentNode":"19","grandParentNode":"50"},
    "17671":{"parentNode":"34","grandParentNode":"34"},
    "18278":{"parentNode":"13","grandParentNode":"50"},
    "18660":{"parentNode":"55","grandParentNode":"52"},
    "18932":{"parentNode":"55","grandParentNode":"52"},
    "19008":{"parentNode":"13","grandParentNode":"50"},
    "19009":{"parentNode":"13","grandParentNode":"50"},
    "19010":{"parentNode":"20","grandParentNode":"50"},
    "19011":{"parentNode":"55","grandParentNode":"52"},
    "19085":{"parentNode":"3","grandParentNode":"52"},
    "19559":{"parentNode":"19","grandParentNode":"50"},
    "19645":{"parentNode":"34","grandParentNode":"34"},
    "19744":{"parentNode":"19","grandParentNode":"50"},
    "19975":{"parentNode":"34","grandParentNode":"34"},
    "20037":{"parentNode":"46","grandParentNode":"34"},
    "20038":{"parentNode":"46","grandParentNode":"34"},
    "20050":{"parentNode":"55","grandParentNode":"52"},
    "20354":{"parentNode":"61","grandParentNode":"52"},
    "20368":{"parentNode":"61","grandParentNode":"52"},
    "20857":{"parentNode":"60","grandParentNode":"50"},
    "20952":{"parentNode":"55","grandParentNode":"52"},
    "21181":{"parentNode":"59","grandParentNode":"52"},
    "21215":{"parentNode":"13","grandParentNode":"50"},
    "21335":{"parentNode":"17","grandParentNode":"34"},
    "21336":{"parentNode":"34","grandParentNode":"34"},
    "21517":{"parentNode":"100","grandParentNode":"100"},
    "21703":{"parentNode":"46","grandParentNode":"34"},
    "21780":{"parentNode":"40","grandParentNode":"34"},
    "21922":{"parentNode":"46","grandParentNode":"34"},
    "22004":{"parentNode":"20","grandParentNode":"50"},
    "22178":{"parentNode":"34","grandParentNode":"34"},
    "22275":{"parentNode":"61","grandParentNode":"52"},
    "22276":{"parentNode":"20","grandParentNode":"50"},
    "22279":{"parentNode":"20","grandParentNode":"50"},
    "22281":{"parentNode":"59","grandParentNode":"52"},
    "22315":{"parentNode":"40","grandParentNode":"34"},
    "22339":{"parentNode":"60","grandParentNode":"50"},
    "22340":{"parentNode":"19","grandParentNode":"50"},
    "22341":{"parentNode":"55","grandParentNode":"52"},
    "22614":{"parentNode":"59","grandParentNode":"52"},
    "22925":{"parentNode":"17","grandParentNode":"34"},
    "22928":{"parentNode":"59","grandParentNode":"52"},
    "23217":{"parentNode":"40","grandParentNode":"34"},
    "23218":{"parentNode":"20","grandParentNode":"50"},
    "23545":{"parentNode":"17","grandParentNode":"34"},
    "23553":{"parentNode":"17","grandParentNode":"34"},
    "23778":{"parentNode":"3","grandParentNode":"52"},
    "23936":{"parentNode":"46","grandParentNode":"34"},
    "29001":{"parentNode":"50","grandParentNode":"50"},
    "40001":{"parentNode":"53","grandParentNode":"43"},
    "40002":{"parentNode":"100","grandParentNode":"100"},
    "50001":{"parentNode":"53","grandParentNode":"43"},
    "50002":{"parentNode":"53","grandParentNode":"43"},
    "50004":{"parentNode":"53","grandParentNode":"43"},
    "50005":{"parentNode":"53","grandParentNode":"43"},
    "60001":{"parentNode":"53","grandParentNode":"43"},
    "60002":{"parentNode":"100","grandParentNode":"100"},
    "60003":{"parentNode":"100","grandParentNode":"100"},
    "60004":{"parentNode":"53","grandParentNode":"43"},
    "60005":{"parentNode":"53","grandParentNode":"43"},
    "60007":{"parentNode":"100","grandParentNode":"100"},
    "60008":{"parentNode":"100","grandParentNode":"100"},
    "60009":{"parentNode":"100","grandParentNode":"100"},
    "80003":{"parentNode":"53","grandParentNode":"43"},
    "9999998":{"parentNode":"3","grandParentNode":"52"},
    "25424":{"parentNode":"59","grandParentNode":"52"},
    "25563":{"parentNode":"46","grandParentNode":"34"},
    "10004":{"parentNode":"100","grandParentNode":"100"},
    "90001":{"parentNode":"100","grandParentNode":"100"},
    "50006":{"parentNode":"53","grandParentNode":"43"},
    "70001":{"parentNode":"100","grandParentNode":"100"},
    "40004":{"parentNode":"100","grandParentNode":"100"},
    "60010":{"parentNode":"100","grandParentNode":"100"},
    "60011":{"parentNode":"100","grandParentNode":"100"}
};








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
        var responseToUser = document.getElementById("responseToUser");
        responseToUser.innerText = "You can't remove this grandparent if still has data in it";
        responseToUser.style.display = 'block';
        
    //Delete grandparent if was empty
    }else{
        whoIsNewTarget.parentNode.remove();
    }
});

//BUTTON AND FUNCTIONALY FOR DELETING PARENT
var buttonDeleteParent = document.getElementById("deleteParent");
buttonDeleteParent.addEventListener("click", function(e){

    //If this parent was not empty
    if(whoIsNewTarget.children.length > 0){
        var responseToUser = document.getElementById("responseToUser");
        responseToUser.innerText = "You can't remove this parent if still has data in it";
        responseToUser.style.display = 'block';
        
    //Delete grandparent if was empty
    }else{
        whoIsNewTarget.remove();
    }

});

//BUTTON AND FUNCTIONALY FOR DUPLICATING A HEADING
var buttonDuplicateHeading = document.getElementById("duplicateHeading");
buttonDuplicateHeading.addEventListener("click", function(e){
    
    var whereToAppend = document.querySelector("#side-container .dataparentbox");
    var newNodeHeading = whoIsNewTarget.cloneNode(true);
    whereToAppend.append(newNodeHeading);

});


/**************************************
    VITAL MENU SUPPORTIVE FUNCTIONS
**************************************/
var menu = document.querySelector(".menu");
let menuVisible = false;

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
    }
}

//MAIN FUNCTION TO DETECT RIGHT CLICK
var supercontiner = document.getElementsByClassName("supercontiner")[0];
supercontiner.addEventListener("contextmenu", e => {

    //Avoid side container to be removed
    if(e.target.getAttribute("id") == "side-container" || e.target.parentNode.getAttribute("id") == "side-container"){
        return false;
    }

    //CLICK INSIDE OF THE BIG HIERARCHY
    if(e.target.getAttribute('id') == "all-hierarchy"){
        e.preventDefault();

        //Display correct target
        whoIsNewTarget = e.target;
        this.showOptions("allHierarchy");

        var left = e.pageX;
        var top = e.pageY;
        setPosition(top, left);
        return false;
    }

    //CLICK INSIDE OF A GRANDPARENT
    if(e.target.classList.contains('patches-container') || e.target.classList.contains('sub-hierarchy')){
        e.preventDefault();

        //Find the correct target
        var getPatchesContainer = e.target;
        if(e.target.classList.contains('sub-hierarchy')){
            getPatchesContainer = e.target.querySelector(".patches-container");
        }

        //Display correct target
        whoIsNewTarget = getPatchesContainer;
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
        this.showOptions("dataParentBox");

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
        this.showOptions("itemHeading");

        var left = e.pageX;
        var top = e.pageY;
        setPosition(top, left);
        return false;
    }

});






















// Get the modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("saveStructure");
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



function handledata(json_data){

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "jsontodb.php", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(json_data);

    console.log(xhr.status);

    // location.reload();
}