$(document).ready(function() {
    $('#telefone_usuario').mask('(00) 00000-0000', {
        placeholder: '(xx) xxxxx-xxxx'
    });
    $('#cpf_usuario').mask('000.000.000-00');
    $('#cep_usuario').mask('00000.000');

    $('form').validate( {
        rules: {
            nome_usuario: {
                required: true
            },
            email_usuario: {
                required: true,
                email: true
            },
            telefone_usuario: {
                required: true
            },
            cpf_usuario: {
                required: true
            },
            cep_usuario: {
                required: true
            }
        },
        messages: {
            nome_usuario: 'Campo Obrigatorio', 
            email_usuario: 'Campo Obrigatorio', 
            telefone_usuario: 'Campo Obrigatorio', 
            cpf_usuario: 'Campo Obrigatorio', 
            cep_usuario: 'Campo Obrigatorio'
        }
    })
})