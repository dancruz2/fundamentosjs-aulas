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
            { img: "./arquivos/spiderman.png", name: "spiderman"},

        ]
        this.iconePadrao = "./arquivos/star.png"
        this.heroisEscondidos
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
        setTimeout(() => {
            this.esconderHerois(copias)
        }, 1000);
    }

    esconderHerois(herois){
        //vamos trocar a imagem de todos os herois pelo icone padrão
        //como fizemos no construtor, vamos extrair somente o necessario
        //usando a sintaxe ({chave: 1}) estamos falando que vamos retornar o que tiver dentro dos parenteses
        //quando não usamos :  o JS entende que o valor é o mesmo. 
        const heroisOcultos = herois.map(({nome, id}) => ({
            id,
            nome,
            img: this.iconePadrao
        }))

        //atualizamos a tela com os herois ocultos
        this.tela.atualizarImagens(heroisOcultos)
        this.heroisOcultos = heroisOcultos
    }

    jogar(){
        this.embaralhar()
    }
}