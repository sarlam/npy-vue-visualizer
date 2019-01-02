// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// FILE UPLOAD :
// https://stackoverflow.com/questions/47074225/how-to-test-file-inputs-with-cypress
// https://github.com/cypress-io/cypress/issues/170

/**
 * Converts Cypress fixtures, including JSON, to a Blob. All file types are
 * converted to base64 then converted to a Blob using Cypress
 * expect application/json. Json files are just stringified then converted to
 * a blob (prevents issues with invalid string decoding).
 * @param {String} fileUrl - The file url to upload
 * @param {String} type - content type of the uploaded file
 * @param {String} encoding - encoding of the fetched fixture
 * @return {Promise} Resolves with blob containing fixture contents
 */
function getFixtureBlob (fileUrl, type, encoding) {
  return type === 'application/json'
    ? cy
      .fixture(fileUrl)
      .then(JSON.stringify)
      .then(jsonStr => new Blob([jsonStr], { type: 'application/json' }))
    : cy.fixture(fileUrl, encoding)
}

/**
 * Uploads a file to an input
 * @memberOf Cypress.Chainable#
 * @name uploadFile
 * @function
 * @param {String} selector - element to target
 * @param {String} fileUrl - The file url to upload
 * @param {String} type - content type of the uploaded file
 * @param {String} [encoding='base64'] - encoding of the fetched fixture
 */
Cypress.Commands.add('uploadFile', (selector, fileUrl, type = '', encoding = 'base64') => {
  return cy.get(selector).then(subject => {
    const fixture = encoding === 'base64'
      ? getFixtureBlob(fileUrl, type, encoding)
        .then(Cypress.Blob.base64StringToBlob)
      : getFixtureBlob(fileUrl, type, encoding)

    return fixture.then(blob => {
      return cy.window().then(win => {
        const el = subject[0]
        const nameSegments = fileUrl.split('/')
        const name = nameSegments[nameSegments.length - 1]
        const testFile = new win.File([blob], name, { type })
        const dataTransfer = new win.DataTransfer()
        dataTransfer.items.add(testFile)
        el.files = dataTransfer.files
        return subject
      })
    })
  })
})
