const qtdeCarrosVendidos = prompt("quantos carros vc vendeu ? ")
const valorTotalVendas = prompt("qual foi o valor total das suas vendas ?")

function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 const salarioFinal = Number(2000 + qtdeCarrosVendidos*100+ valorTotalVendas*0,05))
 return salarioFinal
 console.log (salarioFinal)
   }

   