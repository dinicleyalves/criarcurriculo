describe('Validar Formatos - Basico', () => {
  it('Nome', () => {
    cy.visit('/')
    cy.wait(7000)
    cy.get('#GET-name').clear().type('Lucas Ferreira de Lima')
  })
  it('Gênero', () => {
    cy.get('#GET-genero').select("Masculino")
    cy.get('#start').scrollIntoView()
  })
  it('Estado Civil', () => {
    cy.get('[for="GET-maritalstatus-s"]').click()
  })
  it('Idade', () => {
    cy.get('#GET-dataofbirth').type(25)
  })
  it('Hobbies', () => {
    cy.get('.select-hobby .btn.plus.bullet.small').click()
    cy.get('.select-hobby input').type('teste')
  })
  it('CEP', () => {
    cy.get('#GET-cep').type('03816130')
    cy.get('#GET-address-number').type('1')
  })
  it('E-mail', () => {
    cy.get('#newEmail').click()
    cy.get('#GET-email-0').type('lucasferreiralimax@gmail.com')
  })
  it('Site', () => {
    cy.get('#newSite').click()
    cy.get('#GET-site-0').type('www.curriculo-gratis.web.app')
  })
})

describe('Validar Formatos', () => {
  it('Formato 1', () => {
    cy.get('#start').scrollIntoView()
    cy.get('.layout .btn:nth-of-type(1)').click()
    cy.wait(2000)
  })
  it('Formato 2', () => {
    cy.get('.layout .btn:nth-of-type(2)').click()
    cy.wait(2000)
  })
  it('Formato 3', () => {
    cy.get('.layout .btn:nth-of-type(3)').click()
    cy.wait(2000)

    cy.get('.layout .btn:nth-of-type(1)').click()
  })
})
