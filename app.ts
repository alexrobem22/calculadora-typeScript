// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

type campoSaldo = string;

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;//HTMLInputElement fala para o typescript que e um input
let campoSaldo = document.getElementById('campo-saldo')!;

let valor = 0;


campoSaldo.innerHTML = "0"

function somarAoSaldo(soma: number){
    
    valor += soma;

   campoSaldo.innerHTML = valor.toString();

   limparvalor();
}

function limparvalor(){
    soma.value = " ";
}

function limparSaldo() {
    campoSaldo.innerHTML = '0';
    valor = 0;
}

botaoAtualizar?.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});

botaoLimpar?.addEventListener('click', function () {
    limparSaldo();
});

/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */