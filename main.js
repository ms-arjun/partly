function openPopup(){
  document.getElementById("popupBox").style.display="block";
}
  
function popupClose(){
  document.getElementById("popupBox").style.display="none";
}

function searchopenPopup(){
 var srchOpen = document.getElementById("openSearchBox");
 if(srchOpen.style.display === "none"){
 srchOpen.style.display = "block";
 }
else{
  srchOpen.style.display = "none";
}
}

function cart(){
  document.location="cart.html";
}

function shopNow(){
  document.location="index.html";
}

function buynow(){
  document.location="buy-now.html";
}

function cnfrm(){
  document.location="cnfrm.html";
}

function contShop(){
  document.location="index.html";
}