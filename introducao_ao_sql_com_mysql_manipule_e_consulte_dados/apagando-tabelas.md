# Apagando tabelas

```mysql
DROP TABLE [db_name].[table_name];
```
ou
```sql
USE [db_name];
DROP TABLE [table_name];
```

# Apagando tabelas com assistente

## MySQL Workbench

Em Schemas clicar com o botão direito do mouse encima da tabela que deseja apagar.

Selecionar a opção `Drop Table...`.

Após isso será aberto uma janela onde serão exibidas duas opções:

> Review SQL - Onde você pode ver o comando que será executado para apagar a tabela.

> Drop Now - Onde a tabela será excluída imediatamente.

Caso seleciona `Review SQL` verifique o comando que será executado e clique em `Execute` para apagar a tabela.
