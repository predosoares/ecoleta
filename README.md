<h1 align="center">
    <img alt="Ecoleta" src="web/public/assets/logo@3x.png" width="250px" />
    <img alt="Ecoleta" style="margin-left: 50px;" src="assets/nlw-logo.svg" width="250px" />
</h1>

<h4 align="center">
  NextLevelWeek 1.0 by Rocketseat 🚀
</h4>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/Preddo/ecoleta">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Preddo/ecoleta">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Preddo/ecoleta">
  
  <a href="https://github.com/Preddo/ecoleta/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Preddo/ecoleta">
  </a>
  
  <a href="https://github.com/Preddo/ecoleta/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/Preddo/ecoleta">
  </a>
</p>

## 🎯 Projeto

Ecoleta é uma aplicação inteiramente feita com typescript do back-end ao front-end e app mobile. O propósito da aplicação é 
ajudar as pessoas a encontrarem pontos de coleta de forma eficiente.

A aplicação foi desenvolvida durante a semana internacional do Meio Ambiente a fim de reforçar essa causa.

## ❗️Requerimentos

Para conseguir rodar o projeto em sua máquina é necessário ter as seguintes ferramentas instaladas:
- Em seu computador:
  - Node.js
  - NPM
  - Expo
  
- Em seu smartphone:
  - Expo ( disponível tanto na PlayStore quanto na App Store )

## 🔨 Tecnologias Aplicadas

- Node.js
- SQLite3
- Knex - ferramenta que ajuda a escrever SQL queries
- Express - framework node.js para facilitar na criação de rotas e APIs
- axios - um cliente HTTP, que funciona tanto no browser quanto em node.js
- nodemon - file watcher
- Celebrate - Express middlewhere para a biblioteca Joi de validação
- Joi - biblioteca de validação de dados JS
- ReactJS
- React Native ( Expo )

## 💻 Demo da Aplicação Web
![Web Application](assets/DemoWeb.gif)

## 📱 Demo da Aplicação Mobile
![Mobile Application](assets/DemoMobile.gif)

## 🕹 Como Executar

#### Clonando o projeto
```sh
git clone https://github.com/Preddo/ecoleta.git
cd ecoleta
```
#### Iniciando Backend
```sh
cd backend
npm install
npm knex:migrate
npm knex:seed
npm dev:server
```
#### Iniciando Frontend
```sh
cd frontend
npm install
npm start
```
#### Iniciando mobile
```sh
cd mobile
npm install
expo start
```

Feito com ♥ por Pedro Soares 🚀
