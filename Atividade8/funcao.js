function maiorDeTres(a, b, c) {
    return Math.max(a, b, c);
  }
  
  function ordenarCrescente(a, b, c) {
    return [a, b, c].sort((x, y) => x - y);
  }
  
  function ehPalindromo(str) {
    const formatada = str.toLowerCase().replace(/\s/g, '');
    const invertida = formatada.split('').reverse().join('');
    return formatada === invertida;
  }
  
  function verificarSubconjunto(palavra1, palavra2) {
    if (!palavra1 || !palavra2) {
      return "erro";
    }
  
    return palavra1.includes(palavra2) ? "é um subconjunto" : "não é um subconjunto";
  }
  
  alert("maior de três 3 7 5: " + maiorDeTres(3, 7, 5)); 
  alert("ordenar Crescente 9 2 5: " + ordenarCrescente(9, 2, 5)); 
  alert("é Palindromo Ame a ema: " + ehPalindromo("Ame a ema")); 
  alert("verificar subconjunto programação grama: " + verificarSubconjunto("programação", "grama")); 
  alert("verificar subconjunto casa asa: " + verificarSubconjunto("casa", "asa")); 
  alert("verificar subconjunto dada asa: " + verificarSubconjunto("dada", "asa")); 
  