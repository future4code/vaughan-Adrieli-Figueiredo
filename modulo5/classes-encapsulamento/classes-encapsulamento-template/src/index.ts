//Exercicio 1 

// Analise a classe `UserAccount` abaixo. Perceba quais propriedades são públicas e quais são privadas e responda as perguntas discursivas em comentários no arquivo `index.ts`

// a) *Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?*

// b) *Copie o código abaixo para o seu exercício de hoje; crie uma instância dessa classe 
//(dê o nome, cpf e idade que você quiser). Quantas vezes a mensagem `"Chamando o construtor 
//da classe User"` foi impressa no terminal?*

// c) *Como conseguimos ter acesso às propriedades privadas de uma classe?*

class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transactions[] = [];

  constructor(
     cpf: string,
     name: string,
     age: number,
  ) {
     console.log("Chamando o construtor da classe UserAccount")
     this.cpf = cpf;
     this.name = name;
     this.age = age;
  }
  let usuario1: UserAccount = new UserAccount (
     "01223445655",
     "serafina",
     72,
 )
}

// A) A principal função do construtor é padronizar e definir como um objeto será criado dentro de uma classe
// caso não seja definido, ele vem vazio. 

// B) usuario1

// C) somente dentro da classe eu tenho acesso as propriedades privadas