document.addEventListener("DOMContentLoaded", () => {
  // 1. Pega o que está guardado no "caderninho" (LocalStorage)
  const escolha = localStorage.getItem("sessaoEscolhida");

  // 2. Seleciona os elementos que vamos mudar
  const mainCorpo = document.querySelector("main");
  const tituloPagina = document.getElementById("title-theme");

  // 3. Verifica se existe uma escolha salva
  if (escolha) {
    // Aplica o ID ao main para o CSS ativar as cores/fundos
    mainCorpo.id = escolha;

    // 4. Mapeamento de IDs para Nomes Reais (Dicionário)
    const nomesDasCategorias = {
      "japonesa": "Culinária Japonesa",
      "massa": "Massas Italianas",
      "pizza": "Pizzas Artesanais",
      "sobremesa": "Sobremesas Especiais",
    };

    // 5. Muda o texto do H2 baseado no ID
    // Se o ID existir no nosso mapa, ele usa o nome bonito, senão usa "Receitas"
    tituloPagina.innerText = nomesDasCategorias[escolha] || "Nossas Receitas";

    console.log("Personalização aplicada: " + escolha);
  }
});
