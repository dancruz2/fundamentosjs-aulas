class jogoDaMemoria {
    //se mandar um obj = {tela: 1, idade: 2, etc: 3}
    //vai ignorar o resto das propriedades e pegar somente a propriedade tela.
    constructor({tela}){
        this.tela = tela
        //caminho do arquivo, sempre relativo ao index.html 
        this.heroisIniciais = [
            { img: "./arquivos/batman.png", name: "batman"},
            { img: "./arquivos/flash.png", name: "flash"},
            { img: "./arquivos/hawkeye.png", name: "hawkeye"},
            { img: "./arquivos/spiderman.png", name: "spiderman"}
        ]
    }
    //para usar o this não precisamos usar o static
    inicializar(){
        //vai pegar todas as funções da classe tela!
        //coloca todos os herois na tela
        this.tela.atualizarImagens(this.heroisIniciais)
        //força a tela a usar o this de Jogo da Memoria
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
    }
    embaralhar(){
        const copias = this.heroisIniciais
        //duplicas itens
        .concat(this.heroisIniciais)
        //entrar em casa item e criar um ID aleatorio
        .map(item => {
            return Object.assign({}, item, {id: Math.random()/0.5} )
        })

        //ordenar aleatoriamente 
        .sort(()=> Math.random() - 0.5)
        this.tela.atualizarImagens(copias)
    }

    jogar(){
        this.embaralhar()
    }
}