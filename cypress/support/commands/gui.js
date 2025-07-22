Cypress.Commands.add('preencherFormularioEvento', ({ nome, descricao, data }) => {
  cy.get('#nomeEvento').clear().type(nome);
  cy.get('#descricaoEvento').clear().type(descricao);
  cy.get('#dataEvento').clear().type(data);
  cy.get('#eventoForm > .btn').click();
});