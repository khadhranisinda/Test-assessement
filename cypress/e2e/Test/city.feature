Feature: Display City of Origin for Selected Employees

Background:
  Given I am on the employee management page

    Scenario: Verify display of city of origin for selected employees
  
      When I select certain employees
      And I view the selected employees' details
      Then I should see the city of origin displayed for each selected employee
