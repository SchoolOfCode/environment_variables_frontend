describe('loading up our page', () => {
    it('brings us to home page of app and brings to map', () => {
      cy.visit('https://projectcleanup.netlify.app/')

      cy.contains('Join Cleanup').click()

      cy.url().should('include', '#map')

      cy.get('[href="/#weather"]').click()

      cy.get('#default-search').clear().type('dubai').get('.relative > .text-white').click()

      cy.contains('Tips').click().get('.justify-end > .text-\[\#004F54\]').click()

      //This won't work until we add cypress as a user in auth0 settings
    //   cy.contains('Start Cleanup').click()

    })
  })