import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";


const employeeManagementPageURL = 'http://localhost:8080/employees.html';
const viewDetailsButton = '#btn';
const employees = [
  { name: 'Nancy', city: 'Seattle' },
  { name: 'Janet', city: 'Kirkland' }
];

beforeEach(() => {
  Given('I am on the employee management page', () => {
    cy.visit(employeeManagementPageURL);
});
});
When('I select certain employees', () => {
  employees.forEach((employee, index) => {
    cy.get(`#row${index + 1}treeGrid > .jqx-grid-cell-nowrap > .jqx-tree-grid-checkbox`).click();
    
  });
});

And('I view the selected employees\' details', () => {
  cy.get(viewDetailsButton).click();

});

Then('I should see the city of origin displayed for each selected employee', () => {
  employees.forEach((employee, index) => {
    cy.get(`#listitem${index}listBoxSelected > .jqx-listitem-state-normal`).should('contain.text', `${employee.name} is from ${employee.city}`);
  });
});
