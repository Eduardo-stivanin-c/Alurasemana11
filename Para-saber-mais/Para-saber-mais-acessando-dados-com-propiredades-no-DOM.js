/*const paragraph = document.querySelector('p');
const parentElement = paragraph.parentNode;

console.log(parentElement.id); // Saída: "container"
*/

/*
const container = document.getElementById('container');
const childNodes = container.childNodes;

console.log(childNodes.length); // Saída: 1 (o nó de texto "\n  " é considerado um nó filho)
console.log(childNodes[0].nodeName); // Saída: "#text"
console.log(childNodes[1].nodeName); // Saída: "P"
*/

const item3 = document.querySelector('li:last-child');
const item2 = item3.previousElementSibling;

console.log(item2.textContent); // Saída: "Item 2"
