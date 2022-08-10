describe('loading up our page', () => {
    it('brings us to home page of app and brings to map', () => {
      cy.visit('https://projectcleanup.netlify.app/')

      cy.contains('Join Cleanup').click()

      cy.url().should('include', '#map')
    })
  })

//   describe('fetching weather', () => {
//     it('searches for weather in a specific city', () => {

//         cy.contains('weather').click()

//         cy.url().should('include', '#weather')
//     })
//   })