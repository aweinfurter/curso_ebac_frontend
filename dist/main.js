"use strict";

function Aluno(nome, nota) {
  this.nome = nome;
  this.nota = nota;
}
var alunos = [new Aluno('João', 8), new Aluno('Maria', 6), new Aluno('Pedro', 5), new Aluno('Julia', 9), new Aluno('Lucas', 7), new Aluno('Fernanda', 4), new Aluno('Roberto', 6), new Aluno('Mariana', 10), new Aluno('Felipe', 2), new Aluno('Ana', 8)];
var alunosAprovados = alunos.filter(function (aluno) {
  return aluno.nota >= 6;
});
console.log(alunosAprovados);