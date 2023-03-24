<h1 align="center">
  ## ayti-group-challenge
</h1>

<blockquote align="center">“Se você brincar um pouco com as palavras, consegue fazer qualquer coisa soar bem (ou mal).”!</blockquote>

<p align="center">
  <img alt="challenge" src="https://img.shields.io/badge/challenge-%2304D361">

  <a href="https://github.com/carvalhoviniciusluiz">
    <img alt="Made by Vinicius Carvalho" src="https://img.shields.io/badge/made%20by-Vinicius%20Carvalho-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">
</p>

<p align="center">
  <a href="#configs">Configurações</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#about">Sobre o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#api">API</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#license">Licença</a>
</p>

<p align="center">
  <a href="" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

Este projeto foi construido utilizando alguns principios do [**Clean Architecture**](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html). Existem vários aspectos que podem ser melhorados no entanto ele consegue passar uma visão geral da arquitetura.

## Configurações <a name="configs"></a>

<details>
  <summary><b>Scripts</b> (click to show)</summary>

Somente os principais scripts estão documentados nessa sessão, para executalos faça:

```bash
npm start
```

**SCRIPTS**

| Nome               | Descrição                                           |
| ------------------ | --------------------------------------------------- |
| star               | Sobe o serviço com hot-reload                            |
| test               | Roda os testes                                      |
</details>

<details>
  <summary><b>Docker :whale:</b> (click to show)</summary>

Na raiz do projeto existe um arquivo `docker-compose.yml` para subir o serviço de banco de dados, é necessário subir o container do docker para que a persistencia dos dados funcione.

```bash
# Subir os serviços e manter o term travado
docker-compose up

# Subir os serviços em segundo plano
# docker-compose up -d
```
</details>

## Sobre o projeto <a name="about"></a>

<details>
  <summary><b>O QUE VAMOS ENCONTRAR</b> (click to show)</summary>

- Padrões de Projeto
  - Clean Arch
  - Hexagonal Arch
  - Repository
  - Strategy
  - Dependency Inversion
- Boa Práticas
  - SOLID
  - DDD
- Miscelânea
  - Express
  - TypeORM
  - Docker
- Banco de Dados
  - Postgres
  - SQLite3
</details>

__IMPORTANTE__ 1: O projeto apresenta um arquivo de importação para as suas APIs de modo a facilitar os testes, como requisito é necessário possuir o programa insomnia instalado no ambiente. A importação das rotas para o insomnia é feito usando o botão roxo `Run In Insomnia` presente no topo da página.

__IMPORTANTE__ 2: O Suporte do docker contempla somente a parte de serviços necessários para o projeto funcionar isso por que se trata de configuração para desenvolvimento e não produção.

### **Requisitos:**

- [NodeJs `>17.0.0`](https://nodejs.org/en/)

- [Docker Descktop](https://docs.docker.com/desktop/mac/install/)

- [Insomnia](https://insomnia.rest/download)

### **Instalação:**

No terminal faça:

```bash
npm install
```

### **Rodando o Projeto:** <a name="run"></a>

Suba os serviços auxiliares do projeto com docker:

```bash
docker-compose up
```

Execute os serviços principais do projeto:

```bash
npm run start
```

### **Tests:**

É necessário que o docker esteja levantado, no terminal faça:
```bash
npm test
```

### **API:** <a name="api"></a>

#### Clients

- `#GET http://localhost:3333/clients` - Devolve todos os clientes cadastrados.
- `#POST http://localhost:3333/clients` - Rota de cadastro para novos clientes.

```json
{
  "client": {
    "name": "vinicius",
    "birth": "02-19-1984"
  }
}
```

#### Travels

- `#GET http://localhost:3333/travels` - Devolve todas as viagens cadastradas.
- `#POST http://localhost:3333/travels` - Rota de cadastro para novas viagens.

```json
{
	"travel": {
		"clientId": "d2122c9e-445e-4332-b673-cd38ba05075e",
		"destination": "amapa",
		"date": "01-01-2023"
	}
}
```

## License <a name="license"></a>

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2023-present
