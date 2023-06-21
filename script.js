const form = document.getElementById('form');
let linhas = '';
const aprovado = '<img src="./assets/aprovado.png" alt="Aprovado">';
const reprovado = '<img src="./assets/reprovado.png" alt="Aprovado">';
const resultadoAprovado = '<span class="resultado aprovado">Aprovado</span>';
const resultadoReprovado = '<span class="resultado reprovado">Reprovado</span>'

const atividade = [];
const notas = [];

form.addEventListener('submit', function(e){ 
    e.preventDefault;

    adicionaDados();
    tabela();
    mediaFinal();
})

    function adicionaDados() {
        const materia = document.getElementById('atividade');
        const nota = document.getElementById('nota');
        
        if(materia.includes(materia.value)) {
            alert('Atividade' + materia.value + ' ja foi inserida.');
        }

        else {
            atividade.push(materia.value);
            notas.push(parseFloat(nota.value));
    
            let linha = '<tr>';
            linha += '<td>' + materia.value + '</td>';
            linha += '<td>' + nota.value + '</td>';
            linha += `<td>${nota.value >= 7 ? aprovado : reprovado}</td>`;
            linha += '</tr>';
    
            linhas += linha;
        }

        materia.value = "";
        nota.value = "";
    }

   
    function tabela() {
        const corpo = document.querySelector('tbody');
        corpo.innerHTML = linhas;    
    }

    function mediaFinal() {
        const media = calculo();

        document.getElementById('media-final').innerHTML = media;
        document.getElementById('resultado-nota').innerHTML = media >= 7 ? resultadoAprovado : resultadoReprovado;
    }

    function calculo() {
        let soma = 0;
        
        for(let i = 0; i < notas.length; i++) {
            soma += notas[i];
        }

        return soma / notas.length;
    }