# 🚀 Projeto de Automação Web e API com Cypress

Este projeto realiza testes automatizados em uma aplicação de gerenciamento de eventos, cobrindo testes de **API REST** e testes **end-to-end (GUI)** com **Cypress**. Os testes garantem o correto funcionamento das funcionalidades de criação e exclusão de eventos via interface e API.

---

## 📁 Estrutura do Projeto

```
📦 cypress
├── e2e
│   ├── api
│   │   └── evento.cy.js        # Testes de API para criação e exclusão de eventos
│   ├── gui
│   │   └── evento_gui.cy.js    # Testes via interface (GUI) para formulário de evento
├── support
│   ├── commands.js             # Comandos customizados para Cypress
│   └── utils.js                # Função utilitária para gerar data futura
├── reports
│   └── html                    # Relatórios de testes gerados pelo Mochawesome
```

---

## 🧪 Funcionalidades Testadas

### ✅ Testes de API (REST)

- `POST /evento`: Criação de evento com data futura  
- Validação de data inválida: Evento com data anterior ao dia atual  
- `DELETE /evento`: Exclusão de eventos criados

### ✅ Testes GUI (Interface Web)

- Preenchimento de formulário e envio com sucesso  
- Validação de erro ao enviar evento com data anterior  
- Mensagens de feedback visualizadas na interface

---

## 🛠️ Tecnologias Utilizadas

- Cypress  
- JavaScript  
- Node.js 18.x  
- Mochawesome Reporter  
- Azure DevOps Pipelines

---

## ⚙️ Execução Local

### 1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2. Instale as dependências:

```bash
npm install
```

### 3. Execute os testes:

#### Testes completos (API + GUI)

```bash
npx cypress run
```

#### Testes da interface em modo interativo:

```bash
npx cypress open
```

---

## 🔄 Pipeline CI (Azure DevOps)

Este projeto está integrado com **Azure DevOps**. O pipeline realiza:

- ✅ Instalação do Node.js  
- ✅ Instalação de dependências  
- ✅ Execução dos testes Cypress  
- ✅ Geração de relatório HTML (Mochawesome)  
- ✅ Publicação como artefato

### 🎯 Trecho do `azure-pipelines.yml`:

```yaml
- script: |
    npx cypress run       --spec "cypress/e2e/**/*.cy.js" --config-file cypress.config.js
```

---

## 📊 Relatórios

Após a execução dos testes, os relatórios são gerados em:

```
cypress/reports/html/
```

O relatório é publicado automaticamente como artefato no Azure DevOps. Ele inclui:

- Resultado detalhado dos testes  
- Gráficos  
- Screenshots embutidos

---

## ♻️ Comandos Customizados

- `cy.preencherFormularioEvento({ nome, descricao, data })`  
  Preenche o formulário de evento na interface.

- `cy.deleteEvento()`  
  Exclui evento via API para garantir limpeza de ambiente após testes.

---

## 📅 Utilitário de Data

A função `getFutureDate(dias)` retorna uma data futura com base na quantidade de dias passados como parâmetro.

```js
const dataEvento = getFutureDate(2);
```

---

## 🌐 Variáveis de Ambiente

Configuradas diretamente no `cypress.config.js`:

```js
env: {
  baseUrlApi: 'https://micro-servico-evento.onrender.com',
  baseUrlApp: 'https://micro-servico-evento.onrender.com'
}
```

---

## 🤝 Contribuição

Sinta-se à vontade para abrir *issues* ou *pull requests* com melhorias ou novas ideias. Colaboração é sempre bem-vinda!

---
