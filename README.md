<h1> Desafio-Tecnico-Trybe-FULL-STACK-TODOLIST </h1>


<h2> Bem vindo ao repostorio Full Stack Todo List.</h2>
<h3> Esta aplicação tem como objetivo organizar tarefas para usuários específicos onde voce pode: adicionar, remover ou atualizar uma determinada
tarefa e armazenar estas informações no banco de dados, além de ser possível também a criação de novos usuários, isso tudo através da "Stack" MERN.</h3>

<h2> O que é MERN </h2>
<h3>MERN é uma sigla que engloba diferentes tecnologias que compõe o Back-end de uma aplicação web.</h3>
<ul>
<li>(M) MongoDB é uma base de dados não relacional.</li>
<li>(E) Express é o framework de back-end onde você construirá sua aplicação web.</li>
<li>(R) React é um framework que facilita a programação do front-end usando javascript.</li>
<li>(N) Node.JS é um ambiente de execução de código Javascript.</li>
</ul>
<h3>Tecnologias Utilizadas:</h3>

<p align="left">
  <a href="https://nodejs.org/en/" target="_blank">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="node" width="100" height="100"/>
  </a>
  <a href="https://www.mongodb.com/" target="_blank">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongoDb" width="100" height="100"/>
  </a>
  <a href="https://expressjs.com/" target="_blank">
  <img src="https://w7.pngwing.com/pngs/212/722/png-transparent-web-development-express-js-javascript-software-framework-laravel-world-wide-web-purple-blue-text.png" alt="mysql" width="200" height="100"/>
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="100" height="100"/>
  </a>
  <a href="https://reactjs.org/" target="_blank">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="100" height="100"/>
  </a>
  <a href="https://react-bootstrap.github.io/" target="_blank">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg" alt="bootstrap" width="100" height="100"/>
  </a>
</p>

## Este repositório contém 3 branchs, se quiser clonar os arquivos de front-end e back-end separadamente basta escolher a branch específica.

## Como Clonar e Utilizar este projeto?

1. Primeiramente copie o link de referencia deste repositorio no botão "Code".
2. No seu Computador acesse a pasta em que deseja clonar o projeto.
3. Abra o terminal e digite:
* `git clone git@github.com:FelipeFloresWeb/Desafio-Tecnico-Trybe-FULL-STACK-TODOLIST.git`
4. Entre na ṕasta clonada do projeto:
* `cd Desafio-Tecnico-Trybe-FULL-STACK-TODOLIST`
5. Instale as dependencias de desenvolvimento do front e back end:
* `cd client`
* `npm install`
* `cd ../server`
* `npm install`
6. Após o término da instalação rode o servidor:
* `node index.js`

ou para rodar em modo de desenvolvimento:
* `npm run debug`

### ATENÇÃO :bangbang:
O servidor ira rodar localmente somente se vc já tiver um serviço de cloud cadastrado como por exemplo:<a href="https://www.mongodb.com/atlas/database" target="_blank"> MongoDB Atlas</a>

<p>Após isso adicione adicione na raiz da paste "server" uma variável de ambiente (arquivo .env) com a chave 'CONNECTION_URL' e o valor com a key de seu serviço de Cloud.</p>

7. Entre na pasta de front-end e inicie a aplicação:
* `cd ../client`
* `npm start`

### 	:bangbang:Importante:bangbang:
#### 	:construction: Teste locais do app não estão funcionando...	:construction:
#### Existe dentro da pasta server uma pasta chamada "testes", onde ela se encontra inicialmente com o sistema de testes pré-implantado porém não funcional, ao rodar o comando 'npm test' retorna o seguinte erro no console: "before is not defined"; Ou seja, o sistema de teste não consegue identificar o método "before", para resolução deste problema eu recomendao reler a documentação sobre jest testes e buscar pela solução.

<h1>Experimente a aplicação:</h1>
<a href="http://first-todo-list-frontend.herokuapp.com/" target="_blank">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/heroku/heroku-original-wordmark.svg" alt="node" width="100" height="100"/>
</a>
