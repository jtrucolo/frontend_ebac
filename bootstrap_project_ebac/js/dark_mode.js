$(document).ready(function() {
    $('#switch-mode').change(function() {

        var dark_icon = '<i class="bi bi-moon-stars-fill"></i>';
        var ligth_icon = '<i class="bi bi-brightness-high-fill"></i>';

        var body = $('body');
        var card = $('.card');
        var card_title = $('.card-header h3');
        var texto = $('p');
        var titulos = $('h2');
        var icon = $('label[for="switch-mode"]');

        if (body.css('background-color') === 'rgb(39, 36, 44)') {
            body.css('background-color', 'white');
            card.css('background-color', 'white')
            titulos.css('color', 'black');
            card_title.css('color', '#000');
            texto.css('color', 'black');
            icon.html(dark_icon);

        } else {
            card.css('background-color', '#141325')
            body.css('background-color', 'rgb(39, 36, 44)');
            card_title.css('color', 'white');
            titulos.css('color', 'white');
            texto.css('color', 'white');
            icon.html(ligth_icon);
        }
    });
});
