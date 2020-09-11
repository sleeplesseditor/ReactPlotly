describe('Menu', function() {
    beforeEach(function() {
        cy.visit('/')
    })

    it('should open the menu when the Navbar button is clicked', function() {
        cy.get('.nav-item').click()
        cy.get('.dropdown').should('have.length', 1);
    });

    it('should close the menu when the Navbar button is clicked a second time', function() {
        cy.get('.nav-item').click()
        cy.get('.dropdown').should('have.length', 1);
        cy.get('.nav-item').click()
        cy.get('.dropdown').should('have.length', 0);
    });

    it('should render an SVG icon next to each menu option', function() {
        cy.get('.nav-item').click()
        cy.get('.icon-button').should('have.length', 3)
    })

    it('should render a back option for each sub-menu and return to the first menu when clicked', function() {
        cy.get('.nav-item').click()
        cy.get('.menu>.menu-item').eq(1).click();
        cy.get('.menu-secondary-enter-done>.menu-item').eq(0).click();
        cy.get('.menu>.menu-item').eq(0).contains('Basic');
    });

    it('should open the menu when clicked, and navigate to a new page', function() {
        cy.get('.nav-item').click()
        cy.get('.menu>.menu-item').eq(1).click();
        cy.get('.menu-secondary-enter-done>.menu-item').eq(1).click();
        cy.get('.page-continer-heading').contains('Switch Graph')
    })
})