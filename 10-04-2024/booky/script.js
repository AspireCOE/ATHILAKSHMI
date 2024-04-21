//selecting popup box ,popup overlay, button
var popupoverlay=document.querySelector(".popup-overlay");
var popupbox=document.querySelector(".popup-box");
var addpopupbutton=document.getElementById("add-popup-button");

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block";
    popupbox.style.display="block";
})
var cancelpopup=document.getElementById("cancel-popup");
cancelpopup.addEventListener("click",function(event){
    event.preventDefault();
    popupbox.style.display="none";
    popupoverlay.style.display="none";
})
var booktitleinput=document.getElementById("book-title-input");
var container=document.querySelector(".container");
var bookauthorinput=document.getElementById("book-author-input");
var bookdescriptioninput=document.getElementById("book-description-input");
var addbook=document.getElementById("add-book");
addbook.addEventListener("click",function(event){
    event.preventDefault();
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitleinput.value}</h2S>
    <h5>${bookauthorinput.value}</h5>
                <p>${bookdescriptioninput.value} </p>
                <button>Delete</button>`
    container.append(div);
    popupbox.style.display="none";
    popupoverlay.style.display="none";

 })
 function deletebook(event){
    event.target.parentElement.remove();
 }