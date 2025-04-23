var sexo = [0,0,0]
var sex = ""
var idade = [];
var somaidade = 0
var opiniao = [0,0,0,0];

function regitrar(){
    var anos = parseInt(document.getElementById("idade").value);
    idade.push(anos)
    sex = document.getElementById("sexo").value;
    if(sex == "F"){
        sexo[0]+=1
    }
    else if(sex == "M"){
        sexo[1]+=1
    }
    else{
        sexo[2]+=1
    }
    var nota = document.getElementById("nota").value;
    if(nota == "1"){
        opiniao[0]+=1
    }
    else if(nota == "2"){
        opiniao[1]+=1
    }
    else if(nota == "3"){
        opiniao[2]+=1
    }
    else {
        opiniao[3]+=1
    }
    for(i = 0; i!= idade.length; i++){
        somaidade += idade[i]
    }
}
function mostra(){
alert(`Média idade:${somaidade/idade.length}\n`+
    `Mais velho:${Math.max(...idade)}\n`+
    `Mais novo:${Math.min(...idade)}\n`+
    `Quantidade de pessoas que respondeu pessimo:${opiniao[0]}\n`+
    `Porcentagem de quem respondeu ótimo e bom:${((opiniao[3]+opiniao[2])/(opiniao[1]+opiniao[0]+opiniao[2]+opiniao[3])*100).toFixed(2)}%`
)
}