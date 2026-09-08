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

// Task 1
employees.forEach((emp) => {
  console.log(
    `Employee ID: ${emp.id}, Name: ${emp.name}, Department: ${emp.department}, Salary: ${emp.salary}`,
  );
});

// Task 2
const employee = employees.find((emp) => emp.id == 1);
console.log(employee);

// Task 3
const developers = employees.filter((emp) => emp.department === "Development");
console.log(developers);

// Task 4
const highestSalaryEmp = employees.length > 0
  ? employees.reduce((max, emp) =>
      emp.salary > max.salary ? emp : max
    )
  : null;

if (highestSalaryEmp) {
  console.log(highestSalaryEmp);
} else {
  console.log("No employees found");
}

//Task 5

const totalSalary = employees.reduce((total, emp) => total + emp.salary, 0);
const averageSalary = totalSalary / employees.length;
console.log("Average Salary of All Employees:", averageSalary);

//Task 6
const sortEmployees = employees.sort((a, b) => a.salary - b.salary);
console.log(sortEmployees);

//Task 7
employees.push({
  id: 4,
  name: "Naresh Prajapati",
  department: "Development",
  salary: 55000,
});

console.log(employees);

//Task 8
const updateEmployee = employees.find((emp) => emp.id == 2);
if (updateEmployee) {
  updateEmployee.salary = 48000;
}

console.log(updateEmployee);

//Task 9
const removeEmployee = employees.splice(
  employees.findIndex((emp) => emp.id === 3),
  1,
);
console.log(removeEmployee);

console.log("All Employees:");
console.log(employees);

//task 10
const searchEmployee = employees.find((emp) => emp.name === "Naresh Prajapati");

console.log(searchEmployee);






