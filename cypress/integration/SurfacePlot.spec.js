describe('CSV data', function() {
    it('verify CSV data is available', function() {
        cy.request('https://raw.githubusercontent.com/plotly/datasets/master/api_docs/mt_bruno_elevation.csv')
    })
})