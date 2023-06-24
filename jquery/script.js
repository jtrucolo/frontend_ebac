$(document).ready(function() {
    $('header button').click(function(){
        $('.container').slideDown();
    });

    $('.cancelar').click(function() {
        $('.container').slideUp();
    });

    $('form').on('submit', function(e){
        e.preventDefault();

        const endereco_imagem = $('#imagem').val();
        const novo_item = $('<li style="display: none;"></li>');
        $(`<img src="${endereco_imagem}" />`).appendTo(novo_item);
        $(`<div class="overlay"/>
            <a href="${endereco_imagem}" target="__blank">Ver imagem em tamanho real</a>
        </div>`).appendTo(novo_item);

        $(novo_item).appendTo('ul');
        $(novo_item).fadeIn(1000);
        $('#imagem').val('');
    });
});