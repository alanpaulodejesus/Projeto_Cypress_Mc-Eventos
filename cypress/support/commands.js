

Cypress.Commands.add('deleteEvento', () => {
  const baseUrl = Cypress.env('baseUrlApi') || Cypress.config('baseUrl');

  cy.request({
    method: 'DELETE',
    url: `${baseUrl}/evento`,
    headers: {
      'Content-Type': 'application/json'
    },
    failOnStatusCode: false
  }).then((response) => {
    expect(response.status).to.eq(200);
  });
});

Cypress.Commands.add('preencherFormularioEvento', ({ nome, descricao, data }) => {
  cy.get('#nomeEvento').clear().type(nome);
  cy.get('#descricaoEvento').clear().type(descricao);
  cy.get('#dataEvento').clear().type(data);
  cy.get('#eventoForm > .btn').click();
});

