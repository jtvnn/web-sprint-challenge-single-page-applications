


describe('Pizza App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })
})

const nameInput = () => cy.get('input[name=name]')

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