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