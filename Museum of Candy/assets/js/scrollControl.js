$(() => {
    //Função debounce para controlar a chamada do evento
    const debounce = (func, wait, immediate) => {
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
    //Capturando o elemento da navBar e tornando um elemento jQuery.
    const nav = $('#main-navBar');

    //Capturando o evento de scroll e aplicando a classe para tornar o menu colorido no scroll da página
    $(document).scroll(debounce(() => {
        nav.toggleClass('scrolled', $(this).scrollTop() > nav.height());
    }, 75));
});