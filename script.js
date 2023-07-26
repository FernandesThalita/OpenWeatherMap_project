// coletando tags e aplicando em variavies
const container = document.querySelector('.container');
const pesquisaButton = document.querySelector('.pesquisa_barra button');
const box_clima = document.querySelector('.box-clima');
const detalhes_clima = document.querySelector('.detalhes-clima');
const local_nao_encontrado = document.querySelector('.local-nao-encontrado');


//Funcao click para pesquisa
pesquisaButton.addEventListener("click", () => {

    //chave API
    const APIKey = 'f4f46e638046e2d629d7bae581a1da6a';
    //valor do input(cidade ou local pesquisado)
    const cidadePesquisada = document.querySelector('.pesquisa_barra input').value;

    //if para caso o usuario não preencha o campo
    if (cidadePesquisada === '') {
        alert('preencha o campo antes de pesquisar!');
        return;
    }

    //fetch para obter a URL da API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidadePesquisada}&units=metric&appid=${APIKey}`).then(resposta => resposta.json()).then(data => {

        //Verificando se o code da resposta da API é 404 (não encontrado)
        if (data.cod === '404') {
            //style para a tag de não encontrado
            container.style.height = '400px';
            box_clima.style.display = 'none';
            detalhes_clima.style.display = 'none';
            local_nao_encontrado.style.display = 'block';

            //adicionando a animacao criada no css com a class FadeIn na tag
            local_nao_encontrado.classList.add('fade-in');
            return;
        }
        local_nao_encontrado.style.display = 'none';
        //removendo a animacao caso não identifique o if do erro 404
        local_nao_encontrado.classList.remove('fadeIn');

    })

})
