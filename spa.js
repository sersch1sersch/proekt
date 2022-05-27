let pravila= document.getElementById("pravila")
let games= document.getElementById("games")
let home= document.getElementById("home")
let rekords= document.getElementById("rekords")
let pravila1= document.getElementById("pravilaId")
let games1= document.getElementById("gamesId")
let home1= document.getElementById("homeId")
let rekords1= document.getElementById("rekordsId")
window.onhashchange=switchToStateFromURLHash;

var SPAState={}; 
function switchToStateFromURLHash() {
  var URLHash=window.location.hash;
  var stateJSON=decodeURIComponent(URLHash.substr(1));
  if ( stateJSON!="" )
  SPAState=JSON.parse(stateJSON);
else
  SPAState={pagename:'Main'};
  var pageHTML="";
  switch ( SPAState.pagename ) {
    case 'Main':
home1.style.display="block"
games1.style.display = 'none';
pravila1.style.display = 'none';
rekords1.style.display = 'none';
break;
case 'Game':
  home1.style.display="none"
  games1.style.display = 'block';
  pravila1.style.display = 'none';
  rekords1.style.display = 'none';
      break;
      case 'Rules':
        home1.style.display="none"
        games1.style.display = 'none';
        pravila1.style.display = 'block';
        rekords1.style.display = 'none';
        break;
        case 'Scores':
        home1.style.display="none"
        games1.style.display = 'none';
        pravila1.style.display = 'none';
        rekords1.style.display = 'block';
        restoreInfo()
        break;
  }
}
function switchToState(newState) {
  location.hash=encodeURIComponent(JSON.stringify(newState));
}
home.onclick = function(EO) {
  switchToState( { pagename:'Main' } );
  EO.preventDefault();
}

games.onclick = function(EO) {
  switchToState( { pagename:'Game' } );
  EO.preventDefault();
}

pravila.onclick = function(EO) {
  switchToState( { pagename:'Rules' } );
  EO.preventDefault();
}
rekords.onclick = function(EO) {
  switchToState( { pagename:'Scores' } );
  EO.preventDefault();
}
switchToStateFromURLHash();

var ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php"; 
var stringName='MARGAEV_RACING_RECORDS'; 
  
function restoreInfo() { 
  $.ajax(
    { 
    url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json', 
    data : { f : 'READ', n : stringName }, 
    success : readReady, error : errorHandler 
  } 
  ); 
  
} 
function readReady(callresult) { 
  if ( callresult.error!=undefined ) 
    console.log(callresult.error); 
  else if ( callresult.result!="" ) { 
    var result=JSON.parse(callresult.result); 
    createRecordTable(rekords1,result); 
  } 
} 
function compareScore(a,b) { 
  return b.record-a.record; 
} 
function createRecordTable(field,data){
  var pageHTML = ''; 

  data.sort(compareScore); 
  pageHTML += '<p class ="rec"> Рекорды игры </p>';
  pageHTML += "<br>"
  
  for(var i = 0; i < data.length; i++){ 
    if(i > 9){ 
      break; 
    } 
   pageHTML +=  (i+1) + '. ' + ' ' + data[i].name + ' - ' + ' ' + data[i].record +" "+'очков'; 
   pageHTML+="<br>"
  } 
 
  
  field.innerHTML = pageHTML; 
} 
function errorHandler(jqXHR,statusStr,errorStr) { 
  alert(statusStr+' '+errorStr); 
}
