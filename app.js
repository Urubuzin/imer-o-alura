function pesquisar() {
  // Obtém a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  // Obtém o valor do campo de pesquisa
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  campoPesquisa = campoPesquisa.toLowerCase()

  // Inicializa uma string vazia para armazenar os resultados
  let resultados = "";
  let  nome = "";
  let descricao = "";
  


  // Itera sobre cada item de dados e constrói o HTML para cada resultado
  for (let dado of dados) {
       nome = dado.nome.toLowerCase()
      descricao = dado.descricao.toLowerCase()

    if (nome.includes(campoPesquisa)|| descricao.includes(campoPesquisa)) {
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href=${dado.instagram} target="_blank">${dado.nome}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
    }
  }

  // Verifica se foram encontrados resultados
  if (resultados === "") {
    section.innerHTML = "Nenhum resultado foi encontrado";
  } else {
    section.innerHTML = resultados;
  }
}