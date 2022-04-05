execicio 1 
*******************************************************************************
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
```
*******************************************************************************
*a)
VARCHAR - STRING COM NUMERO DE CARACTERES LIMITADOS DENTRO DE PARENTESES // NO CASO ACIMA 255
DATE - DATA NORMAL // PODERIA SER DATETIME SE FOSSE REGISTRO DE MOMENTO ESPECIFICO
NOT NULL - PRECISA SER DECLARADO ALGO ALI, NÃO PODE SER UMA COLUNA OU LINHA VAZIA 
PRIMARY KEY - CHAVE DE IDENTIFICAÇÃO PARA TODOS OS ITENS 
*******************************************************************************
*b) - não entendi muito bem, mas pesquisando sobre o comando nao achei nada sobre ele. 
*******************************************************************************
*c)
vai exibir uma tabela descritiva, com a field (id, nome, salary, birth_date, gender), type (varchar e nro de caracteres, float, date), se é null ou não, tipo de key, se é default ou se tem extras;

===============================================================================

execicio 2
*******************************************************************************

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);
*******************************************************************************
*a)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
*******************************************************************************
b) *Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior `002`. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.*



execicio 3



execicio 4



execicio 5




execicio 6



execicio 7





