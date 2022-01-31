// *interpretação de código // 

/* 10 

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}


A) seo numero for divisivel por 2 ele responde "passou no teste"
se tiver sobra, e não for um numero par ele responde " não passou no teste" 

b) numeros par somente 

c) numeros impares que quando divididos por 2 tem uma sobra maior que 0 

*/

/* 2 ) 

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

a) no prompt tu cita qual a fruta, e switch responde com o valor, 
no console ele imprime o valor real, caso não seja nenhuma das frutas 
citadas no switch o valor será sempre 5

b) O preço da fruta maçã é R$ 2.25

c) undefined - pois o valor real da pera entra em conflito com o preço de default. 
*/

/* 3) 

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

a) na primeira linha pede-se um numero ao usuario, este será definido como 
um numero, sem alterações pois está em uma variavel const. 

b) 
será impresso Essa mensagem é secreta 

c) acredito que não haverá erro, pois será printado somente o console.log
que está fora da função 
*/ 

// ESCRITA DE CÓDIGO //

//1//

/*const idade = Number(prompt("qual a sua idade?"))

const permissão = idade > 18 

if (permissão) {
    console.log ("você já pode dirigir")
} 
else { 
    console.log ("você ainda não pode dirigir")
}

//2//

const nomeAluno = prompt("insira aqui seu nome") 
const turnoAluno = prompt("Em qual turno você estuda ? use M para matutino - manhã V para vespertino-tarde N para Noturno").toLocaleUpperCase
if (turnoAluno === "M") {
  console.log (`Bom dia ${nomeAluno}`)
} else if (turnoAluno === "V") {
  console.log (`Boa tarde ${nomeAluno}`)
} else {
  console.log(`Boa noite ${nomeAluno}`)
} 

//3//

const nomeAluno = prompt("insira aqui seu nome") 
const turnoAluno = prompt("Em qual turno você estuda ? use M para matutino - manhã V para vespertino-tarde N para Noturno")

switch (turnoAluno) {
  case `M`:
    console.log (`Bom dia ${nomeAluno}`)
    break
  case `V`: 
    console.log (`Boa tarde ${nomeAluno}`)
    break
  case `N`: 
    console.log (`Boa noite ${nomeAluno}`) 
} */

// // 4 //

// const generoFilme = prompt("qual genero de filme vocês assistirão ?")
// const preçoFilme = prompt("qual o valor de filme vocês assistirão ?")
// if (generoFilme === "fantasia" && preçoFilme <= 15) {
//   console.log("Bom filme!!!")
// } else {
//   console.log("escolha outro filme")
// }

// desafio 1 

const generoFilme = prompt("qual genero de filme vocês assistirão ?")
const preçoFilme = prompt("qual o valor de filme vocês assistirão ?")
if (generoFilme === "fantasia" && preçoFilme <= 15) {
  const lanchinho = prompt("qual lanchinho vcs vão comprar ?")
  console.log(`Bom filme!!! e aproveite seu ${lanchinho}`)
} else {
  console.log("escolha outro filme")
}
