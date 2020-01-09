# API REST Node Postgres

A API REST foi desenvolvida em Node, e como banco de dados foi utilizado o Postgres. A API possui um CRUD básico, baseado em uma model de Usuário.
## Instalação

Utilizei o controlador de pacotes [Yarn](https://yarnpkg.com/lang/en/) para realizar a instalação das dependências.

```bash
yarn install
```


## Uso

Utilize o comando a seguir para realizar a criação da tabela, a partir da migrate 

```javascript
node_modules/.bin/sequelize db:migrate

```
## Referências
Utilizei como base para o desenvolvimento o artigo disponível no blog da [Rocketseat](https://blog.rocketseat.com.br/nodejs-express-sequelize/)
