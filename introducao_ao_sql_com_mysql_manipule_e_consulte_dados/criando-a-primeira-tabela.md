# Criando a primeira tabela

Com o banco de dados selecionado:

```sql
CREATE TABLE [table_name] (
	COLUMN_NAME COLUMN_TYPE,
	COLUMN_NAME COLUMN_TYPE
);
```
Também podemos criar sem selecionar previamente o banco de dados correspondente, assim informamos qual é o banco de dados usando a notação de ponto:
```sql
CREATE TABLE [db_name].[table_name] (
	COLUMN_NAME COLUMN_TYPE,
	COLUMN_NAME COLUMN_TYPE
);
```

> Uma tabela pode ter infinitas linhas, mas o número de colunas é limitado e é informado na criação da tabela, cada coluna contém um tipo, e nessa colunas todos os itens devem ser desse tipo.

# Criando a tabela com assistente

## MySQL Workbench

Clique duas vezes sobre o banco de dados desejado ou na seta lateral para exibir os elementos do banco de dados.
Após isso clique com o botão direito do mouse sobre `Tables` e selecione a opção `Create Table...`.
Após isso será aberto uma janela onde você poderá informar os dados da tabela a ser criada:
> Table Name - É onde você vai informar o nome da nova tabela

Mais abaixo tem um quadro onde você poderá adicionar colunas à tabela, então você clica duas vezes sobre o campo `Column Name` para informar o nome da coluna e depois duas vezes no campo `Datatype` para informar o tipo de dado daquela coluna.
Para adicionar mais colunas é só repetir o processo na célula abaixo da que foi criada.
Após terminar de definir as colunas da nova tabela clique em `Apply`, após isso será aberto uma janela onde será demonstrado o comando que será executado para a criação da nova tabela, se tudo estiver conforme desejado clique em `Apply` novamente e depois em `Finish`.