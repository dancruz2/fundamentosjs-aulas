function onLoad(){
   const dependencias = {
       tela: Tela //a classe global
   }
   //inicializamos o jogo da memoria
   const JogoDaMemoria = new jogoDaMemoria(dependencias)
   JogoDaMemoria.inicializar()
   
}
window.onload = onLoad