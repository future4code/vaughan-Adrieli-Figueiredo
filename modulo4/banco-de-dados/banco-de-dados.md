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
*b) - SHOW DATABASE - MOSTRA O BANCO DE DADOS QUE ESTÁ SENDO USADO
SHOW TABLES - MOSTRA AS TABELAS QUE ESTÃO SENDO USADAS NAQUELE BANCO DE DADOS. 
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
b) Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
 duplicidade na chave primaria 002.
*******************************************************************************
c) Error Code: 1136. Column count doesn't match value count at row 1
faltou declarar a coluna de data de nascimento e o genero. 
*******************************************************************************
d) Error Code: 1364. Field 'name' doesn't have a default value
a linha nome tem valor indefinido. 
*******************************************************************************
e)Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
data foi colocada de forma errada, precisava estar entre aspas.
===============================================================================
execicio 3



execicio 4



execicio 5




execicio 6



execicio 7





