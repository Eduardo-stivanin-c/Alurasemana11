// Crie um novo objeto de áudio
//dependende de script.js pra funcionar

//"deda " os erros;
"use strick"

var audio = new Audio('./sons/play.wav');

//quando otemporizador zerar toca o beep
var audio_beep = new Audio('./sons/beep.mp3');
var audio_pause = new Audio('./sons/pause.mp3');

var controle=false
//var audio_pause=new Audio('caminho/para/o/arquivo.mp3');
// Função para tocar o áudio

function playAudio() {
//se controle = true tocar
let controles=( controle===true ? audio.play():false);
}

// Função para pausar o áudio
 //Intervalid diferente de null,gambiara da função pra ele para



function tempoesgotaAudio() {
//se intervlaor não tiver zerado rodar recursoivanmente na gambiara
  if (intervaloId===null) {
audio_pause.play
  }
  //senão tocar som de Temporizador esgotado1


}

//se já é pausar poque a primara vez é iniciar


/*
https://stackoverflow.com/questions/27368778/how-to-toggle-audio-play-pause-with-one-button-or-link
https://www.w3schools.com/jsref/met_audio_pause.asp
https://stackoverflow.com/questions/43167907/sound-play-stop-pause
http://www.sousound.com/music/healing/healing_01.mp3
https://thewebdev.info/2022/02/09/how-to-toggle-audio-play-pause-with-a-button-or-link-with-javascript/
*/
