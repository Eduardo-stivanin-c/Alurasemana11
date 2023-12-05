const element = document.getElementById('meuElemento');
element.classList.add('minhaClasse');



const element = document.getElementById('meuElemento');
element.classList.remove('minhaClasse');



const element = document.getElementById('meuElemento');
if (element.classList.contains('minhaClasse')) {
  // A classe 'minhaClasse' está presente no elemento
  // Faça algo aqui...
}

const element = document.getElementById('meuElemento');
element.classList.remove('classeAntiga');
element.classList.add('classeNova');


const element = document.getElementById('meuElemento');
element.classList.add('classe1', 'classe2', 'classe3');
element.classList.remove('classe2', 'classe3');
