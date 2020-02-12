//Script que controla o scroll da página.
function controleScroll() {
  $("#menu-navegacao a").click(function(event) {
    event.preventDefault();

    let link = $(this).attr("href"),
        targetOffset = $(link).offset().top,
        menuHeight = $(".nav-bar").innerHeight();

    //animação.
    $("html, body").animate({
      scrollTop: targetOffset - menuHeight
    }, 600);
  });
}