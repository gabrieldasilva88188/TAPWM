function teste(){
    let n1 = parseInt(document.getElementById("i1").value)
    let n2 = parseInt(document.getElementById("i2").value)
    let n3 = parseInt(document.getElementById("i3").value)
    let p = document.getElementById("p").value
    let a1 = []
    if(!isNaN(n1) && !isNaN(n2) && !isNaN(n3)){
        let a = [n1,n2,n3]
        f1.apply(null,a)
    }
    if(p != "" && p.length == 5){
        for(let x = 0; x!=5;x++){
            a1.push(p[x])
        }
        f2.apply(null,a1)
    }
    function f1(){
        soma = 0
        q1 = arguments[1] * arguments[1]
        q2 = arguments[2] * arguments[2]
        for(let x = 0; x != arguments.length;x++){
            soma += arguments[x]
        }
        alert(`a soma dos três números é igual: ${soma}\no quadrado do segundo é ${q1}\no quadrado do terceiro é ${q2}`)
    }
    function f2(){
        r = 0
        l = []
        for(let x = 0;x != 11;x++){
            palavra = ""
            for(i = 0;i <=5;i++){
                palavra += arguments[Math.floor(Math.random() * 4)]
            }
            if(r == 3){
                alert("não foi possivel criar 10 palavras diferentes")
            }
            if(l.includes(palavra)){
                if(x!= 0){
                    x-1
                }
                r += 1
            }
            else{
                l.push(palavra)
                r=0
            }
        }
        alert(l)
    }
}