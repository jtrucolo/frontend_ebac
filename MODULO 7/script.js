let form = document.getElementById('form');
const containerFalha = document.querySelector('.invalido');
const containerSucesso = document.querySelector('.valido');
const tempoEspera = 3000;

const barraProgresso = document.querySelector('.barraProgresso');

form.addEventListener('submit', function(e) {
    e.preventDefault(); //nao recarrega

    let valor_1 = document.getElementById('valor_1').value;
    //console.log('valor_1');
    let valor_2 = document.getElementById('valor_2').value;
    //console.log('valor_2');
    
    if (valor_2 > valor_1) {
        const mensagemSucesso = 'Formulario valido, Segundo numero maior que o Primeiro';
        containerSucesso.style.display = 'flex';
        barraProgresso.style.display = 'flex';
        containerFalha.style.display = 'none';
        containerSucesso.innerHTML = mensagemSucesso;
    }
    else {
        const mensagemFalha = 'Formulario invalido, Primeiro numero maior que o Segundo';
        containerFalha.style.display = 'flex';
        barraProgresso.style.display = 'flex';
        containerSucesso.style.display = 'none';
        containerFalha.innerHTML = mensagemFalha;
    }

    function alteraDisplay() {
        containerFalha.style.display = 'none';
        containerSucesso.style.display = 'none';
        barraProgresso.style.display = 'none';
    }
    setTimeout(alteraDisplay, tempoEspera, barraProgresso);
});