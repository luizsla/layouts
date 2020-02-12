// Script responsável por setar plugIn de lazzyLoading de imagens.
// Dependências -> jQuery.js.

function carregaImagens() {
  $("#portfolio img").unveil(20, function() {
    this.style.opacity = 1;
  });

  $("#garrafas img").unveil(20, function() {
    this.style.opacity = 1;
  });
}
