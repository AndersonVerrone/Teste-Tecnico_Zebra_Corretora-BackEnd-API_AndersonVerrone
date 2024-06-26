# API de Estados - Teste Técnico Zebra Contabilidade

Bem-vindo ao repositório da API de Estados, desenvolvida como parte do teste técnico para a Zebra Corretora. Esta API consome dados da API pública do IBGE (https://servicodados.ibge.gov.br/api/docs/localidades#api-UFs-estadosGet) e fornece endpoints para obter a lista de estados e detalhes de um estado específico por ID. O projeto é desenvolvido em Express com TypeScript.

## Visão Geral

A API permite obter uma lista de estados do Brasil. A API verifica se o ID fornecido é válido.

## Endpoints

### Listar Estados

- **Rota**: `/states`
- **Método**: GET
- **Descrição**: Retorna a lista de todos os estados.

### Obter Estado por ID

- **Rota**: `/states/:stateId`
- **Método**: GET
- **Descrição**: Retorna um estado específico.
- **Parâmetros**: 
  - `stateId` (number): ID do estado.

## Requisitos

- Git para clonar o repositório
- Node.js
- npm

## Instruções para Configuração

1. Clone o repositório da API:

   ```bash
   git clone https://github.com/AndersonVerrone/Teste-Tecnico_Zebra_Corretora-BackEnd-API_AndersonVerrone.git
   cd SeuRepositorioBackend
   ```
2. Instale as dependencias do projeto:

   ```bash
   npm install
   ```
3. Agora inicialize a API:

   ```bash
   npm run dev
   ```

## Estrutura do Projeto

### Backend

- **Express com TypeScript**: Utilizado para criar uma API robusta e escalável.


## Decisões de Projeto

- **Express e TypeScript**: Escolhidos pela combinação de performance, segurança e facilidade de desenvolvimento.

## Contato

Se você tiver qualquer dúvida ou sugestão, sinta-se à vontade para entrar em contato através do email [doverrone@gmail.com](mailto:doverrone@gmail.com).