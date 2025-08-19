function validar() {
  let form = document.nomeform;

  let nome = form.elements["nome"].value.trim();
  if (nome.length < 10) {
    alert("O nome deve ter pelo menos 10 caracteres.");
    return false;
  }

  let email = form.elements["email"].value.trim();
  if (email === "") {
    alert("Por favor, insira um email válido.");
    return false;
  }

  let comentario = form.elements["comentario"].value.trim();
  if (comentario.length < 20) {
    alert("O comentário deve ter no mínimo 20 caracteres.");
    return false;
  }

  let pesquisaSelecionada = form.elements["pesquisa"].value;
  if (!pesquisaSelecionada) {
    alert("Selecione uma opção de pesquisa.");
    return false;
  }

  if (pesquisaSelecionada === "sim") {
    alert("Que bom que você voltou a visitar esta página!");
  } else {
    alert("Volte sempre a esta página!");
  }

  return true; 
}
