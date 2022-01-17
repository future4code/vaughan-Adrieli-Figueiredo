// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    const tamanhoArray = array.length

    return tamanhoArray
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    const arrayInverso = array.reverse()

    return arrayInverso
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    const arrayOrdenado = array.sort(function compararNumeros(a, b) {
        return a - b;
    })
    return arrayOrdenado
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {

}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    console.log(array)
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let i = 0
    let maior = -Infinity
    while (i < array.length) {
        if (array[i] > maior) {
            maior = array[i]
        }
        i++
    }
    return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    console.log(num1, num2)
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    console.log(n)
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    let triangulo = [ladoA,ladoB,ladoC]
    while (let i =0, i <= triangulo.length-1, i++){
        if(triangulo[0] != triangulo[1] != triangulo[2] ){
            console.log('este é um triangulo escaleno')
        } if( triangulo[0] == triangulo[1] != triangulo[2]){
            console.log('este é um triangulo isósceles')
        } if (triangulo[0] == triangulo[1] == triangulo[2] ){
            console.log('este é um triangulo equilatero')
        } 
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    console.log(array)
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    
    console.log(chamada)
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}