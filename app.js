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
//HW #19
//returns country with most amount of employees
function getMostPopulatedCountry(employees){
    let res = "";
    const objContries = getContriesOccurrences(employees);
    const arrayCountryAndNumber = Object.entries(objContries);
    arrayCountryAndNumber.sort((country1, country2) => country2[1] - country1[1] );
    res = arrayCountryAndNumber[0][0];
    return res;
}
function getContriesOccurrences(employees){
    const res = {};
    employees.forEach(empl => {
        !res[empl.adress.country] ? res[empl.adress.country] = 1 : res[empl.adress.country]++;
    });
    return res;
}
console.log(`Country with most amount of employees is "${getMostPopulatedCountry(employees)}"`);

//returns a given number (counter) of countries with most amount of employees
function getMostPopulatedCountries(employees, counter) {
    const res = [];
    const objContries = getContriesOccurrences(employees);
    const arrayCountryAndNumber = Object.entries(objContries);
    arrayCountryAndNumber.sort((country1, country2) => country2[1] - country1[1] );
    for(let i = 0; i < counter; i++){
        res[i] = arrayCountryAndNumber[i][0];
    }
    return res;
}
let counter = 3;
console.log(`${counter} country/ies with most amount of employees is "${getMostPopulatedCountries(employees, counter).join(", ")}"`);
//returns true if a given anagram is indeed an angram of a given word
function isAnagram(word, anagram){
    let res = false;
    if (word.length === anagram.length){
        const str1 = word.split("").sort().join(""); // split() make an array from string
        const str2 = anagram.split("").sort().join(""); //join() make a string from array
        res = (str1 === str2); 
    }
    return res ? "Yes, it's true" : "No, it's false";
}
let word = "marry";
let anagram = "ramry";
console.log(`'${anagram}' is angram of a word '${word}'? "${isAnagram(word, anagram)}"`);