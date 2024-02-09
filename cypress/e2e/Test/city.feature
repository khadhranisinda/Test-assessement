Feature: Display City of Origin for Selected Employees

Scenario: Verify display of city of origin for selected employees
  Given I am on the employee management page
  When I select certain employees
  And I view the selected employees' details
  Then I should see the city of origin displayed for each selected employee
