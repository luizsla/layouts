//Interações do Menu da página principal.
// Dependências -> jQuery

// Controle do Menu hamburguer.
function controleMenu() {

  var iconeHamburguer = $("#icone-hamburguer");
  var listaItems = $(".lista-itens");

  $("#menu-hamburguer").click(function(event) {
    listaItems.toggleClass('w3-hide');
    iconeHamburguer.toggleClass('botao-ativo');
  });

  var botaoMenu = $(".lista-itens li");
  botaoMenu.click(function(event) {
      setTimeout(function() {
        listaItems.toggleClass('w3-hide');
        iconeHamburguer.removeClass('botao-ativo');
      }, 650);
  });
}
