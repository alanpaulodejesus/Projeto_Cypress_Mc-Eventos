const { getFutureDate } = require('../../support/utils');

describe('POST /evento - Criar Evento', () => {
  const baseUrl = Cypress.env('baseUrlApi');
  const nome = 'Evento João';
  const descricao = 'Descricao do evento do João';
  const dataEvento = getFutureDate(2);

  it('Deve criar um evento com sucesso', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/evento`,
      body: {
        nomeEvento: nome,
        descricaoEvento: descricao,
        dataEvento: dataEvento
      },
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id').and.to.be.greaterThan(0);
      expect(response.body.nomeEvento).to.eq(nome);
      expect(response.body.descricaoEvento).to.eq(descricao);
      expect(response.body.dataEvento).to.eq(dataEvento);
    });
  });

    it('Deve validar data menor que atual', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/evento`,
      body: {
        nomeEvento: nome,
        descricaoEvento: descricao,
        dataEvento: '2024-08-15'
      },
      failOnStatusCode: false,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.message).to.eq("A data do evento não deve ser menor que a data atual.");
    });
  });

    it('Deve excluir o evento com sucesso', () => {
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
});