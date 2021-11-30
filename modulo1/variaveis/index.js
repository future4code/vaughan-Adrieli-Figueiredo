let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)

// em console.log será impresso (10, 5) //;

let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)

// em console.log será impresso (20, b, 10);

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

/* alterando o codigo pra sua real proposta, 
ele ficaria conforme o exemplo abaixo: */

const p = prompt ("quantas horas você trabalha por dia ?")
const t = prompt ("quanto você recebe por dia ?")
alert("você recebe ${t/p} por hora")

