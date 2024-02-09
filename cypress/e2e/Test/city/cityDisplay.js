import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('I am on the employee management page', () => {
 
  cy.visit('http://localhost:8080/employees.html');
});

When('I select certain employees', () => {
  cy.get('#row1treeGrid > .jqx-grid-cell-nowrap > .jqx-tree-grid-checkbox').click(); 
  cy.get('#row3treeGrid > .jqx-grid-cell-nowrap > .jqx-tree-grid-checkbox').click(); 
});

And('I view the selected employees\' details', () => {
  cy.get('#btn').click(); 
});

Then('I should see the city of origin displayed for each selected employee', () => {
  cy.get('#listitem0listBoxSelected > .jqx-listitem-state-normal').should('contain.text', 'Nancy is from Seattle'); 
  cy.get('#listitem1listBoxSelected > .jqx-listitem-state-normal').should('contain.text', 'Margaret is from Redmond'); 
});
