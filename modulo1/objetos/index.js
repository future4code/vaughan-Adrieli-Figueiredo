// exercicios de interpretação 
/*
1 - 

console.log(filme.elenco[0]) => "Matheus Nachtergaele"

console.log(filme.elenco[filme.elenco.length - 1]) => "Matheus Nachtergaele", "Denise Fraga", 
        "Virginia Cavendish"

console.log(filme.transmissoesHoje[2]) => {canal: "Globo", horario: "14h"} 

2 - a) 
console.log(cachorro) => {
    nome: "Juca", 
    idade: 3, 
    raca: "SRD" }

console.log(gato) =>
{
    nome: "Juba",
    idade: 3, 
    raca: "SRD" }

console.log(tartaruga) => 
{
    nome: "Jubo", 
    idade: 3, 
    raca: "SRD" } 
    
    b) 
    os tres pontos equivale a uma replica da estrutura, 
    e em seguida vem as alterações, conhecida como spread. 
    
    3) 
    a) vai ser impresso false e false 
    b) pois backender é um booleano false e altura é uma informação que não está
    armazenada no objeto nem em outra sintaxe fora do objeto.

    */

//exercicios de escrita de codigo
// 1 
// A)
const pessoa = {
    nome: "Adrieli",
    apelidos: [" Dri ", " drika ", " dri dnv "]
}
function dados(pessoa) {
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`)
}

dados(pessoa)

//B)    
const pessoa2 = {
    ...pessoa,
    apelidos: ["1 ", "Pitty ", "2 "]
}

dados(pessoa2)

// 2 
// A) 

const cadpessoa1 = {
    nome: "Leticia Nunes Vieira",
    idade: 22,
    profissão: "auxiliar juridico"
}

const cadpessoa2 = {
    nome: "Edivanildo Belarmino de Souza",
    idade: 23,
    profissão: "embarcador"
}

function dadosPessoas(cadpessoa1) {
    return [
        cadpessoa1.nome,
        cadpessoa1.nome.length,
        cadpessoa1.idade,
        cadpessoa1.profissão,
        cadpessoa1.profissão.length
    ]
}
console.log(dadosPessoas(cadpessoa1))


// 3.a) 
const carrinho = []

    
// b) 
 const melão ={
    fruta: "melão",
    disponibilidade : true
 }

 const banana ={
    fruta: "banana", 
    disponibilidade : true
 }

 const kiwi ={
    fruta: "kiwi", 
    disponibilidade : true
 }
    
//c)
    function meuCarrinho(fruta) {
        return [
        carrinho.push(fruta)
        ]
    }
    
    meuCarrinho(melão)
    meuCarrinho(banana)
    meuCarrinho(kiwi)

//d)
    console.log([melão, kiwi, banana])