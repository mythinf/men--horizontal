
/*document.getElementById()
document.getElementsByName()
document.getElementsByTagName()
document.getElementsByClassName()
document.querySelector()
document.querySelectorAll()*/

var title= document.getElementById("title");
console.log (title);
console.log(title.firstChild); /*muestra un nodo tipo texto*/

/*var linkList=document.getElementsByTagName("a");
console.log(linkList);
console.log(linkList[0]);/* muestra la primera etiqueta "a"*/
/*console.log(linkList[0].firstChild)*/

var linkList=document.getElementsByTagName("strong");
console.log(linkList);
console.log(linkList[0]);
console.log(linkList[0].firstChild);/*muestra un nodo tipo texto*/

var itemList=document.getElementsByClassName("item");
console.log(itemList);
console.log(itemList[2]);
console.log(itemList[2].firstElementChild);
console.log(itemList[2].firstElementChild.firstChild);
