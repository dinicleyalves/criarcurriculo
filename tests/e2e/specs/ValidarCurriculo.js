// https://docs.cypress.io/api/introduction/api.html

describe('Validar curriculo simples', () => {
  it('Nome', () => {
    cy.visit('/')
    cy.get('.notice > button').click()
    cy.get('#GET-name').clear().type('teste')
  })
  it('Gênero', () => {
    cy.get('#GET-genero').select("Masculino")
    cy.get('#start').scrollIntoView()
  })
  it('Estado Civil', () => {
    cy.get('[for="GET-maritalstatus-s"]').click()
  })
  it('Idade', () => {
    cy.get('#GET-dataofbirth').type(23)
  })
  it('CEP', () => {
    cy.get('#GET-cep').type('03816130')
  })
  it('Disponivel para viagens', () => {
    cy.get('#GET-travel-yes').click()
  })
  it('Telefone', () => {
    cy.get('#GET-telephone').type(11951401894)
  })
  it('E-mail', () => {
    cy.get('#GET-email').type('lucasferreiralimax@gmail.com')
  })
})

describe('Validar Formação Acadêmica', () => {
  it('Add formação', () => {
    cy.get('.coursers > .btn').click()
  })
  it('Curso atual', () => {
    cy.get('#GET-coursenow0').click()
  })
  it('Escola', () => {
    cy.get('#GET-school').type('Internet')
  })
  it('Curso', () => {
    cy.get('#GET-course').type('Front-end')
  })
  it('Inicio do curso', () => {
    cy.get('#GET-coursedata-start').type('2018-12-01')
  })
  it('Término do curso', () => {
    cy.get('#GET-coursedata-finish').type('2081-12-30')
  })
  it('Sobre', () => {
    cy.get('#GET-courseabout').type('Desenvolver aplicação e soluções para ajudar os seres vivos.')
  })
})

describe('Validar Experiências', () => {
  it('Add experiência', () => {
    cy.get('.experiences > .btn').click()
  })
  it('Curso atual', () => {
    cy.get('#GET-expsnow0').click()
  })
  it('Empresa', () => {
    cy.get('#GET-company').type('Internet')
  })
  it('Cargo', () => {
    cy.get('#GET-exps').type('Front-end')
  })
  it('Inicio do trabalho', () => {
    cy.get('#GET-expsdata-start').type('2018-08-30')
  })
  it('Sobre', () => {
    cy.get('#GET-expsabout').type('Curriculo Grátis')
  })
})
