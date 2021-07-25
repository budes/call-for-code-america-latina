var html = document.querySelector("section")
AbaHome()

// HOME 
function AbaHome() {
    html.innerHTML = '\n \
    <link rel="stylesheet" href="CSS/home.css"> \n \
    \n \
    <h1 id="title"> Seja bem vindo, <b>usuário</b> </h1> \n \
    \n \
    \n \
    <h2> Escolha uma aba </h2> \n \
    <div class="container"> \n \
        <div class="opcoes" onclick="AbaProjetos()"> \n \
            <img src="Images/icones/projetos.svg"> \n \
            <p id="p1"> Projetos Ecológicos </p>  \n \
        </div> \n \
    \n \
        <div class="opcoes" onclick="AbaLojinha()"> \n \
            <img src="Images/icones/bolsa.svg"> \n \
            <p> Produtos para ser ecológico </p> \n \
        </div> \n \
    </div> \n \
    '
}

// ======================================================

// PROJETOS ECOLÓGICOS

function AbaProjetos() {

    html.innerHTML = '\
    <link rel="stylesheet" href="CSS/projetos.css"> \n \
    \n \
    <h1 id="title"> Projetos ecológicos </h1>\n \
    \n \
    <content> \n \
        <section class="container"> \n \
            <div class="opcoes" onclick="AbreOpcao(0)"> \n \
                <img src="Images/composteira.jpg"> \n \
                <p>Composteira</p> \n \
            </div> \n \
            <div class="opcoes" id="add" onclick="Alerta()"> \n \
                + \n \
                <p> \n \
            </div>\n \
        </section> \n \
    </content> \n \
    \n \ '
}

function AbreOpcao(projetoSelecionado) {

    html.innerHTML = '\
    <link rel="stylesheet" href="CSS/projeto-selecionado.css">\n \
    \n \
    <section class="container"> \n \
        <button onclick="AbaProjetos()"> Retornar </button> \n \
        <h1 id="title"> Vaso de plantas ecológico </h1>\n \
    </section> \n \
    \n \
    <div class="blueprint"> \n \
        <img src="Images/composteira_final.gif"> \n \
    </div>\n \
    \n \
    <div class="linha"> </div>\n \
    \n \
    <section class="container" id="requi-passo">\n \
        <div class="check-window" id="requisitos"> \n \
            <h1> Requisitos </h1> \n \
            <input type="checkbox"> <label> 1 Garrafa pet de 1,5L <br> </label> \n \
            <input type="checkbox"> <label> Pequenas pedras <br> </label> \n \
            <input type="checkbox"> <label> Terra ou adubo <br> </label> \n \
            <input type="checkbox"> <label> Restos de comida / cascas de frutas <br> </label> \n \
            <input type="checkbox"> <label> Pequenas pedras </label> \n \
        </div> \n \
        <ul class="check-window" id="passo-a-passo"> \n \
            <h1> Passo a passo </h1> \n \
            <input type="checkbox"> <label> Corte a garrafa no meio <br> </label> \n \
            <input type="checkbox"> <label> Fure a tampa da garrafa com um prego ou parafuso quente <br> </label> \n \
            <input type="checkbox"> <label> Encaixe as 2 metades da garrafa com a tampa para baixo <br> </label> \n \
            <input type="checkbox"> <label> Adicione a camada de pedrinhas <br> </label> \n \
            <input type="checkbox"> <label> Coloque uma camada de areia/adubo <br> </label> \n \
            <input type="checkbox"> <label> Coloque uma camada de restos de comida / cascas de frutas <br> </label> \n \
            <input type="checkbox"> <label> Repita o processo até encher a garrafa <br> </label> \n \
            <input type="checkbox"> <label> Encerre com uma camada de adubo para evitar odores <br> </label> \n \
            <input type="checkbox"> <label> Cubra a garrafa com um pano </label> \n \
        </ul> \n \
    </section> \n \
    '
}

// ======================================================

// ITENS PRA SE TORNAR ECOLÓGICO

function AbaLojinha() {
    html.innerHTML = '\
    <link rel="stylesheet" href="CSS/lojinha.css"> \n \
    \n \
    <section class="container">\n \
        <aside> \n \
            <h2> Categorias </h2>\n \
            \n \
            <a class="categoria" id="primeiro" onclick="GeraProdutos(0)"> Caseiro </a> \n \
            <a class="categoria" onclick="GeraProdutos(1)"> Industrial </a>\n \
            <a class="categoria" onclick="GeraProdutos(2)"> Locomoção </a>\n \
            <a class="categoria" onclick="GeraProdutos(3)"> Estudos </a>\n \
            <a class="categoria" onclick="GeraProdutos(4)"> Micelâneas </a>\n \
            <a class="categoria" onclick="GeraProdutos(5)"> Diversos </a>\n \
        </aside>\n \
        <content>  \n \
            <h1 id="title"> Produtos para ser ecológico </h1>\n \
            \n \
            <section id="produtos">\n \
                \n \
            </section> \n \
        </content> \n \
    </section> \n \
    '

    GeraProdutos()
}


function GeraProdutos(categoria) {
    // ind == categoria 
    var produtos = [
        ['<div class="opcoes" onclick="JanelaProduto(0)"> \n \
            <img src="Images/produtos/saco de lixo.jpg"> \n \
            <p> Saco de Lixo preto</p>\n \
            <div class="caseiro"> caseiro </div> \n \
        </div>\n \
        '],
        [''],
        [''],
        [''],
        [''],
        ['']
    ]


    var lista = document.querySelector("#produtos")

    if (categoria == undefined) {
        for(var i in produtos) {
            if (i == 0) {
                lista.innerHTML = produtos[i]
            }
            else {
                lista.innerHTML += produtos[i]
            }
        }
    }
    else {
        if (categoria < (produtos.length - 1) && produtos[categoria] != '') {
            lista.innerHTML = produtos[categoria]
        }
        else {
            lista.innerHTML = "<p id='aviso'> Não foi adicionado nenhum item nessa categoria </p>"
        }
    }
}

function JanelaProduto(categoria) {
    var lista = document.querySelector("#produtos")

    var janela_produtos = [
        ['\n \
        <div class="produtos-anulator"> \n \
            <section class="container" id="janela"> \n \
                <button onclick="GeraProdutos()"> Retornar </button> \n \
                <h2> Saco de Lixo Preto </h2> \n \
            </section> \n \
            \n \
            <section class="container"> \n \
                <img id="img-janela" src="Images/produtos/saco de lixo.jpg"> \n \
                \n \
                <section class="container-column">\n \
                    <p> Um item indispensável para qualquer um, não só por ser algo necessário, mas \n \
                    pela sua utilidade no descarte seletivo, sendo sua cor um grande indicativo de seu \n \
                    conteúdo, o que facilita o descarte. </p>\n \
                    \n \
                    <div class="caseiro"> caseiro </div> \n \
                    <a href="https://www.google.com/search?q=sacos+de+lixo&source=lnms&tbm=shop&sa=X&ved=2ahUKEwjErLnMqf_xAhVcDrkGHU0nD8UQ_AUoAXoECAIQAw&biw=1360&bih=661"> \n \
                        <button id="pesquisa"> Pesquisar produto </button>\n \
                    </a> \n \
                </section>\n \
            </section> \n \
        </div> \n \
        '],
        [''],
        [''],
        [''],
        [''],
        ['']
    ]
    
    lista.innerHTML = janela_produtos[0][0]
    

}
