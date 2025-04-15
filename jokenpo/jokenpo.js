let escolha = ""
let l = ["pedra","papel","tesoura"]
function escolha_joagador(escolheu){
    escolha = escolheu
    resultado()
}
function resultado(){
    let robo = l[Math.floor(Math.random() * 3)]
    
    if(escolha == "pedra" && robo == "tesoura" || escolha == "papel" && robo == "pedra"  || escolha == "tesoura" && robo == "papel"){
        alert(`Você venceu!!! a maquina escolheu:${robo}, você escolheu:${escolha}`)
    }
    else if( escolha == robo){
        alert(`Empate, a maquina escolheu:${robo}, você escolheu:${escolha}`)
    }
    else{
        alert(`Você perdeu!!! a maquina escolheu:${robo}, você escolheu:${escolha}`)
    }
}