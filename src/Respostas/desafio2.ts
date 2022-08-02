
enum Trabalho {
    Atriz,
    Padeiro,
    Carpinteiro,
    Desenvolvedor,
    Professor
}

type Humano = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

let pessoa1: Humano = {
    nome: 'maria',
    idade: 29,
    profissao: Trabalho.Atriz
};

let pessoa2: Humano = {
    nome: 'roberto',
    idade: 19,
    profissao: Trabalho.Padeiro
};

let pessoa3: Humano = {
    nome: 'laura',
    idade: 32,
    profissao: Trabalho.Atriz
};

let pessoa4: Humano = {
    nome: "carlos",
    idade: 19,
    profissao: Trabalho.Padeiro
}

let pessoa5: Humano = {
    nome: 'Carla',
    idade: 39,
    profissao: Trabalho.Professor
}

let pessoa6: Humano = {
    nome: 'Leli',
    idade: 18,
    profissao: Trabalho.Desenvolvedor
}