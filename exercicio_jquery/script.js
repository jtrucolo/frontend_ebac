$(document).ready(function() {

    $('form').submit(function(e){
        e.preventDefault();

        const mercadoria = $('#mercadoria').val();
        const novo_item = $('<li"></li>');

        $(`<p class="mercadoria">${mercadoria}</p>`).appendTo(novo_item);

       $(`<div class="container-mid">
        <p class="mercadoria">${mercadoria}</p>
       </div>`);

       $(novo_item).appendTo('ul');

       $('#mercadoria').val('');
    });

    $('.mercadoria').click(function(){
        $('.mercadoria').addClass('.line');
    })
})