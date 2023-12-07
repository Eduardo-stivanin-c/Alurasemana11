// Operador lógico que retorna com dados salvos, ou string vazia, utilizando localStorage.getItem, modificando o valor de `string` com JSON.parse()
"use strick"
const form = document.getElementById("novoItem") 
const lista = document.getElementById("lista")
const itens = JSON.parse(localStorage.getItem("itens")) || []   

//console.log(existe)
// Uso do forEach para que todos os itens já escritos na lista sejam mantidos ao atualizar a página 
itens.forEach( (elemento) => {    
    criaElemento(elemento)
} )     

// Refatoração do addEventListener para receber as funções extras da função criaElemento
form.addEventListener("submit", (evento) => {   
    evento.preventDefault()            
    const existe=itens.find(elemento =>elemento.nome===nome.value)
    
    console.log(existe)
//se id existe reotna o mesmo id senão reotna o  posiçõa do elentoe
const itemAtual = {
    "nome": nome.value,
    "quantidade": quantidade.value,
    }
//se existe
    if (existe) {
      itemAtual.id=item.id
    }
    else{
      itemAtual.id=item.length
      criaElemento(itemAtual)
      itens.push(itemAtual)
    }


    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    

    criaElemento(itemAtual)

    itens.push(itemAtual)

    localStorage.setItem("itens", JSON.stringify(itens))

    nome.value = ""
    quantidade.value = ""
})

// Refatoração da função `criaElemento` para que possua apenas a função que faça sentido ao nome. 

function criaElemento(item) {  
    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = item.quantidade
    //pode inventar quanarquer atributo até farofa
    numeroItem.dataset.id=item.id

    novoItem.appendChild(numeroItem)




novoItem.innerHTML += item.nome

    lista.appendChild(novoItem)
}