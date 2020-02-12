//Script de gerenciamento de animações por scroll da tela.
// Dependências -> jQuery.

//Função de debounce para performance.
debounce = function(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

//Pegando o posicionamento do elemento a ser animado e do offset de ativação da animação.
var contato = $(".contato");
var offset = $(window).height() * 3/4;

function animarNoScrollContato() {
  var altura = $(document).scrollTop();
  contato.each(function() {
    var distancia = $(this).offset().top;
    if (altura > distancia - offset) {
      $(".container-animar").removeClass("w3-hide");
    }
  });
}

//Pegando o posicionamento do elemento da ser animado.
var mapa = $("#mapa");

function animarNoScrollMapa() {
  var altura = $(document).scrollTop();
  mapa.each(function() {
    var distancia = $(this).offset().top;
    if (altura > distancia - offset) {
      $(".mapa-espaco").removeClass("w3-hide");
    }
  });
}
//Setup das animações.
function animacaoForm() {
  $(document).scroll(
    debounce(function() {
      animarNoScrollContato();
  }, 150));
}

function animacaoMapa() {
  $(document).scroll(
    debounce(function() {
      animarNoScrollMapa();
  }, 150));
}
