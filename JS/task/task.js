const employees = [
  {
    id: 1,
    name: "John",
    department: "Development",
    salary: 50000,
  },
  {
    id: 2,
    name: "Alex",
    department: "QA",
    salary: 45000,
  },
  {
    id: 3,
    name: "David",
    department: "Development",
    salary: 60000,
  },
];

//task 1
console.log("---------Task 1 ----------------");
console.log("All Employees:");
console.log(employees);

// Task 2
const employee = employees.find((emp) => emp.id == 1);

console.log("---------Task 2 ----------------");
console.log("Employee with ID 1:");
console.log(employee);

// Task 3

const developers = employees.filter((emp) => emp.department === "Development");

console.log("---------Task 3 ----------------");
console.log("Employees in Development Department:");
console.log(developers);

// Task 4

const highestSalaryEmp = employees.reduce((max, emp) =>
  emp.salary > max.salary ? emp : max,
);

console.log("---------Task 4 ----------------");
console.log("Highest Salary Employee:");
console.log(highestSalaryEmp);


//Task 5
const totalSalary = employees.reduce((total, emp) => total + emp.salary, 0);
const averageSalary = totalSalary / employees.length;
console.log("---------Task 5 ----------------");
console.log("Average Salary of All Employees:", averageSalary);



//Task 6
const sortEmployees = employees.sort((a, b) => a.salary - b.salary);
console.log("---------Task 6 ----------------");
console.log("Employees sorted by salary:");
console.log(sortEmployees);

//Task 7

employees.push({
  id: 4,
  name: "Naresh Prajapati",
  department: "Development",
  salary: 55000,
});

console.log("---------Task 7 ----------------");
console.log("Added new employee:");
console.log(employees);

//Task 8
const updateEmployee = employees.find((emp) => emp.id == 2);
if (updateEmployee) {
  updateEmployee.salary = 48000;
}

console.log("---------Task 8 ----------------");
console.log("Updated salary for employee with ID 2:");
console.log(updateEmployee);

//Task 9
const removeEmployee = employees.splice(employees.findIndex((emp) => emp.id === 3), 1);

console.log("---------Task 9 ----------------");
console.log("Removed employee with ID 3:");
console.log(removeEmployee);

console.log("All Employees:");
console.log(employees);


//task 10
const searchEmployee = employees.find((emp) => emp.name === "David");

console.log("---------Task 10 ----------------");
console.log("Search for employee named David:");
console.log(searchEmployee);
