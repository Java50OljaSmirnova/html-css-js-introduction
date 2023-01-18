function createEmployee(id, name, birthYear, salary, city, country){
    return {id, name, birthYear, salary, adress: {city, country}}
}

const employees = [
    createEmployee(123, "Vasya", 2000, 15000, "Lod", "Israel"),
    createEmployee(124, "David", 1975, 15500, "Tel Aviv", "Israel"),
    createEmployee(125, "Sara", 1985, 20000, "New York", "USA"),
    createEmployee(126, "Abraham", 1990, 13000, "London", "UK"),
    createEmployee(127, "Moshe", 2000, 15000, "Rehovot", "Israel"),
    createEmployee(128, "Goga", 1993, 10000, "Tbilisi", "Georgia"),
    createEmployee(129, "Sasha", 2000, 25000, "Ramat Gan", "Israel"),
    createEmployee(130, "Victor", 2003, 10000, "Arad", "Israel")
]
//const index = employees.indexOf(createEmployee(126, "Abraham", 1990, 13000, "London", "UK")); //not right
const index = employees.findIndex(function(empl){
    return empl.id === 126;
})
const employee = employees.find(function(empl){
    return empl.id === 126;
})
//HW #18
function getEmployee(employees, id){
    const employee = employees.find(function(empl){
        return empl.id === id;
    })
    return employee;
}
let id = 126
console.log(`Employee has id: ${id}`)
console.log(getEmployee(employees, id));

function getEmployeesBySalary(employees, salaryFrom, salaryTo){
    const arrayEmployees = employees.filter(function(empl){
        return empl.salary >= salaryFrom && empl.salary <= salaryTo;
    })
    return arrayEmployees;
    
}
let salaryFrom = 13000;
let salaryTo = 15000
console.log(`Employees with salary from ${salaryFrom} to ${salaryTo}:`);
console.log(getEmployeesBySalary(employees, salaryFrom, salaryTo))

function getEmployeesByCity(employees, city){
    const arrayEmployees = employees.filter(function(empl){
        return empl.adress.city === city;
    })
    return arrayEmployees;
}
let city = "New York";

console.log(`Employees from city: ${city} are`);
console.log(getEmployeesByCity(employees, city));

function getEmployeeNames(employees){
    const namesOfEmployees = employees.map(function(empl){
        return empl.name;
    })
    return namesOfEmployees
}
console.log(`Names of all employees: ${getEmployeeNames(employees).join(" , ")}`);

function sortEmployeesByAge(employees){
    const arrayByAge = employees.sort(function(empl1, empl2){
        return empl1.birthYear - empl2.birthYear;
    })
    return arrayByAge;
}
console.log(`Employee objects sorted by age in ascending order`);
console.log(sortEmployeesByAge(employees));

function computeSalaryBudget(employees){
    const totalSalary = employees.reduce(function(res, empl){
        return res + empl.salary;
    }, 0)
    return totalSalary;
}
console.log(`Total salary = ${computeSalaryBudget(employees)}`);