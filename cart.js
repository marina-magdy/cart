var enterButt= document.getElementById("enter");
var input =document.getElementById("userinput");
var ul=document.querySelector("ul");
var listButton=document.querySelectorAll('.delete-b');

function inputLength(){
return input.value.length;
}

function addListAfterClick(){
if (inputLength()>0){
    createListElement();
}
}
function addListAfterKeyPressed(event){
if(event.keyCode==13){
    addListAfterClick(); 
}
}
function createListElement(){
    var li, inputText, btn;
    li = document.createElement("li");
    inputText= document.createTextNode(input.value);
    btn=document.createElement("button");
    deleteText=document.createTextNode("Delete");

    btn.appendChild(deleteText)
    li.appendChild(inputText)
    li.appendChild(btn)
    ul.appendChild(li)
    input.value="";
    btn.onclick= deleteListItem;

}
enterButt.addEventListener("click",addListAfterClick);
input.addEventListener("keypress",addListAfterKeyPressed);

function deleteListItem(event){
    var listElement = event.target.parentNode;
    event.target.parentNode.parentNode.removeChild(listElement);
    

}Array.from(listButton).forEach(link=>{link.addEventListener('click',deleteListItem)});
