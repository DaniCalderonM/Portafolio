// NAVBAR
// Con este script logramos que el navbar sea transparente al inicio, y que al hacer scroll
// en cuanto este sea mayor que 100, el navbar cambiara a color negro.
var nav = $('nav');
$(window).on('scroll', function () {
    if (window.scrollY > 100) {
        nav.addClass('bg-dark');
    } else {
        nav.removeClass('bg-dark');
    }
});

// SOBRE MI
//  Con este script logramos que se genere el toggle slow en cada uno de los parrafos al momento de hacer click
$(".fondot").click(function () {
    // Buscamos el parrafo hermano del h4 dentro del mismo contenedor
    $(this).siblings(".tg").toggle("slow");
});
