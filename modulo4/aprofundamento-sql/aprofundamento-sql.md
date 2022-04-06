exercicio 1 
*******************************************************************************
a)

```sql
ALTER TABLE Actor DROP COLUMN salary;
```

b)

```sql
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```

c) **

```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
```

d) *Agora,  altere a coluna `gender` da tabela `ACTOR` para que ele aceite strings com até 100 caracteres*