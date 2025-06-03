let Funcionario1 = {
  matricula: "001",
  nome: "Ana Silva",
  funcao: "Analista",
};

console.log(Funcionario2);
let Funcionario2 = new Object();
Funcionario2.matricula = "002";
Funcionario2.nome = "Carlos Souza";
Funcionario2.funcao = "Desenvolvedor";

console.log(Funcionario2);

function Funcionario(matricula, nome, funcao) {
  this.matricula = matricula;
  this.nome = nome;
  this.funcao = funcao;
}

let Funcionario3 = new Funcionario("003", "Marina Oliveira", "Gerente");

console.log(Funcionario3);