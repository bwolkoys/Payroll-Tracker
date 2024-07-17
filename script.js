// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
addEmployeesBtn.addEventListener("click", addEmployees);

let employees = [];

function addEmployees() {
  let firstName = prompt(`Enter employee's first name:`);
    console.log(`First name:`, firstName);
  let lastName = prompt(`Enter employee's last name:`);
    console.log(`Last name:`, lastName);
  let salaryInput = prompt(`Enter employee's salary`);
  let salary = parseInt(salaryInput) || 0;

  employees.push({firstName, lastName, salary});

  let continueAddingEmployees = confirm("Click ok to add another employee");
    if (continueAddingEmployees) {
      addEmployees();
    } else {
      employees.sort((a, b) => a.lastName.localeCompare(b.lastName));
      }
    }

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
//Getting data to be displayed on the page by last name
  let totalSalary = employees.reduce((acc, emp) => acc + emp.salary, 0);
  let averageSalary = totalSalary / employees.length;
  console.log("Employee data:", employees);
  console.log("Total salary:", totalSalary);
  console.log("Average salary", averageSalary);
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
