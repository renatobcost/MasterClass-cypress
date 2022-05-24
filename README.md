## 🚀 MasterClass de cypress 🚀

Projeto de estudo sobre o padrão PageObject para estrutura de testes, e uma melhoria - por assim dizer - para o padrão. No pageobject ocorre separação dos elementos/ações das páginas/telas da aplicação e os cenários de testes, ou seja, há uma divisão entre os testes e as interações com as telas da aplicação. A melhoria proposta aborda a separação por funcionalidades, Sendo assim, os elementos ficam em arquivos diferentes de acordo com as suas finalidades. 

Vantagens ao adotar esse padrão:
- Melhor compreensão dos testes; 
- Facilidade de leitura; 
- Reuso de código; 
- Menos impacto com mudanças no código; 

O objeto de estudo deste projeto é a aplicação [Parodify](https://parodify.herokuapp.com), e o material disponível neste repositório foi desenvolvido durante a aula [Cypress além do Page Object](https://www.youtube.com/watch?v=UfGROGLyqZ0&t=1478s), promovida pela [QAcademy](https://www.youtube.com/channel/UCzsGhfwdImeKj2AOoN92hFw).


### 💡 Conceitos abordados
-----------------------
- Checkpoints;
- PageObjects;
- Actions;
- Constructor;


### ⚠️ Instalação e uso do projeto
-----------------------
- Instale o [Node.js](https://nodejs.org/en/download/);
- Baixe este repositório ou faça um git clone;
- Abra o diretório do projeto e execute o comando:
    - `npm install`
- Para abrir a interface de execução do Cypress, execute no diretório do projeto:
    - `npx cypress open`


### ⚙️ Arquitetura do projeto
-----------------------

```
MasterClass-cypress/
  ├─  cypress/
  │        ├── fixtures/
  │        │   └── *.json       
  │        │
  │        ├── integration/
  │        │   └── login.spec.js
  │        │
  │        ├── plugins/
  │        │   └── index.js
  │        │
  │        └── support/
  │            ├── actions
  │            |   └── AuthActions.js
  │            ├── commands.js
  │            └── index.js
  │ 
  ├── node_modules/
  ├── cypress.json
  ├── package-lock.json
  ├── package.json
  └── README.md
```


## 🔍 Camadas do projeto
-----------------------

 - **integration:** arquivos de testes separados em categorias a organização. Extensão *.spec.js;
 - **plugins:** plugins que são utilizados na solução ficam dentro do arquivo "plugins/index.js";
 - **support:** camada com comandos Cypress customizados e sobrescritas globais:
    - Arquivo commands.js responsável de receber os comandos globais no cypress;
    - Arquivo index.js responsável de receber as importações dos comandos cypress;
    -**actions:** camada de funcionalidades;
      - Arquivo AuthActions.js é responsável pelas funcionalidades de autenticação de um usuário; 
 - **node_modules:** arquivos ou diretórios que podem ser carregados pelo Node.js;
 - **cypress.json:** arquivo de configuração do Cypress;
 - **package-lock.json:** gerado automaticamente com as instalações e atualizações de pacotes;

