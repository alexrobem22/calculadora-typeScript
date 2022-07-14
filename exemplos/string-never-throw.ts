let unknownValor: unknown;

unknownValor = 3;
unknownValor = 'opa';
unknownValor = true;
unknownValor = 'vai sim';

let stringTest2: string = 'agora vai';

if (typeof unknownValor === 'string') {
    stringTest2 = unknownValor;
}

//never e um codigo que numca e finalizado
function jogaErro(erro: string, codigo: number): never{
    throw { error: erro, code: codigo};
}

jogaErro('deu erro', 500)
