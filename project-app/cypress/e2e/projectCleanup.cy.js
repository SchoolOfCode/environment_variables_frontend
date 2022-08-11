describe('loading up our page', () => {
    it('brings us to home page of app and brings to map', () => {
      cy.visit('https://projectcleanup.netlify.app/')

      cy.contains('Cleanups Started')
      cy.contains('Kilograms Collected')
      cy.contains('No. of Volunteers')

      cy.contains('Join Cleanup').click()

      cy.url().should('include', '#map')

        //Uncomment this when the navbar is back
      // cy.get('[href="/#weather"]').click()

      cy.get('#default-search').clear().type('dubai').get('.relative > .text-white').click()

      cy.contains('Tips').click()

      //This won't work until we add cypress as a user in auth0 settings
    //   cy.contains('Start Cleanup').click()

    })
  })