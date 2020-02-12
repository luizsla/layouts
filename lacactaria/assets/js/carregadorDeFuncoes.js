//Controle das funções executadas pelo jQuery em sequência.
// Dependências -> jQuery.

$(document).ready(function() {

  setTimeout(controleMenu, 500);

  setTimeout(controleScroll, 750);

  setTimeout(carregaImagens, 1000);

  setTimeout(sessaoComparacao, 1500);

  setTimeout(animacaoForm, 2000);

  setTimeout(mostraMapa, 2500);

  setTimeout(animacaoMapa, 3000);

});
