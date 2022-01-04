// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
  const alturaRetangulo = prompt("insira a altura aqui")
  const larguraRetangulo = prompt("insira a largura aqui")
  const areaRetangulo = alturaRetangulo*larguraRetangulo
  return console.log (areaRetangulo)
} 
// EXERCÍCIO 02
function imprimeIdade() {
 let anoAtual = Number(prompt("insira aqui o ano atual"))
 let anoDeNascimento = Number(prompt("insira aqui seu ano de nascimento"))
 let idadeAtual = Number(anoAtual-anoDeNascimento)
 return console.log (idadeAtual)
} 
// EXERCÍCIO 03
function calculaIMC() { 

const peso = Number(prompt("insira seu peso aqui"))
const altura = Number(prompt("insira sua altura aqui"))
const imc = peso/(altura*altura)

return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt ("insira aqui seu nome")
  const idade = prompt ("insira aqui sua idade")
  const emailUser = prompt ("insira aqui seu email") 

  return console.log (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${emailUser}.`)
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("insira sua primeira cor favorita")
  const cor2 = prompt("insira aqui sua segunda cor favorita")
  const cor3 = prompt("insira aqui sua terceira cor favorita")

  const favColor = [cor1,cor2,cor3]
  
  return console.log (favColor)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const palavra = prompt ("insira uma palavra minuscula")
  
  return palavra.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const custoTotal = prompt("qual o custo do evento ?")
  const valorIngressoUnit = prompt("qual o custo unitario dos ingressos")

  const minLucro = custo/valorIngresso

  return minLucro
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
    const comparação = string1.length === string2.length 

    return comparação
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {

  const array1 = prompt("insira uma fruta")
  const array2 = prompt("insira uma fruta")
  const array3 = prompt("insira uma fruta")

  const array = array1,array2,array3
  const itemArray = item[0]
  return itemArray
}

// EXERCÍCIO 09 
function retornaPrimeiroElemento(array) {

  let primeiroItem = array.shift()

  return primeiroItem
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
   let ultimoItem = array.pop()

    return ultimoItem
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
 arrayNova = array.reverse()

 return arrayNova
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  let igualdade = string1.toUpperCase() === string2.toUpperCase()
  console.log (igualdade)
  return igualdade
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}