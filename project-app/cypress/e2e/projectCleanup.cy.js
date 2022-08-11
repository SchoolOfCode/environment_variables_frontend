// describe('loading up our page', () => {
//     it('brings us to home page of app and brings to map', () => {
//       cy.visit('https://projectcleanup.netlify.app/')

//       cy.contains('Cleanups Started')
//       cy.contains('Kilograms Collected')
//       cy.contains('No. of Volunteers')

//       cy.contains('Join A Clean').click()

//       cy.url().should('include', '#map')

//       cy.get('[href="/#weather"]').click()

//       cy.get('#default-search').clear().type('dubai').get('.relative > .text-white').click()

//       cy.contains('Tips').click()

      //This won't work until we add cypress as a user in auth0 settings
    //   cy.contains('Start Cleanup').click()

  //   })
  // })

  describe('Accessing start clean form', () => {
    it("Logs in with Auth0", () => {
      cy.visit("https://projectcleanup.netlify.app/");
      cy.contains('Start A Clean').click()

      cy.origin("https://dev-659k2jkc.us.auth0.com/", () => {
        cy.get("#username").type(Cypress.env("USERNAME"));
        cy.get("#password").type(Cypress.env("PASSWORD"));
        cy.contains("Continue").click()
        })

        cy.url().should('include', 'start-a-clean')
        cy.get('[name="cleanName"]').type('London Clean')
        cy.get('[href="/"]').click()
        cy.url().should('include', 'https://projectcleanup.netlify.app/')
    })
  })