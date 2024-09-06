function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    // Imprime a seção no console para fins de depuração (pode ser removido em produção)
    // console.log(section);

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    console.log(campoPesquisa)

    //se campoPesquisa for uma string sem nada
    if(!campoPesquisa){
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados HTML
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    // Itera sobre cada item de dados e constrói o HTML para cada resultado
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        //se titulo includes campoPesquisa
        if(titulo.includes(campoPesquisa)|| descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            // Cria um novo elemento de resultado
            resultados += `
                <div class="item-resultado">
                    <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href=${dado.link} target="_blank">Mais informações</a>
                </div>
            `;
        }
        
    }

    if(!resultados){
        resultados = "<p>Nada foi encontrado</p>"
    }

    // Atualiza o conteúdo HTML da seção com os resultados construídos
    section.innerHTML = resultados;
}

