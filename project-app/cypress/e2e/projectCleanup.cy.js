// describe('loading up our page', () => {
//     it('brings us to home page of app and brings to map', () => {
//       cy.visit('https://projectcleanup.netlify.app/')

//       cy.contains('Cleanups Started');
//       cy.contains('Kilograms Collected');
//       cy.contains('No. of Volunteers');

//       cy.contains('Join A Clean').click();

//       cy.url().should('include', '#map');

//       cy.get('[href="/#weather"]').click();

//       cy.get('#default-search').clear().type('dubai').get('.relative > .text-white').click();

//       //cy.contains('Tips').click()

//     })
//   })

  describe('Accessing start clean form', () => {
    it("Logs in with Auth0", () => {
      cy.visit("https://projectcleanup.netlify.app/");
      cy.contains('Start A Clean').click();

      cy.origin("https://dev-659k2jkc.us.auth0.com/", () => {
        cy.get("#username").type(Cypress.env("USERNAME"));
        cy.get("#password").type(Cypress.env("PASSWORD"));
        cy.contains("Continue").click();
        })

        cy.url().should('include', 'start-a-clean');
        cy.get('[role="button"]').trigger('mousedown', {which: 1, force: true}).trigger('mousemove', {force: true, which: 1, x: 200, y: 0}).trigger('mouseup')
        cy.get('[name="cleanName"]').type('London Clean').should('have.value', 'London Clean');
        cy.get('[name="location"]').type('Cypress test').should('have.value', 'Cypress test');
        cy.get('[name="date"]').type('2022-08-11').should('have.value', '2022-08-11');
        cy.get('[name="startTime').type('12:00').should('have.value', '12:00');
        cy.get('[name="endTime').type('15:00').should('have.value', '15:00');
        cy.get('[name="host"]').type('Cypress').should('have.value', 'Cypress');
        cy.contains('Submit').click();
        cy.contains('Back to Map').click();

        // cy.get('[href="/"]').click();
        // cy.url().should('include', 'https://projectcleanup.netlify.app/');
    })
  })

  // describe('Acessing log clean form', () => {
  //   it('logs in and tests inputs', () => {
  //     cy.visit("https://projectcleanup.netlify.app/");
  //     cy.contains('Log A Clean').click();

  //     cy.origin('https://dev-659k2jkc.us.auth0.com/', () => {
  //       cy.get("#username").type(Cypress.env("USERNAME"));
  //       cy.get("#password").type(Cypress.env("PASSWORD"));
  //       cy.contains("Continue").click();
  //     })

  //     cy.url().should('include', 'log-a-clean');

  //     cy.get('[name="cleanname"]').type('Cypress test');
  //     cy.get('[name="bags"]').type('1');
  //     cy.get('[name="volunteers"]').type('1')
  //     cy.contains('Submit').click();
  //     cy.contains('Back to home').click();
  //     cy.url().should('include', 'https://projectcleanup.netlify.app/')
  //   })
  // })