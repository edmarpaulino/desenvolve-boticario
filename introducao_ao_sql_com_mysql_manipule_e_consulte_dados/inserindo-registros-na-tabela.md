# Inserindo registros na tabela

```sql
USE [db_name];
INSERT INTO [table_name] (
	[column_name],
	[column_name]
) VALUES (
	[column_value],
	[column_value]
)
```

A ordem das colunas a serem informadas podem ser aleatórias, já a ordem dos valores correspondentes as colunas devem seguir a ordem das colunas informadas acima:

```sql
USE [db_name];
INSERT INTO [table_name] (
	NOME,
	IDADE
) VALUES (
	'Edmar Paulino',
	26
);
```
```sql
USE [db_name];
INSERT INTO [table_name] (
	IDADE,
	NOME
) VALUES (
	26,
	'Edmar Paulino'
);
```

> Strings devem ser informadas dentro de aspas simples **`''`**.

> Números devem seguir o padrão americano onde as casas decimais são separadas por pontos (14.5, 3.14).