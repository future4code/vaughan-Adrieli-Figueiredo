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
*******************************************************************************

f) corrigido manualmente a entrada da juliana paes e criado lazaro ramos.
===============================================================================

execicio 3
*******************************************************************************
a) SELECT * FROM Actor
WHERE gender = "female";
*******************************************************************************
b) SELECT salary FROM Actor
WHERE name = "Tony Ramos";
*******************************************************************************
c) apareceu todas as colunas null, pq todos os inclusos na tabela possuem genero definido

*******************************************************************************
d) SELECT id, name, salary FROM Actor
WHERE salary <= 500000; 

*******************************************************************************
e) não funciona pq o nome da coluna é name e não nome, tbm n executaria por falta do ;. E tbm não é necessario o uso de select id, e sim somente o name. 

SELECT name from Actor 
WHERE id = "002";
===============================================================================
execicio 4

SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000

*******************************************************************************
a) basicamente se resume em selecione todas as linhas de Actor que tenham nomes iniciados em A ou J e que o salario seja acima de 300000
*******************************************************************************
b) SELECT * FROM Actor 
WHERE name NOT LIKE "A%" AND salary < 350000;
voltou tudo null 
*******************************************************************************
c) SELECT * FROM Actor 
WHERE name  LIKE "%G%" OR name LIKE "%g%" ;

*******************************************************************************
d) SELECT * FROM Actor 
WHERE name LIKE "%A%" 
OR name LIKE "%a%" 
OR name LIKE "%G%"
OR name LIKE "%g%"
AND salary BETWEEN 350000 AND 900000;

vem a gloria pires na resposta por causa do G no nome e desconsidera o valor do salario. 
===============================================================================
execicio 5
Terminamos de fazer um belo estudo sobre a tabela de Atores. Agora, você vai ficar mais independente. Precisamos criar a tabela de Filmes com as informações: id, nome, sinopse, data de lançamento e avaliação (que pode ser de 0 a 10)
*******************************************************************************
a) *Escreva a query que cria essa tabela. Para sinopse, utilize o tipo `TEXT`, pesquise sobre ele se precisar. Explique a query resumidamente.*

*Crie 4 filmes com as seguintes informações:* 
*******************************************************************************
- b) Clique aqui
    
    id: `001`
    
    Título: `Se Eu Fosse Você`
    
    Sinopse: `Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos`
    
    Data de lançamento: `06/01/2006`
    
    Avaliação: `7`

*******************************************************************************  
- c) Clique aqui
    
    id: `002`
    
    Título: `Doce de mãe`
    
    Sinopse: `Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela`
    
    Data de lançamento: `27/12/2012`
    
    Avaliação: `10`

*******************************************************************************  
- d) Clique aqui
    
    id: `003`
    
    Título: `Dona Flor e Seus Dois Maridos`
    
    Sinopse: `Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.`
    
    Data de lançamento: `02/11/2017`
    
    Avaliação: `8`

*******************************************************************************   
- e) Clique aqui
    
    Pesquise algum filme brasileiro e crie ele na tabela



===============================================================================
execicio 6
*******************************************************************************
Escreva uma query que:

a) Retorne o id, título e avaliação a partir de um id específico;
*******************************************************************************
b) Retorne um filme a partir de um nome específico;
*******************************************************************************
c) Retorne o id, título e sinopse dos filmes com avaliação mínima de `7`

===============================================================================
execicio 7
*******************************************************************************
Escreva uma query que:

a) Retorna um filme cujo título contenha a palavra `vida`
*******************************************************************************
b) Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer `TERMO DE BUSCA` para exemplificar.
*******************************************************************************
c) Procure por todos os filmes que já tenham lançado
*******************************************************************************
d) Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que `7`.
===============================================================================