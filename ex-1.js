// Exercise #1: For Each Function

function forEach(array, operation) {
  // Start coding here
  return operation(array)
}
function newSalary(salary) {
  for (let a = 0; a < salary.length; a++) {
    newEmployeeSalaries.push(salary[a] + 5000)
  }
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

// Using `forEach` function here
forEach(employeeSalaries, newSalary)
console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
