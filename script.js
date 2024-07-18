
const employees = [];
// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.getElementById('#add-employees-btn');
//added event listener so the prompts below open up one at a time once I click "add employees button"
addEventListener("click", function() {
  const firstName = window.prompt(`Enter employee's first name:`);
  const lastName = window.prompt(`Enter employee's last name:`);
  const salary = window.prompt(`Enter employee's salary`);
//added this to have the variable employees, an array of the first name, last name, and salary and then did the .push so the information is added at the end.
const employee = {firstName, lastName, salary};
const displayEmployees = employees.push(employee);
//this is if one wants to continue adding employees after adding 1
const continueAddingEmployees = window.confirm (`Would you like to add another employee?`);
if (!continueAddingEmployees) {
  console.log(employees);
}
});


// Collect employee data
const collectEmployees = function() {}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
    let totalSalary = 0;
    };

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  const totalEmployees = employees.length;
  const randomIndex = Math.floor(Math.random()* totalEmployees);
  const getRandomEmployee = employees[randomIndex];
  console.log(`The random employee picked is ${getRandomEmployee.firstName} ${getRandomEmployee.lastName}`);

}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);






