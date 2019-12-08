For people - Test
===

## Tabela de conteúdo

[TOC]

## Tutorial

Siga os passos abaixo para rodar a aplicação

1. Baixe e instale o node.js em seu computador (recomendo a versão LTS)
https://nodejs.org/en/

2. Instale o gerenciador de dependências/pacotes de sua preferência (recomendo o yarn)
https://yarnpkg.com/pt-BR/docs/install

3. Abra o terminal e instale o vue-cli com o seguinte comando
```gherkin=
npm install -g vue-cli
```
ou
```gherkin=
yarn global add vue-cli
```

4. Agora que temos o cli instalado, você pode clonar este projeto, para isso, no seu terminal você irá digitar o seguinte comando
```gherkin=
git clone https://github.com/medina656/vue-forpeople.git
```

5. Instale o json-server
```gherkin=
npm install -g json-server
```
ou
```gherkin=
yarn global add json-server
```
6. Navegue até a pasta do projeto pelo seu terminal
7. Dentro da pasta do projeto, dê o seguinte comando para rodar a aplicação
```gherkin=
npm run dev
```
8. Em seguida, abra outra aba no terminal, também dentro da pasta do projeto e dê o seguinte comando para rodar o json-server
```gherkin=
json-server --watch db.json
```

9. Após isso você deverá ter uma tela como esta
![](https://i.imgur.com/CxhhuJc.png)


## Solução

Criei o component TimeCard.vue, nele eu fiz uma tabela em HTML, estilizei ela e na tag script eu fiz o get da minha API utilizando o axios.
Após isso, na tabela HTML, utilizando o v-for, consegui chamar os dados da API.

## Sobre o projeto

O projeto foi criado utilizando o template webpack do vue-js (https://github.com/vuejs-templates) como base;
Utilizei font-awesome apenas para simular os ícones da coluna de ações;
Utilizei o json-server para simular uma API localmente com o json que você me enviou;
Utilizei o axios para fazer um get da minha Fake API;



> Leia mais sobre o font-awesome aqui: https://github.com/FortAwesome/vue-fontawesome
> Leia mais sobre o json-server aqui: https://github.com/typicode/json-server
> Leia mais sobre o axios aqui: https://github.com/axios/axios


###### tags: `Documentation` `Tutorial` `VueJS`
