//HW #15
//task sort.1
function evenOddSort(array){
    const evenArray = array.sort(function(a, b){
        const firstEven = b%2 === 0;
        const secondEven = a%2 === 0;
        if (firstEven){
            return secondEven ? 0 : 1;
        } else {
            return secondEven ? -1 : 0;
        }  
    });
    return evenArray;
}
console.log(`result of sorting array to even [20, -10, 333, 1000, 552, 7, -7] is ${evenOddSort([20, -10, 333, 1000, 552, 7, -7])}`);

//task sort.2
function oddEvenSort(array){
    const oddArray = array.sort(function(a, b){
        const firstEven = b%2 === 0;
        const secondEven = a%2 === 0;
        if (!firstEven){
            return !secondEven ? 0 : 1;
        } else {
            return !secondEven ? -1 : 0;
        }  
    });
    return oddArray;
}
console.log(`result of sorting array to odd [20, -10, 333, 1000, 552, 7, -7] is ${oddEvenSort([20, -10, 333, 1000, 552, 7, -7])}`);

//task sort.3
function evenAscOddDesc(array){
    const evenOddArray = array.sort(function(a, b){
        const firstEven = b%2 === 0;
        const secondEven = a%2 === 0;
        if (firstEven){
            return secondEven ? a - b : 1;
        } else {
            return secondEven ? -1 : b - a;
        }  
    });
    return evenOddArray;
}

console.log(`result of sorting array [20, -10, 333, 1000, 552, 7, -7] is ${evenAscOddDesc([20, -10, 333, 1000, 552, 7, -7])}`);

console.log ('**********************************************************************************************************');

//task reduce.1
function getMin(array){
    const res = array.reduce(function(a, b){
        return a < b? a : b;
    })
    return res;
}
console.log(`Min element of [20, -10, 333, 1000, 552, 7, -7] is ${getMin([20, -10, 333, 1000, 552, 7, -7])}`);

//task reduce.2
function getMax(array){
    const res = array.reduce(function(a, b){
        return a > b? a : b;
    })
    return res;
}
console.log(`Max element of [20, -10, 333, 1000, 552, 7, -7] is ${getMax([20, -10, 333, 1000, 552, 7, -7])}`);
//task reduce.3
function getAverage(array){
    const res = array.reduce(function(a, b){
        return a + b;
    })
    return Math.trunc(res / array.length);
}
console.log(`Average result of [20, -10, 333, 1000, 552, 7, -7] is ${getAverage([20, -10, 333, 1000, 552, 7, -7])}`);
//task reduce.4
function getMinMaxAv(array){
    let min = getMin(array); 
    let max = getMax(array);
    let av = getAverage(array);
    const res = [min, max, av];
    return res;
}
console.log(`result of finction getMinMaxAv ([20, -10, 333, 1000, 552, 7, -7]) is ${getMinMaxAv([20, -10, 333, 1000, 552, 7, -7])}`);