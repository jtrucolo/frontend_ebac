$(document).ready(function() {

$('#contato_usuario').mask('(00)0 0000-0000');

$('form').validate( {
    rules: {
        nome_usuario: {
            required: true
        },
        contato_usuario: {
            required: true
        },
        email_usuario: {
            required: true,
            email: true
        },
        mensagem_usuario: {
            required: true
        }

    }
})

$('form').submit(function(e) {
e.preventDefault();

    const nome_usuario = $('#nome_usuario').val();
    const nome_completo = nome_usuario.trim();
    const nome_final = nome_completo.split(' ');

    if(nome_final.length < 2) {
        alert('Ensira o Nome Completo')
    }
    });
});