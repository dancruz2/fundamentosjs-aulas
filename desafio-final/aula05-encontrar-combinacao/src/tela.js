const ID_CONTEUDO = "conteudo"
const ID_BTN_JOGAR = "jogar"
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
}