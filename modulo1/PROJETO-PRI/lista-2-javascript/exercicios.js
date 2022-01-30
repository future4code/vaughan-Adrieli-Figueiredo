// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
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
    let arrayPar = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            arrayPar.push(array[i]);
        }
    }
    return arrayPar;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayElevado = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            arrayElevado.push(array[i] * array[i]); // tentei usar math.pow e n funciona ;(
        }
    }
    return arrayElevado;

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
// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero
    let menorNumero
    if (num1 > num2) {
        maiorNumero = num1;
        menorNumero = num2;
    } else {
        maiorNumero = num2;
        menorNumero = num1;
    }

    maiorDivisivel = maiorNumero % menorNumero === 0

    diferenca = maiorNumero - menorNumero

    return {
        maiorNumero: maiorNumero,
        maiorDivisivelPorMenor: maiorDivisivel,
        diferenca: diferenca
    };

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    const arrayPrimeirosPares = [];
    for (let i = 0; arrayPrimeirosPares.length < n; i++) {
        if (i % 2 === 0) {
            arrayPrimeirosPares.push(i);
        }
    }
    return arrayPrimeirosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA !== ladoB && ladoB !== ladoC && ladoC !== ladoA) {
        return ('Escaleno')
    } else if (ladoA === ladoB && ladoB === ladoC && ladoC === ladoA) {
        return ('Equilátero')
    } else {
        return ('Isósceles')
    }
}

function retornaSegundoMaiorESegundoMenor(array) {
    let menor = Infinity;
    let segundoMenor = Infinity;
    let maior = -Infinity;
    let segundoMaior = -Infinity;
    let ArrayDosNovos = [];

    for (let i of array) {
        if (i < menor) {
            menor = i;
        }
        if (i > maior) {
            maior = i;
        }
    }

    for (let i of array) {
        if (i < segundoMenor && i !== menor) {
            segundoMenor = i;
        }
        if (i > segundoMaior && i !== maior) {
            segundoMaior = i;
        }
    }
    ArrayDosNovos.push(segundoMaior);
    ArrayDosNovos.push(segundoMenor);

    return ArrayDosNovos;
}


// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    let atoresConcat = "";
    for (let i = 0; i < filme.atores.length; i++) {
        if (i === filme.atores.length - 1) {
            atoresConcat += filme.atores[i];
        } else {
            atoresConcat += filme.atores[i] + ", ";
        }
    }
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${atoresConcat}.`;
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    return {
        ...pessoa,
        nome: "ANÔNIMO"
    }
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let pessoasAutorizadas = [];
    for (let pessoa of pessoas) {
        if (pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60) {
            pessoasAutorizadas.push(pessoa);
        }
    }
    return pessoasAutorizadas;
}


// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let pessoasNaoAutorizadas = [];
    for (let pessoa of pessoas) {
        if (pessoa.altura <= 1.5 || pessoa.idade <= 14 || pessoa.idade >= 60) {
            pessoasNaoAutorizadas.push(pessoa);
        }
    }
    return pessoasNaoAutorizadas;
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
console.log(contas)
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) { }