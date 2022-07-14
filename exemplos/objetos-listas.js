"use strict";
const persoa = {
    nome: 'Mariana',
    idade: 20,
    profissao: 'desenvolvedora'
};
persoa.idade = 25;
const andre = {
    nome: 'Andre',
    idade: 25,
    profissao: 'pintor'
};
const paula = {
    nome: 'paula',
    idade: 25,
    profissao: 'Densevolvedora'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Proferssora"] = 0] = "Proferssora";
    Profissao[Profissao["atriz"] = 1] = "atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["jogadoraDeFutebol"] = 3] = "jogadoraDeFutebol";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 23,
    Profissao: Profissao.Desenvolvedora
};
const jessica = {
    nome: 'Jessica',
    idade: 28,
    Profissao: Profissao.Desenvolvedora,
    materias: ['Matemática discreta', 'programação']
};
const monica = {
    nome: 'monica',
    idade: 28,
    materias: ['Matemática discreta', 'programação']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(monica.materias);
