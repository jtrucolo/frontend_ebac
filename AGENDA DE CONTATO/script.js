const form = document.getElementById('form');
const contatos = [];
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    guardaContatos();
    insereDados();
})

    function guardaContatos() {
        const nome_contato = document.getElementById('nome_contato');
        const numero_contato = document.getElementById('numero_contato');   

        if(contatos.includes(nome_contato.value)) {
            alert(`Contato ${nome_contato.value} ja salvo na agenda.`);
        }
        else {
            contatos.push(nome_contato.value);
            let linha = '<tr>';
            linha += '<td>' + nome_contato.value + '</td>';
            linha += '<td>' + numero_contato.value + '</td>';
            linha += '</tr>';
            linhas += linha;
        }  
    }

    function insereDados() {
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;
    }