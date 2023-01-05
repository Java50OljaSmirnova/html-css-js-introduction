//HW #14(1)
function coloringString(str1, str2){
    return str1.length == str2.length ? stringComparison(str1, str2) : "The length of string isn't the same";
   
}
function stringComparison(str1, str2){
    const ar1 = Array.from(str1);
    const ar2 = Array.from(str2);
    const arrayColors = ar2.map(function (letter, index){
        return getColor(letter, index, ar1);

    })
    return arrayColors;
}
function getColor(letter, index, ar1){
    let color = "";
    for(let i = 0; i < ar1.length; i++){
        if(letter === ar1[i] && index == i){
            color = "green";
            i = ar1.length;
        } else if(letter === ar1[i]){
            color = "yellow";
        }
    }
    return color.length > 1 ?  color : "red";
}

//HW14 (2)
function getNumbersWithDigitsAmount(digitsAmount, array) {
    
    const arrayGivenNumbers = array.filter(function(number){
        return String(number).indexOf('-') == 0 ? String(number).length - 1 == digitsAmount : String(number).length == digitsAmount;
    })
    return arrayGivenNumbers;
}
console.log('task 1');
console.log(coloringString("pappy", "mamy"));
console.log('');
console.log('task 2');
console.log(getNumbersWithDigitsAmount(1, [3, 20, 100, -5, 1000, 345, 56]));
