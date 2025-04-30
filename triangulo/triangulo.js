function tri(){
    a = parseInt(document.getElementById("l1").value)
    b = parseInt(document.getElementById("l2").value)
    c = parseInt(document.getElementById("l3").value)
    
    if(a > b-c && a < b+c && b > a-c && b < a+c && c > a-b && c < a+b){
        if(a == b && a == c && b == c){
            alert("é um triângulo equilátero")
        }
        else if(a == b || a == c || b == c){
            alert("é um triângulo isóscele")
        }
        else{
            alert("é um triângulo escaleno")
        }
    }
    else{
        alert("não é um triângulo")
    }
}