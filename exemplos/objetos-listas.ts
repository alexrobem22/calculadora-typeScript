const persoa = {
    nome: 'Mariana',
    idade: 20,
    profissao: 'desenvolvedora'
}

persoa.idade = 25;

const andre: {nome: string, idade: number, profissao: string} = {

    nome: 'Andre',
    idade: 25,
    profissao: 'pintor'
}

const paula: {nome: string, idade: number, profissao: string} = {

    nome: 'paula',
    idade: 25,
    profissao: 'Densevolvedora'
}

enum Profissao {
    Proferssora,
    atriz,
    Desenvolvedora,
    jogadoraDeFutebol
}

interface Pessoa {
    nome: string,
    idade: number,
    Profissao?: Profissao
}

interface Estudante extends Pessoa{
    materias: string[]
}

const vanessa: Pessoa = {

    nome: 'Vanessa',
    idade: 23,
    Profissao: Profissao.Desenvolvedora
}

const jessica: Estudante = {
    nome: 'Jessica',
    idade: 28,
    Profissao: Profissao.Desenvolvedora,
    materias: ['Matemática discreta', 'programação']
}

const monica: Estudante = {
    nome: 'monica',
    idade: 28,
    materias: ['Matemática discreta', 'programação']
}

function listar(lista: string[]){
    for (const item of lista){
        console.log('- ', item);
    }
}

listar(monica.materias);
