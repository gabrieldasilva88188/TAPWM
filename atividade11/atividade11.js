function Retangulo(base, altura) {
  this.base = base;
  this.altura = altura;

  this.calcularArea = function () {
    return this.base * this.altura;
  };
}

function calcularArea() {
  const base = parseFloat(document.getElementById("base").value);
  const altura = parseFloat(document.getElementById("altura").value);

  if (isNaN(base) || isNaN(altura)) {
    document.getElementById("areaResultado").innerText =
      "Informe valores válidos.";
    return;
  }

  const r = new Retangulo(base, altura);
  document.getElementById("areaResultado").innerText =
    "Área: " + r.calcularArea();
}

class Conta {
  constructor(nome, banco, numeroConta, saldo) {
    this._nome = nome;
    this._banco = banco;
    this._numeroConta = numeroConta;
    this._saldo = saldo;
  }

  get nome() {
    return this._nome;
  }
  get banco() {
    return this._banco;
  }
  get numeroConta() {
    return this._numeroConta;
  }
  get saldo() {
    return this._saldo;
  }

  set nome(v) {
    this._nome = v;
  }
  set banco(v) {
    this._banco = v;
  }
  set numeroConta(v) {
    this._numeroConta = v;
  }
  set saldo(v) {
    this._saldo = v;
  }
}

class Corrente extends Conta {
  constructor(nome, banco, numeroConta, saldo, saldoEspecial) {
    super(nome, banco, numeroConta, saldo);
    this._saldoEspecial = saldoEspecial;
  }

  get saldoEspecial() {
    return this._saldoEspecial;
  }
  set saldoEspecial(v) {
    this._saldoEspecial = v;
  }
}

class Poupanca extends Conta {
  constructor(nome, banco, numeroConta, saldo, juros, dataVencimento) {
    super(nome, banco, numeroConta, saldo);
    this._juros = juros;
    this._dataVencimento = dataVencimento;
  }

  get juros() {
    return this._juros;
  }
  get dataVencimento() {
    return this._dataVencimento;
  }

  set juros(v) {
    this._juros = v;
  }
  set dataVencimento(v) {
    this._dataVencimento = v;
  }
}

function mostrarContas() {
  const contaC = new Corrente("Lucas", "Banco A", "1234", 1500, 500);
  const contaP = new Poupanca(
    "Ana",
    "Banco B",
    "5678",
    3000,
    0.015,
    "15/12/2025"
  );

  const resultado = `
      <h3>Conta Corrente</h3>
      Nome: ${contaC.nome}<br/>
      Banco: ${contaC.banco}<br/>
      Nº Conta: ${contaC.numeroConta}<br/>
      Saldo: R$ ${contaC.saldo}<br/>
      Saldo Especial: R$ ${contaC.saldoEspecial}<br/><br/>
  
      <h3>Conta Poupança</h3>
      Nome: ${contaP.nome}<br/>
      Banco: ${contaP.banco}<br/>
      Nº Conta: ${contaP.numeroConta}<br/>
      Saldo: R$ ${contaP.saldo}<br/>
      Juros: ${contaP.juros * 100}%<br/>
      Vencimento: ${contaP.dataVencimento}
    `;

  document.getElementById("contaResultado").innerHTML = resultado;
}
