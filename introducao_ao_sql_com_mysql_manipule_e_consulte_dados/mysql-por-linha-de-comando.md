# MySQL por linha de comando

## Windows

Abra o terminal (Windows PowerShell ou CMD) e navegue até a pasta onde contém o binário do MySQL, *caso o MySQL já esteja adicionado ao PATH do Windows essa etapa não é necessária*.

```PowerShell
cd C:\Program Files\MySQL\MySQL Server 8.0\bin>
```

Dentro do diretório execute o comando:

```PowerShell
.\mysql.exe -h localhost -u root -p
```

Caso o MySQL já esteja no PATH do sistema você pode rodar este comando de qualquer diretório:

```PowerShell
mysql -h localhost -u root -p
```

> -h para indicar o host

> -u para indicar o usuário que usaremos para logar

> -p para que informamos a senha

Após logar o prompt será parecido com este:
```sql
mysql>
```
Indicando que já estamos dentro do banco de dados e podemos executar comandos referentes a ele.

Para criar um banco de dados:
```sql
CREATE DATABASE [db_name];
```

Para apagar um banco de dados:
```sql
DROP DATABASE [db_name]
```

Para selecionar um banco de dados:
```sql
USE [db_name]
```

Para listar a tabela de um banco de dados:
```sql
SELECT * FROM [table_name]
```

Para sair do MySQL:
```sql
EXIT;
```