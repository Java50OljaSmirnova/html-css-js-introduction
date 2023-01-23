

function createAddress (city, street) {
    return {city, street}
}
function createPerson(id, name, address) {
    return {id, name, address}
}
const persons = [
    createPerson(123, "Vasya", createAddress("Rehovot", "Parshani")),
    createPerson(124, "Olya",  createAddress("Rehovot", "Pr.Plaut")),
    createPerson(125, "Tolya", createAddress("Tel-Aviv", "Dizengoff")),
    createPerson(126, "Sara",  createAddress("Lod", "Sokolov"))
] 

//=======================================
// 1 ) Calculate IN ONE LINE OF CODE the name of Person living in Rehovot and having maximal value of 'id'
//     The expected result: Olya
function living(persons){
    return persons.findLast(pers => pers.address.city === "Rehovot");
}
//=======================================
// 2*) Build IN ONE LINE OF CODE the statistics of persons amount per city. 
//     The expected result is object: {Rehovot:2, 'Tel-Aviv':1,Lod:1}
function statistics(persons){
    const res = {};
    persons.forEach(pers => !res[pers.address.city] ? res[pers.address.city] = 1: res[pers.address.city]++);
    return res;
}
console.log(living(persons).name);
console.log(statistics(persons));