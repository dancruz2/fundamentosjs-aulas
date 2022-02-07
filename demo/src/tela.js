//metodos estaticos nao podem acessar o this
//por isso, nao vamos colocar o util no contrutor
const util = Util
const ID_CONTEUDO = "conteudo"
const ID_BTN_JOGAR = "jogar"
const ID_MENSAGEM = "mensagem"
const CLASSE_INVISIVEL = "invisible"
const ID_CARREGANDO = "carregando"
const ID_CONTADOR = "contador"
const ID_MOSTRARTUDO = "mostrarTudo"
const MENSAGENS = {
    sucesso: {
        texto: 'Combinação correta',
        classe: 'alert-success'
    },
    erro: {
        texto: 'Combinação incorreta',
        classe: 'alert-danger'
    }
}
class Tela {
    static obterCodigoHtml(item) {
        return `
        <div class="col-xl-3">
        <div class="card" style="width: 60%;" onclick="window.verificarSelecao('${item.id}', '${item.name}')">
        <img name="${item.name}" src="${item.img}" class="card-img-top" alt="..." />
        </div>
        <br />
         </div>
    `
    }
    static configurarBotaoVerificarSelecao(funcaoOnClick){
        window.verificarSelecao = funcaoOnClick
    }
    static alterarConteudoHTML(codigoHtml) {
        const conteudo = document.getElementById(ID_CONTEUDO)
        conteudo.innerHTML = codigoHtml
    }
    static gerarStringHTMLPelaImagem(data){
        //para cada item da lista, vai executar a função obterCodigoHTML
        //ao final vai concatenar tudo em uma única string
        //muda de array para string
        return data.map(Tela.obterCodigoHtml).join("")
    }
    static atualizarImagens(itens){
        const codigoHtml = Tela.gerarStringHTMLPelaImagem(itens)
        Tela.alterarConteudoHTML(codigoHtml)
    }
    static configurarBotaoJogar(funcaoOnClick){
        const btnJogar = document.getElementById(ID_BTN_JOGAR)
        btnJogar.onclick = funcaoOnClick
    }
    static exibirHerois(nomeDoHeroi, img){
        const elementosHtml = document.getElementsByName(nomeDoHeroi)
        //para cada elemento encontrado na tela, vamos alterar a imagem para a imagem inicial dele
        //com o forEach para cada item, dentro dos () setamos o valor de imagem
        elementosHtml.forEach(item => (item.src = img))
    }
    static async exibirMensagem(sucesso = true) {
        const elemento = document.getElementById(ID_MENSAGEM)
        if(sucesso){
            elemento.classList.remove(MENSAGENS.erro.classe)
            elemento.classList.add(MENSAGENS.sucesso.classe)
            elemento.innerText = MENSAGENS.sucesso.texto
        }
        else {
            elemento.classList.remove(MENSAGENS.sucesso.classe)
            elemento.classList.add(MENSAGENS.erro.classe)
            elemento.innerText = MENSAGENS.erro.texto
        }
        elemento.classList.remove(CLASSE_INVISIVEL)
        await util.timeout(1000)
        elemento.classList.add(CLASSE_INVISIVEL)
    }
    static exibirCarregando(mostrar = true){
        const carregando = document.getElementById(ID_CARREGANDO)
        if(mostrar){
            carregando.classList.remove(CLASSE_INVISIVEL)
            return;
        }
        carregando.classList.add(CLASSE_INVISIVEL)
    }
    static configurarBotaoMostrarTudo(funcaoOnClick) {
        const btnMostrarTudo = document.getElementById(ID_MOSTRARTUDO)
        btnMostrarTudo.onclick = funcaoOnClick
    }
}