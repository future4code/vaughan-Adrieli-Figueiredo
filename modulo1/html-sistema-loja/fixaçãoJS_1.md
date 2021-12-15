```function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
    let salarioFixo = 2000;
    let comissãoFixa = qtdeCarrosVendidos * 100;
    let comissãoVariavel = valorTotalVendas * 0.05;
    
    let salarioFinal = salarioFixo + comissãoFixa + comissãoVariavel
    return salarioFinal
    }