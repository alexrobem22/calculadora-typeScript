function somarValoresNumericos(numero1: number, numero2: number): number{

    return numero1 + numero2;
}

console.log(somarValoresNumericos(1, 2))

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

function printaValoresNumericos(numero1: number, numero2: number): void{

    console.log(numero1 + numero2);
}

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
function somarValoresNumericos2(numero1: number, numero2: number, callback: (numero: number) => number): number{

    let resultado = numero1 + numero2;

    return callback(resultado);
}

function aoQuadrado(numero: number): number {

    return numero * numero;
}

function dividirPorEleMesmo(numero: number): number {

    return numero / numero;
}

console.log(somarValoresNumericos2(1, 3, dividirPorEleMesmo))

