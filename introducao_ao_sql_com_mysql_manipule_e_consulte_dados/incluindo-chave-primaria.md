# Incluindo chave primária em uma tabela já existente

```sql
ALTER TABLE [db_name].[table_name] ADD PRIMARY KEY ([column_name]);
```

> Após a execução do comando, a tabela usará a coluna informada como chave primária, e os itens dessa coluna não poderão se repetir.

**A boa prática diz que sempre que uma tabela for criada, nós devemos especificar qual é a chave primária.**

## Qual o tipo de CONSTRAINT que devemos utilizar para a criação de uma chave primária?
> PRIMARY KEY