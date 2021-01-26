# cypress-project

Cypress-project is a prove of concept project. The main goals of this project are:
- automating an open-source website to get more fammiliar with JS syntax
- determine pros and cons of using cypress over Selenium

# Installation

Project requires [Node.js](https://nodejs.org/) to run.

```sh
$ npm init -y
$ npm install cypress
```

# How to run tests in browser

```sh
$ npx cypress open
```
# How to run tests in headless mode

```sh
$ npx cypress run
$ npx cypress run --spec cypress/integration/login.spec.js
```