const alunos = [
  {nome: 'Lucas', nota: 7},
  {nome: 'Breno', nota: 5},
  {nome: 'Paulo', nota: 6},
  {nome: 'David', nota: 5},
]

function exibeAluno(lista_alunos) {
  return lista_alunos.filter(aluno => aluno.nota >= 6)
}

const aprovados = exibeAluno(alunos)

console.log(aprovados)