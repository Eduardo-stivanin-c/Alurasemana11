//o uise strick n~;a~ofaz poarte desta aula mas pouvpoa meses nesssa linha esxtra porque da erro e poupa tempo caçando bug
"use strick";

const html =document.querySelector('html');
const focoBt=document.querySelector('.app__card-button--foco');
const curtoBt=document.querySelector('.app__card-button--curto');
const longoBt=document.querySelector('.app__card-button--longo');

const banner=document.querySelector(".app__image");
//pra alterar o titulo
const titulo=document.querySelector(".app__title")

//para alterar botões removendo o ativo deles
const botoes=document.querySelectorAll('.app__card-button')

//trocando de musica
const musicaFocoinput=document.querySelector('#alternar-musica')
//carrega audio que nem a  tag  audi o deo html

//termporizador
 let tempoDecorridoemSegundos=5
const startPauseBt=document.querySelector('#start-pause')
let intervaloId=null


const musica=new  Audio('sons/luna-rise-part-one.mp3')

/*trocar texto de botão pausado/começar*/
//pega otexto daquele botão da Alura
const iniciarOuPausarBt=document.querySelector('#start-pause span')
//fim dessa configuração


//musica em loop
musica.loop=true
//evento no click

    focoBt.addEventListener('click', () => {
        //gambiara de alterar atributo
        alterarContexto('foco')
        focoBt.classList.add('active')
    })
    //gambiara de alterar atributo
    curtoBt.addEventListener('click', () => {

        alterarContexto('descanso-curto')
        curtoBt.classList.add('active')
    })


    longoBt.addEventListener('click', () => {
         alterarContexto('descanso-longo')
         longoBt.classList.add('active')
    })

    function alterarContexto(contexto) {
        botoes.forEach(function(contexto)  {
            contexto.classList.remove('active')

        });
        html.setAttribute('data-contexto', contexto)
banner.setAttribute('src',`./imagens/${contexto}.png`)

//alterando titulo conforme  obotão apertado
switch (contexto) {
    case "foco":
        titulo.innerHTML=`Otimize sua produtividade,<br>
        <strong class="app__title-strong">mergulhe no que importa.</strong>
`
        break;
       case "descanso-curto":
       titulo.innerHTML=`Que tal dar uma respirada? <br>
                <strong class="app__title-strong">Faça uma pausa curta!</strong>`
       break;
       case "descanso-longo":
       titulo.innerHTML=`Hora de voltar à superfície. <br>
       <strong class="app__title-strong">  Faça uma pausa longa.</strong>`


    default:
        break;
}

    }





    musicaFocoinput.addEventListener('change', () => {
        //gambiara de alterar o som
    //se musica puasada
        if (musica.paused) {
          musica.play()
        }

        else   {
          musica.pause()
        }

    })



const contagemRegressiva =()=>{
//recursividade do loop
//temporizador zerou
if (tempoDecorridoemSegundos<=0) {

  alert('Tempo finalizado!  ')
zerar()
  return

}
 // iniciarOuPausar()
  tempoDecorridoemSegundos-=1
  console.log("Temporizador: "+ tempoDecorridoemSegundos);

}


startPauseBt.addEventListener('click',iniciarOuPausar)

function iniciarOuPausar() {
//se temporizador pausado

    if(intervaloId){
    /*desafio */
audio_pause.play()
    /*fim desafio*/

        zerar()

        return


    }
startPauseBt.textContent = "Pausar"



    //desafio de tocar som do botão da priira fez é iniciar
//controle=true
//playAudio()

//fim  desafio

    intervaloId = setInterval(contagemRegressiva, 1000)
}

function zerar() {

//vlaota a exibir começar
startPauseBt.textContent = "Começar"






  clearInterval(intervaloId)
//quando pausa muda texto do botão p\ começar
intervaloId=null
//inicio desafio
//audio_beep.play()
//fim desafio


}
