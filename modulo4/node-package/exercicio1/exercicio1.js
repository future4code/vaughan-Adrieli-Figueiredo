// a) atraves do arquivo package.json

// b)
// argumentos de entrada 
// const nome = process.argv[2]
// const idade = process.argv[3]


// console.log(`Olá, ${process.argv[2]}! Você tem ${process.argv[3]} anos.`)

//c)

// argumentos de entrada 
const nome = process.argv[2]
const idade = Number(process.argv[3])
 

console.log(`Olá, ${nome}! Você tem ${idade + Number(7)} anos.`)
