describe('Validar Textos', () => {
  it('Inicio', () => {
    cy.contains('h1', 'Currículo Grátis')
    cy.contains('.mark > h2', 'Criar currículo grátis, rápido e fácil')
    cy.contains('#start', 'Preencha o formulário com suas informações')
  })
  it('Sobre', () => {
    cy.get('.btn[href="/sobre"]').click({ force: true })
    cy.contains('h1', 'Currículo Grátis')
    cy.contains('.mark > h1', 'Informações')
  })
})
