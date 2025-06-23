import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Then('eu devo ver uma lista de produtos', () => {
  cy.get('.inventory_list .inventory_item').should('have.length.greaterThan', 0);
});

When('eu clico no produto {string}', (productName) => {
  cy.contains('.inventory_item_name', productName).click();
});

Then('eu sou redirecionado para a página de detalhes do produto {string}', (productName) => {
  cy.get('.inventory_details_name').should('have.text', productName);
});

When('eu ordeno os produtos por {string}', (order) => {
    let sortValue = '';
    if (order.includes('Name (A to Z)')) sortValue = 'az';
    if (order.includes('Name (Z to A)')) sortValue = 'za';
    if (order.includes('Price (low to high)')) sortValue = 'lohi';
    if (order.includes('Price (high to low)')) sortValue = 'hilo';
    cy.get('.product_sort_container').select(sortValue);
});

Then('os produtos devem ser exibidos ordenados por {string}', (sortType) => {
    if (sortType === 'nome_asc') {
        cy.get('.inventory_item_name').then($items => {
            const names = $items.map((i, el) => Cypress.$(el).text()).get();
            expect(names).to.deep.equal([...names].sort());
        });
    } else if (sortType === 'nome_desc') {
        cy.get('.inventory_item_name').then($items => {
            const names = $items.map((i, el) => Cypress.$(el).text()).get();
            expect(names).to.deep.equal([...names].sort().reverse());
        });
    } else if (sortType === 'preco_asc') {
        cy.get('.inventory_item_price').then($items => {
            const prices = $items.map((i, el) => parseFloat(Cypress.$(el).text().replace('$', ''))).get();
            expect(prices).to.deep.equal([...prices].sort((a, b) => a - b));
        });
    } else if (sortType === 'preco_desc') {
        cy.get('.inventory_item_price').then($items => {
            const prices = $items.map((i, el) => parseFloat(Cypress.$(el).text().replace('$', ''))).get();
            expect(prices).to.deep.equal([...prices].sort((a, b) => b - a));
        });
    }
});