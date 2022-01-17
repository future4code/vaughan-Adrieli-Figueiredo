```function calculaNota(ex, p1, p2){
  let média = (ex + p1 + p2)/3
  let conceito 
  if (média >= 9) { conceito = "A" 
  } 
  if (média < 9, média >= 7.5) { conceito = "B"
  }
  if (média < 7.5, média >= 6) { conceito = "C"
  } 
  if (média < 6) { conceito = "D" 
  }
 return conceito
}