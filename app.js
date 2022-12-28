//HW#13
function getRandomNumber(min, max) {
    return min + Math.trunc(Math.random() * (max - min + 1));
}
function getRandomMatrix(rows, columns, min, max) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix.push([]);
        for (let j = 0; j < columns; j++) {
            matrix[i].push(getRandomNumber(min, max));
        }
    }
    return matrix;
}

function getArray(min, max, size) {
    const ar = new Array(size);
    for (let i = 0; i < ar.length; i++) {
        ar[i] = getRandomNumber(min, max);
    }
    return ar;
}
function getHtmlUl(array) {
    let list = '', htmlString = '<ul class = "list_class">';
    for (let i = 0; i < array.length; i++) {
        const strClass = array[i] === 0 ? 'white' : 'black';
        list = '<li class = "item_class">' + `<div class="${strClass}"></div>` + '</li> ';
        htmlString += list;
    }
    htmlString += '</ul>';
    return htmlString;
}

function matrixTransp(matrix) {
    let rowLength = matrix.length;
    let columnsLength = matrix[0].length;
    const transpMatrix = [];
    for (let i = 0; i < columnsLength; i++) {
        transpMatrix.push([]);
        for (let j = 0; j < rowLength; j++) {
            transpMatrix[i].push([]);
            transpMatrix[i][j].push(matrix[j][i]);
        }
    }
    return transpMatrix;
}
console.log("HTML string")
console.log(getHtmlUl(getArray(0, 1, 10)));
console.log("")
let matrix = getRandomMatrix(3, 4, 1, 5);
console.log("matrix is")
console.log(matrix)
console.log("")
console.log("matrix after transporation")
console.log(matrixTransp(matrix))
