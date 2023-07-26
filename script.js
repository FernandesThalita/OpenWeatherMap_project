// coletando tags e aplicando em variavies
const container = document.querySelector('.container');
const pesquisaButton = document.querySelector('.pesquisa_barra button');
const box_clima = document.querySelector('.box-clima');
const detalhes_clima = document.querySelector('.detalhes-clima');
const local_nao_encontrado = document.querySelector('.local-nao-encontrado');


//Funcao click para pesquisa
pesquisaButton.addEventListener("click", ()=>{

    //chave API
    const APIKey = 'f4f46e638046e2d629d7bae581a1da6a';
    //valor do input(cidade ou local pesquisado)
    const cidadePesquisada = document.querySelector('.pesquisa_barra input').value;

    if(cidadePesquisada ===''){
        alert('preencha o campo antes de pesquisar!');
        return;
    }

})
