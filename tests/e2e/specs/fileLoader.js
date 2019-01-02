// https://docs.cypress.io/api/introduction/api.html

const TYPE_ERROR = '[data-cy="file-upload-type-error"]'
const UPLOAD_INPUT = '[data-cy="file-upload-input"]'

describe('FileLoader', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should fail upload something that isn\'t npy file', () => {
    cy.get(TYPE_ERROR).should('not.be.visible')
    cy.uploadFile(UPLOAD_INPUT, 'badFile.txt')
    cy.get(TYPE_ERROR).should('be.visible')
    cy.url().should('not.contains', 'viz')
  })
})
