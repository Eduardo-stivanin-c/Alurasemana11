// HTML: <div id="meuElemento" data-info="Exemplo de atributo">

const elemento = document.getElementById('meuElemento');
const valorDoAtributo = elemento.getAttribute('data-info');
console.log(valorDoAtributo); // Saída: "Exemplo de atributo"
