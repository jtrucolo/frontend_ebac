$(document).ready(function() {
    $('#contato_usuario').mask('(00)00000-0000');

    $('form').validate( {
        rules: {
            nome_usuario: {
                required: true
            },
            email_usuario: {
                required: true,
                email: true
            },
            contato_usuario: {
                required: true
            }
        },
        messages: {
            nome_usuario: 'Campo Obrigatorio',
            email_usuario: 'Campo Obrigatorio',
            contato_usuario: 'Campo Obrigatorio'
        }
    })
});