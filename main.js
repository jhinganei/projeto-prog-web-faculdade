function exibirAlunos() {
  fetch("https://jhinganei.github.io/projeto-notas-faculdade/alunos.json")
    .then((response) => {
      return response.json();
    })
    .then((jsondata) => {
      console.log(jsondata.alunos[0, 25]);

      for (let product of jsondata.alunos) {
        console.log(product)

        let resultado = document.getElementById("resultado");

        let resultadoprovas =
        product.avaliacaoParcial +
        product.exercicio +
        product.avaliacaoRegimental;

        if (resultadoprovas >= 6) {
          product.status = "Aprovado";
        } else if (resultadoprovas >= 2 && resultadoprovas < 6) {
          product.status = "Avaliação Final";
        } else {
          product.status = "Reprovado";
        }

        resultado.innerHTML += `
            <div class="items">
              <img src="${product.img}" alt="">
              <p class="informations">Nome: ${product.nome}</p>
              <p class="informations">RGM: ${product.rgm}</p>
              <p class="informations">Av. Parcial: ${product.avaliacaoParcial}<p>
              <p class="informations">Exercícios: ${product.exercicio}<p>
              <p class="informations">Av. Regimental: ${product.avaliacaoRegimental}<p>
              <p class="informations">Status: ${product.status}<p>
            </div>`;
      }
    });
}
//Phelipe e Kauan
