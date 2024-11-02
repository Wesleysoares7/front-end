.

---

# Aplicação de Receitas Full Stack

Este projeto é uma aplicação full stack de gerenciamento de receitas que foi desenvolvida utilizando as seguintes tecnologias:

- **Frontend:** Next.js, Tailwind CSS e TypeScript
- **Backend:** Go com Gin-Gonic e GORM, utilizando um backend vinculado de outro projeto. Você pode conferir o repositório do backend [aqui](https://github.com/Josieljcc/recipe-app-full-stack/tree/main/back-end).
- **Banco de Dados:** MySQL
- **Docker e Docker Compose**

## Descrição

A finalidade deste projeto é criar uma aplicação web onde os usuários possam gerenciar receitas. A aplicação permite que os usuários visualizem uma lista de receitas, marquem suas preferidas e acessem suas receitas favoritas. O frontend é construído com Next.js, Tailwind CSS e TypeScript, enquanto o backend utiliza Go com Gin-Gonic e GORM. O banco de dados MySQL é empregado para armazenar informações sobre receitas e usuários, e o Docker junto ao Docker Compose facilitam a configuração do ambiente de desenvolvimento.

![Imagem 1](link-para-imagem1)

## Funcionalidades

- **Listagem de Receitas:** Usuários podem visualizar todas as receitas disponíveis.
- **Favoritos:** Possibilidade de marcar receitas como favoritas.
- **Visualização de Favoritos:** Usuários conseguem acessar suas receitas favoritas.
- **Cadastro de Usuário:** Permite a criação de contas para utilização da aplicação.

## Imagens

![Imagem 1](link-para-imagem1) ![Imagem 2](link-para-imagem2) ![Imagem 3](link-para-imagem3)  
![Imagem 4](link-para-imagem4) ![Imagem 5](link-para-imagem5) ![Imagem 6](link-para-imagem6)

## Tecnologias Utilizadas

### Frontend

- **Next.js:** Framework React para a construção de interfaces web.
- **Tailwind CSS:** Biblioteca de CSS utilitária para estilização rápida e responsiva.
- **TypeScript:** Linguagem que adiciona tipagem estática ao JavaScript.
- **React Hook Form:** Biblioteca para criação de formulários com validação.
- **Zod:** Biblioteca de validação de esquemas para TypeScript.

### Backend

- **Go:** Linguagem eficiente e concorrente para o desenvolvimento de APIs.
- **Gin-Gonic:** Framework web leve para construção de APIs em Go.
- **GORM:** ORM para Go, facilitando a interação com bancos de dados relacionais.
- **JWT:** Método seguro para autenticação e controle de acesso.
- **API RESTful:** Endpoints para comunicação entre frontend e backend.

### Banco de Dados

- **MySQL:** Sistema de gerenciamento de banco de dados relacional.

### Testes

- **Jest:** Framework de testes JavaScript para testes unitários e de integração.
- **React Testing Library:** Biblioteca para testar componentes React de forma simplificada.

### Docker e Docker Compose

- **Docker:** Plataforma para desenvolvimento, envio e execução de aplicativos em containers.
- **Docker Compose:** Ferramenta para definir e executar aplicativos Docker com múltiplos containers.

## Configuração do Ambiente

Antes de iniciar, verifique se as seguintes ferramentas estão instaladas:

- **Docker:** Versão 24.0.0 ou superior.
- **Docker Compose:** Versão 2.18.1 ou superior.

Para configurar o ambiente de desenvolvimento com Docker Compose, siga os passos abaixo:

1. Clone o repositório do projeto:
   ```bash
   git clone git@github.com:Josieljcc/recipe-app-full-stack.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd recipe-app-full-stack
   ```
3. Execute o comando para criar e iniciar os containers:
   ```bash
   docker-compose up -d
   ```

Os containers Docker serão configurados com todas as dependências necessárias para o frontend, backend e banco de dados.

## Script para Popular o Banco de Dados

O projeto conta com um script em Go que lê um arquivo CSV com dados de receitas e os insere no banco de dados MySQL. Este script se encontra no diretório `src/database/csvRead/csvRead.go` dentro do container do backend.

Para executar o script, siga os passos abaixo:

1. Acesse o container do backend:
   ```bash
   docker exec -it app_backend /bin/bash
   ```
2. Navegue até o diretório do script:
   ```bash
   cd src/database/csvRead
   ```
3. Execute o script:
   ```bash
   go run csvRead.go
   ```
4. Acesse a aplicação no navegador:
   [http://localhost:3000](http://localhost:3000)

O script irá ler o arquivo CSV e popular o banco de dados com as receitas. Devido ao grande volume de dados, o script pode levar alguns minutos para ser concluído, dependendo da performance do computador.

## Contribuição

Se você gostaria de contribuir para este projeto, sinta-se à vontade para abrir um Pull Request e descreva as alterações propostas.

## Licença

Este projeto está licenciado sob a MIT License.

---

.
