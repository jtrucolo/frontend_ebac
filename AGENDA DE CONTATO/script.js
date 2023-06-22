const form = document.getElementById('form');
const nome_contato = document.getElementById('nome_contato');
const numero_contato = document.getElementById('numero_contato');

const contatos = [];
let linhas = '';

const erro_nome = document.querySelector('.error');
const sucesso_contato = document.querySelector('.success');
const tempo_espera = 2000;

$(numero_contato).inputmask({ mask: '(99)99999-9999'});

numero_contato.addEventListener('click', function(event) {
    const valorDigitado = event.target.value;
    const regex = /[a-zA-Z~`!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]/;
  
    if (regex.test(valorDigitado)) {
      event.target.value = '';
      event.preventDefault();
    }
  });
  
  nome_contato.addEventListener('input', function(event) {
      const valorDigitado = event.target.value;
      const regex = /[0-9~`!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]/;
  
      if (regex.test(valorDigitado)) {
        event.target.value = '';
        event.preventDefault();
      }
});

form.addEventListener('submit', function(e) {
    e.preventDefault();

    guardaContatos();
    insereDados();
    
    function guardaContatos() {
        const nomeCompleto = nome_contato.value.trim();    
        const nomeItems = nomeCompleto.split(' ');

        if (nomeItems.length < 2) {
            let mensagem = 'Por favor insira o nome completo';
                erro_nome.style.display = 'flex';
                erro_nome.innerHTML = mensagem;  

            return;
        }
       
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

            let sucesso = 'Contato salvo com Sucesso';
            sucesso_contato.style.display = 'flex';
            sucesso_contato.innerHTML = sucesso;

            nome_contato.value = '';
            numero_contato.value = '';
        }  
    }

    function insereDados() {
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;
    }

    function displayOff() {
        erro_nome.style.display = 'none';
        sucesso_contato.style.display = 'none';
    }
setTimeout(displayOff,tempo_espera,sucesso_contato);
})