// exercicio de interpretação de codigo 

// 1) a) vai printar o array original sem nenhuma alteração  
// 2) a) vai criar um array somente com o nome delas
// 3) a) vai imprimir um novo array com todo mundo que nao tem o apelido chijo

// exercicio de escrita de codigo 

const pets = [{
    nome: "Lupin",
    raca: "Salsicha"
},
{
    nome: "Polly",
    raca: "Lhasa Apso"
},
{
    nome: "Madame",
    raca: "Poodle"
},
{
    nome: "Quentinho",
    raca: "Salsicha"
},
{
    nome: "Fluffy",
    raca: "Poodle"
},
{
    nome: "Caramelo",
    raca: "Vira-lata"
},
];

// //  1 
// //  a)

// const nomePet = pets.map((pets) => {
//     return (pets.nome)
// });
// console.log(nomePet)

// // b)

// const petSalsicha = pets.filter((pets) => {
//     return pets.raca === "Salsicha" // sofri com esse S maiusculo ... 
// });

// console.log(petSalsicha)

// // c)

// const petPudinho = pets.filter((pets) => {
//     return (pets.raca === "Poodle")
// });
// console.log(petPudinho)

// const promo = petPudinho.map((petPudinho) => {
//     return `Você ganhou um desconto de 10% para tosar o/a ${petPudinho.nome}!!!`

// });
// console.log (promo)

// // 2) 

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

//  a) 

const nomeProduto = produtos.map((produtos) => {
    return (produtos.nome)
});
console.log(nomeProduto)

// b)
const Descontao = produtos.map((produto) => {
       return{nome: produto.nome , preco: (produto.preco *0.95).toFixed(2)}
});
console.log(Descontao)

// c)
const prodBebida = produtos.filter((produtos) => {
    return produtos.categoria === "Bebidas"
});
console.log(prodBebida)

// d)
const prodYpê = produtos.filter((produtos) => {
    return produtos.nome.includes("Ypê") 
});
console.log(prodYpê)

// e) 
const prodValor = prodYpê.map((produtos) => {
    return `Compre ${produtos.nome} por ${produtos.preco}`
});
console.log(prodValor)

