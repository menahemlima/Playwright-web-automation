# Projeto de automação Web
Projeto de automação (e2e) desenvolvido com o framework de automação Playwright com Typescript
<br>

## 1. Descrição do framework: Playwright & Typescript

 - **Playwright** é uma ferramenta de teste (automatizado) de front-end e back-end criada para a web moderna. Playwright é uma plataforma gratuita da Microsoft, de código aberto , instalado localmente e um serviço de Dashboard para gravar os testes.
 > Fonte: [docs.playwright.io](https://playwright.dev/docs/intro)

<br></br>

## 2. Documentação das dependências do projeto

 - Este projeto tem as dependências listadas abaixo, e devem ser baixadas/instaladas na sua máquina para execução do mesmo:
	 - Node JS
		 - [Link com as orientações para download/instalação](https://nodejs.org/en/download/).
	 - NPM
		 - [Link com as orientações para download/instalação](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).
<br></br>

## 3. Comando para instalação das dependências do projeto
`npm install -f`
<br></br>

## 4. Comando para execução do projeto e criação do relatório de testes

para executar todos os testes regressivos: 

`npx playwright test`

<br></br>
para executar apenas uma tag específica:

`npx playwright test login.spec.ts`
<br></br>

## 5. Estrutura do projeto:

- tests/pages: diretório que possui os arquivos com as classes, funções e as abstrações do projeto.

- tests/: diretório que possui todos os cenários de testes escritos e são arquivos executáveis do projeto.

- .env: arquivo que possui massa de dados para testes.
