
1. PACKAGE INSTALADOS GLOBALMENTE:
----------------------------------

### Instalar como admin no prompt de comando DOS
### Typescript instalado globalmente
$ npm install -g typescript

### TypeORM instalado globalmente
$ npm install -g typeorm

### Habilita o CLI - para excutar comando na linha de comando
### Permite que código typescript seja executado no node
$ npm install -g ts-node


2. PACKAGE INSTALADOS COMO DEPENDENCIA DE DESENVOLVIMETO:
---------------------------------------------------------

### Instalando o express
$ npm i express - D   ou   npm i express --save-dev

### Adicionar as tipagens do typescript para o módulo express - permite utilizar os decorate
$ npm install @types/express -D   ou   npm install @types/express --save-dev

### Adicionar as tipagens do typescript para o módulo node
$ npm install @types/node -D   ou   npm install @types/node --save-dev

### Instalando Ferramentas para automatizar fluxo de dev: re-start server, transpilaçao do  
### código TS para JS e execução do código Javascript. Substitu - ts + nodemon + node
$ npm install ts-node-dev -D   // Adicionando uma dependencia de desenvolvimento (-D)

### Instalar drive do banco de dados MySQL para o Typeorm
$ npm install mysql -D

### Instalar o package reflect-metadata para Tyeporm
$ npm install reflect-metadata --save-dev ou  npm install reflect-metadata -D

3. INICIALIZAÇÕES:
------------------

### Inicializando um projeto - Isso cria o arquivo package.json
$ npm init -y

### Inicializando projeto Typescript (cria arquivo tsconfig.json)
$ tsc --init

### Inicializando projeto TypeOrm (cria arquivo ormconfig.json)
typeorm init

### Estrutura basica das pastas de um projeto
MyProject
├── src              // place of your TypeScript code
│   ├── models       // place where your entities (database models) are stored
│   │   └── User.ts  // sample entity
│   ├── migration    // place where your migrations are stored
│   └── index.ts     // start point of your application
├── .gitignore       // standard gitignore file
├── ormconfig.json   // ORM and database connection configuration
├── package.json     // node module dependencies
├── README.md        // simple readme file
└── tsconfig.json    // TypeScript compiler options

### Arquivo de configuração ormconfig.json de conexão do typeorm
{
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "arariboia",
    "database": "dbtpyorm",
    "synchronize": false,             // true - para estratégia (1)     
    "logging": false,
    "entities": [
       "src/models/**/*.ts"
    ],
    "migrations": [
       "src/database/migration/**/*.ts"
    ],
    "subscribers": [
       "src/subscriber/**/*.ts"
    ],
    "cli": {
      "entitiesDir": "src/models",
      "migrationsDir": "src/database/migration"
    }
 }

4. CONTROLE DE MIGRATION
-------------------------

### Estratégia 1 - Cria um esboço de migration que precisa ser complementado 
### manualmente no exemplo aqui foi criado quando só existia a entity Class.
$ typeorm migration:create -n createClass

### Estratégia 2 - Cria a migração a partir da definição das entitys existentes
### no Models, por esse método as migration são códigos SQL. Veja exemplo abaixo:
### await queryRunner.query( "CREATE TABLE `content` (`id` int NOT NULL AUTO_INCREMENT,
###                          `descript` varchar(255) NOT NULL, `linkContent` varchar(255) NOT NULL, 
###                          PRIMARY KEY (`id`)) ENGINE=InnoDB");
### Comando para essa estratégia de geração para a migration
$ npm run typeorm migration:generate -- -n CriarTabelas

### Executando a migration sem script
$ ts-node ./node_modules/typeorm/cli.js migration:run

### Executando pelo script - Esse script é porque o migration:run e revert
### só funcionam com arquivos .js, daí temos que compilar os arquivos antes.
### Para executar sem o script terias que executar tudo pelo diretório 'dist', daí daria certo
$ npm run typeorm migration:run

### revertendo a migration
$ npm run typeorm migration:revert

### Cria o esboço da Entity Class.ts tendo como origem a migration
$ npx typeorm entity:create -n Class


5. START DA APLICAÇÃO
---------------------

### Para dar start na aplicação com o script de desenvolvimento
$ npm run dev

### Estes são os scripts: dev - para start da aplicação, typeorm para executar no terminal
### comandos para criar uma migration, executar uma migration etc.
  "scripts": {
    "build": "tsc",
    "dev": "ts-node-dev --inspect --transpile-only --ignore-watch node_modules src/server.ts",
    "typeorm": "node --require ts-node/register ./node_modules/typeorm/cli.js"
  }

1. Descrição das flag do script dev:
  A flag --transpile-only indica que só transpila o código e não verifica se ele está certo ou errado. Nós não precisamos dessa verificação em tempo de desenvolvimento porque o VsCode já realiza esta verificação
  A flag --respawn serve para que o ts-node-dev fique observando alterações do código, para transpilar e fazer auto reload da aplicação



[
  {
    "id": 1,
    "name": "Typescript",
    "duration": 45,
    "createAt": "2021-01-02T00:08:56.955Z",
    "updateAt": "2021-01-02T00:08:56.955Z"
  },
  {
    "id": 2,
    "name": "Estrutura de Dados",
    "duration": 40,
    "createAt": "2021-01-02T00:09:45.743Z",
    "updateAt": "2021-01-02T00:09:45.743Z"
  },
  {
    "id": 3,
    "name": "Sistemas Operacionais III",
    "duration": 30,
    "createAt": "2021-01-02T00:10:15.140Z",
    "updateAt": "2021-01-02T00:10:15.140Z"
  },
  {
    "id": 4,
    "name": "Analise Orientada a Objeto",
    "duration": 60,
    "createAt": "2021-01-02T00:10:34.166Z",
    "updateAt": "2021-01-02T00:10:34.166Z"
  },
  {
    "id": 5,
    "name": "Engenharia de software III",
    "duration": 60,
    "createAt": "2021-01-02T00:10:55.216Z",
    "updateAt": "2021-01-02T00:10:55.216Z"
  }
]