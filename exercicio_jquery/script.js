$(document).ready(function() {

    let erro = $('.erro p');
    let tempo = 3000;

    $('form').submit(function(e){
        e.preventDefault();

        displayOff();

        if($('#mercadoria').val('')) {
            erro.css('display', 'flex');
        }

        else {
            const mercadoria = $('#mercadoria').val();
            const novo_item = $('<li"></li>');
    
            $(`<p class="mercadoria">${mercadoria}</p>`).appendTo(novo_item);
    
           $(`<div class="container-mid">
            <p class="mercadoria">${mercadoria}</p>
           </div>`);
    
           $(novo_item).appendTo('ul');
    
           $('#mercadoria').val('');
    
            $('.mercadoria').click(function(){
                $(this).addClass('line');
            });
        }
    });

    function displayOff() {
        erro.css('display','none');
    }

    setTimeout(displayOff, tempo, erro);
});