// // interpretação de codigo 

// //1 será impresso no console valor +1 até 5 

//  2 a) vai ser impresso no console todos os numeros maiores q 18

// b) declara q indice é igual a 0 fora da função, dentro do if no console pede pra que imprima o indice, fora de if declara indice++ 
// pra q sempre q a função fizer loop adicione 1 ao indice. 

// 3) quantidadeTotal definirá quantas vezes * será impresso, desde que quantidadeTotal seja maior que quantidadeAtual. 
// resposta do console ficará 
// *
// **
// ***
// **** - pois foi digitado 4 na primeira const.



// escrita de codigo 

// 1 a)

// const numeroDeBichinhos = Number(prompt("quantos bichinhos você tem ?"))
// if (numeroDeBichinhos === 0) {
//     console.log("você pode adotar seu primeiro bichinho")
// } else if (numeroDeBichinhos > 0) {
//     let array = []
//    for (i= 0; i < numeroDeBichinhos; i++) {
//         nomeBichinho = prompt("qual o nome do seu bichinho ?")
//         array.push(nomeBichinho)
//     }
//     console.log(array)
// }

// 2)
// a) Escreva um programa que **imprime** cada um dos valores do array original.
// const arrayImaginario = [1, 3, 5, 7, 10, 20, 30, 40, 50]
// function imprimeValor (arrayImaginario) {
//     for (let valor of arrayImaginario)
//     {
//      console.log (valor)
//     }
// }
// imprimeValor(arrayImaginario)

// b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10
// const arrayImaginario = [1, 3, 5, 7, 10, 20, 30, 40, 50]
// function imprimeValor (arrayImaginario) {
//     for (let valor of arrayImaginario)
//     {
//      console.log (valor/10)
//     }
// }
// imprimeValor(arrayImaginario)
// c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original 
// e **imprima** esse novo array
const arrayImaginario = [1, 3, 5, 7, 10, 20, 30, 40, 50]
const arrayPar = []
function imprimeValor(arrayImaginario) {
    for (let valor of arrayImaginario) {
        const valorPar = valor % 2
        arrayPar.push(valorPar)
        
    } 
    console.log(arrayPar)
} 
imprimeValor(arrayPar)

// d) Escreva um programa que **crie** um novo array contendo strings,
// da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.

// e) Escreva um programa que imprima no console o maior e o menor números contidos no array original