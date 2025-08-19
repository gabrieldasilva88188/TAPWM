function transformarTexto(tipo) {
      let input = document.getElementById("texto");
      if (tipo === "maiuscula") {
        input.value = input.value.toUpperCase();
      } else if (tipo === "minuscula") {
        input.value = input.value.toLowerCase();
      }
    }