


describe('Pizza App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })


    const nameInput = () => cy.get('input[name=name]')
    const pepperoniInput = () => cy.get('input[name=pepperoni]')
    const sausageInput = () => cy.get('input[name=sausage]')
    const specialInput = () => cy.get('input[name=special]')
    const submitBtn = () => cy.get('button[id="submit"]')


    it('Sanity check to make sure that tests work', () => {
        // "it" is a test
        // "expect" is an assertion
        expect(1 + 2).to.equal(3)
        expect(2 + 2).not.to.equal(5)
        expect({}).not.to.equal({}) // equal ie ===
        expect({}).to.eql({}) // eql ie ==
    })

    describe('Filling out the inputs', () => {
        it('Can type in the inputs', () => {
            nameInput()
                .type('Be cool')
                .should('have.value', 'Be cool')
        })
    
    })

    describe('Can multiple checkboxes be checked', () => {
        it('Can user use checkbox', () => {
            pepperoniInput()
                .check()
                .should('be.checked')
                sausageInput()
                .check()
                .should('be.checked')
        })
    })

    describe('Can user sumbit the form data', () => {
        it('Can a user can submit the form data', () => {
        nameInput().type('JasonVann')
        specialInput().type('Extra Cheese plz')
        pepperoniInput().check()
        submitBtn().click()
        cy.contains('Extra Cheese plz')
    })
})


})