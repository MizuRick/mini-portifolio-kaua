//linkar com o doc HTML
const abas = document.querySelectorAll(".aba");

//identificar o click do elemento
abas.forEach(aba => {
    aba.addEventListener("click", function() {

        if(aba.classList.contains("selecionado")){
        return;
        }

        const abaSelecionada = document.querySelector(".aba.selecionado")
        abaSelecionada.classList.remove("selecionado")

        //marcar a aba clicada como selecionada
        aba.classList.add("selecionado");

        //esconder o conteudo da aba anterior
        const informacaoSelecionada = document.querySelector(".informacao.selecionado")
        informacaoSelecionada.classList.remove("selecionado")

        //mostrar o conteudo da aba selecionada
        const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`
        const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
        informacaoASerMostrada.classList.add("selecionado")
    })        
})