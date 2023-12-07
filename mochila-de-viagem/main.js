const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")
const itens = JSON.parse(localStorage.getItem("itens")) || []

itens.forEach( (elemento) => {
    criaElemento(elemento)
} )

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    const existe = itens.find( elemento => elemento.nome === nome.value )

    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    if (existe) {
        itemAtual.id = existe.id
        
        atualizaElemento(itemAtual)

        itens(itens.findIndex(elemento => elemento.id===existe.id)) = itemAtual
    } else {
                        //se id atual < -1  

        itemAtual.id =itens[itens.length-1]?(itens[itens.length-1]).id +1:0

        criaElemento(itemAtual)

        itens.push(itemAtual)
    }

    localStorage.setItem("itens", JSON.stringify(itens))

    nome.value = ""
    quantidade.value = ""
})

function criaElemento(item) {
    const novoItem = document.createElement("li")
    novoItem.classList.add("item")

    const numeroItem = document.createElement("strong")
    numeroItem.innerHTML = item.quantidade
    numeroItem.dataset.id = item.id
    novoItem.appendChild(numeroItem)
    
    novoItem.innerHTML += item.nome
novoItem.appendChild(botaoDeleta())
    lista.appendChild(novoItem)
}

function atualizaElemento(item) {
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade
}

//criar função botão 

function botaoDeleta(id){
    const elementoBotao=document.createElement("button")
    elementoBotao.innerText="X"
    
    elementoBotao.addEventListener("click",function(){
        deleteElemento(this.parentNode,id)
    })
    return elementoBotao
    }

    function deleteElemento(tag,id) {
        tag.remove()   
        //remover um item do array(matriz)
                    //"O q\ queremos remover                   "     
        itens.splice(itens.findIndex(elemento=>elemento.id===id),1)
         
         console.log(itens)
        //escrever no LocalStorage
        localStorage.setItem("itens", JSON.stringify(itens))
   
    }
       