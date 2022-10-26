function viewAlert( element ){
  alert(element.innerText);
  element.innerHTML = "123";
}

function viewOnMouseOverEvent(usernameLable){
  //alert("On Mouse Over")
  usernameLable.style.backgroundColor = "red";
  usernameLable.style.color= "white";
  var codeisfun = document.querySelector("#codeisfun");
  codeisfun.style.color = "Green" ; 
  codeisfun.innerHTML= "Hi"; 
  var newelement = document.getElementById("#codeisfun");
  //newelement.style.textDecoration = "line-through";
  newelement.style.width = "200px";

  codeisfun.remove();
  
}

function viewOnMouseOutEvent(usernameLable){
  //alert("On Mouse Out")
  usernameLable.style.backgroundColor = "White";
  usernameLable.style.color= "red";
}


function chooseLunch(element){
  alert(element.value);
}


//function message() {
//  console.log("Delayed message");    
//  alert("Delayed message");
//}

//setTimeout(message, 3000);