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
        this.heroisEscondidos = []
        this.heroisSelecionados = []
    }
    //para usar o this não precisamos usar o static
    inicializar(){
        //vai pegar todas as funções da classe tela!
        //coloca todos os herois na tela
        this.tela.atualizarImagens(this.heroisIniciais)
        //força a tela a usar o this de Jogo da Memoria
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
        this.tela.configurarBotaoVerificarSelecao(this.verificarSelecao.bind(this))
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
        const heroisOcultos = herois.map(({name, id}) => ({
            id,
            name,
            img: this.iconePadrao
        }))

        //atualizamos a tela com os herois ocultos
        this.tela.atualizarImagens(heroisOcultos)
        this.heroisOcultos = heroisOcultos
    }

    verificarSelecao(id, name){
        const item = {id, name}
        //vamos verificar a quantidade de hérois selecionados
        //e tomar ação se escolheu certo ou errado
        const heroisSelecionados = this.heroisSelecionados.length
        switch(heroisSelecionados) {
            case 0:
                //adiciona a escolha na lista, esperando pelo próximo click
                this.heroisSelecionados.push(item)
                break;
            case 1:
                //se a quantidade for 1, significa que o usuario só pode escolher mais 1
                const [opcao1] = this.heroisSelecionados
                //zerar itens para não selecionar mais de dois hérois
                this.heroisSelecionados = []
                //conferimos se o nome e os IDs são os mesmos
                //aqui verificamos se são IDs diferentes para o usuarios não clicar duas vezes na mesma carta
                if(opcao1.name === item.name && opcao1.id !== item.id){
                    alert('Combinação correta' + item.name)
                    return;
                }
                alert('Combinação incorreta!')
                break;
                

        }
    }

    jogar(){
        this.embaralhar()
    }
}