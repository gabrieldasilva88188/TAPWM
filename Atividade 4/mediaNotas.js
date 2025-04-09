function nota(){
let nome = prompt("coloque o nome do aluno:")
let nota1 = parseFloat(prompt("coloque a primeira nota:"))
let nota2 = parseFloat(prompt("coloque a segunda nota:"))
let nota3 =  parseFloat(prompt("coloque a terceira"))

alert(`a media das notas do ${nome} é ${(nota1+nota2+nota3)/3}`)
}