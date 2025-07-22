const { getFutureDate} = require('../../support/utils');

describe('GUI - Criar Evento pela interface', () => {
  const dataFutura = getFutureDate(5);
  const baseUrl = Cypress.env('baseUrlApp');

  beforeEach(() => {
    cy.visit(baseUrl); 
  });

  it('Deve preencher o formulário e criar evento com sucesso', () => {
    cy.preencherFormularioEvento({
      nome: 'Evento via GUI',
      descricao: 'Criado com Cypress GUI',
      data: dataFutura
    });

    cy.get('#mensagem').should('contain', 'Evento criado com sucesso');
  });

    it('Deve validar data menor que atual', () => {
    cy.preencherFormularioEvento({
      nome: 'Evento via GUI',
      descricao: 'Criado com Cypress GUI',
      data: '2024-08-15'
    });

    cy.get('#mensagem').should('contain', 'Erro: A data do evento não deve ser menor que a data atual.');
  });

    after(() => {
      cy.deleteEvento();
  });

});
