describe('Mocky API Test', () => {
    it('Get mocky request', () => {
        cy.request('https://run.mocky.io/v3/0d6ab499-0547-4196-a580-934954e6f297')
           .then((response) => {
            expect(response.status).to.eq(200)
        })
    })
})

// Can you explain the logging test with any response json code, for example : 
// - 200 : API OK 
// - 400 : Bad Request 
// - 404 : Not Found 
// - 500 : Internal Server Error 
// - 410 : Unknown Error Code
// - 503 : Internal error