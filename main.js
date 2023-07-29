//objeto colaborador
function Colaborador(nome, cargo, salario) {
    this.nome = nome;
    this.cargo = cargo;
    this.salario = salario;
}

//getters e setters
Colaborador.prototype.setNome = function(nome){
    this.nome = nome;
}
Colaborador.prototype.getNome = function(){
    return this.nome;
}

//Gerente e Dev herdando de Colaborador com .call
function Gerente(nome,salario,setor) {
    Colaborador.call(this, nome, 'Gerente', salario);
    this.setor = setor
}
function Dev(nome,salario,setor) {
    Colaborador.call(this, nome, 'Dev', salario);
    this.setor = setor;
}

//Define o prototipo de Gerente e Dev para ser um novo objeto criado a partir de Colaborador
Gerente.prototype = Object.create(Colaborador.prototype);
Dev.prototype = Object.create(Colaborador.prototype);

//instancia de Colaborador
const estagiario = new Colaborador('Beto', 'Estagiario', 1900);
console.log(estagiario);

const gerente = new Gerente('Pedro', 9000, 'Tech');
console.log(gerente.getNome());

const dev = new Dev('Lucas', 400, 'Tech');
console.log(dev.getNome());