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
    "10001":{"parentNode":"53","grandParentNode":"43"},
    "10002":{"parentNode":"53","grandParentNode":"43"},
    "10003":{"parentNode":"53","grandParentNode":"43"},
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







//PRE PROCESS DATA
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


/***************************************************
    APPEND NULL CHILDREN INTO THE SIDE CONTAINER
***************************************************/
var sideContainer = document.getElementById("side-container");
for(nullChild in nullChildren){;

    //Create a child container and place its data in it
    var newChild = returnNewNode("childSupport");

    newChild.setAttribute("data-child-box", allChildren[nullChildren[nullChild]]);
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