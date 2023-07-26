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


        //coletando tags do resultado de uma pequisa encontrada
        const imagem = document.querySelector('.box-clima img');
        const temperatura = document.querySelector('.box-clima .temperatura');
        const descricao = document.querySelector('.box-clima .descricao');
        const humidade = document.querySelector('.detalhes-clima .humidade span');
        const vento = document.querySelector('.detalhes-clima .vento span');

        //switch que utiliza um atributo do indice zero de um arrey da API (que informa a situacao geral do clima)
        switch (data.weather[0].main) {
            case 'Clear':
                imagem.src = 'img/icons8-sun-400.png';
                break;

            case 'Rain':
                imagem.src = 'img/icons8-rain-100.png';
                break;

            case 'Snow':
                imagem.src = 'img/icons8-cold-100.png';
                break;

            case 'Clouds':
                imagem.src = 'img/icons8-clouds-100.png';
                break;

            case 'Haze':
                imagem.src = 'img/icons8-haze-100.png';
                break;

              default:
                imagem.src='';  

        };


        //Tag temperatura receberá o valor da temperatura da cidade pesquisada, convertido de string para int
        temperatura.innerHTML = `${parseInt(data.main.temp)} <span>°C </span>`;
        //Tag descricao receberá o valor da descricao do clima, da cidade pesquisada
        descricao.innerHTML = `${data.weather[0].description}`;
        //Tag vento receberá o valor da velocidade do vento, da cidade pewsquisada,convertido de string para int
        vento.innerHTML = `${parseInt(data.wind.speed)}Km/h`;
        //Tag humidade receberá o valor da humidade, da cidade pesquisada
        humidade.innerHTML = `${data.main.humidity}%`;

        box_clima.style.display = '';
        detalhes_clima.style.display = '';
        box_clima.classList.add('fade-in');
        detalhes_clima.classList.add('fade-in');
        container.style.height = '590px';


    });

});
