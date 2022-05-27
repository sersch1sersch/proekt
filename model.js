'use strict'
var ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php";
  var updatePassword;
  var stringName='MARGAEV_RACING_RECORDS';

  let getNamePlayer= document.querySelector(".getNamePlayer")
  getNamePlayer.addEventListener("click",kk)
function kk(){
    storeInfo()

}

  function storeInfo() {
    updatePassword=Math.random();
    $.ajax( {
      url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
        data : { f : 'LOCKGET', n : stringName, p : updatePassword },
        success : lockGetReady, error : errorHandler
      }
    );
  }
  
  let inputName=document.querySelector(".inputName")
 
  function lockGetReady(callresult) {
    if ( callresult.error!=undefined )
      alert(callresult.error); 
    else {
    let result =(JSON.parse(callresult.result))
      result.unshift({name:inputName.value, record: point.value});
console.log(result)
      $.ajax( {
        url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
        data : { f : 'UPDATE', n : stringName, v : JSON.stringify(result), p : updatePassword },
        success : updateReady, error : errorHandler
        }
      );
    }
  }
  function updateReady(callresult) {
    if ( callresult.error!=undefined )
      console.log(callresult.error); 
  }
  function errorHandler(jqXHR,statusStr,errorStr) {
    alert(statusStr+' '+errorStr);
  }