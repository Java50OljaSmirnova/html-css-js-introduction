//HW#12
// let str = "-123m";
// let num = parseInt(str) + 10;
// let str1 = "js.5";
// let numInt = parseInt(str);
// let numFloat = parseFloat(str);
function myParseInt(str, base){
    base = base || 10;
    let res = 0, res2 = 0;
    let letter = str.indexOf(".");
    if(letter > -1){
        let myArray = str.split(".");
        str = myArray[0];
    }
    for(let i = 0; i < str.length; i++){
        if(str[i] > "9"){
            i = str.length;
        } else{
            res = res * base + getCode(str[i]);
        }    
    }
    return str.charAt(0) == "-" ? res * (-1) : res;
}
function getCode(symbol) {
    symbol = symbol.toLowerCase();
    const codeA = 'a'.charCodeAt();
    const res = symbol <= '9' ? +symbol : symbol.charCodeAt() - codeA + 10;
    return res;
}
let str1 = "ff";
let str2 = "-123";
let str22 = "java";
let str3 = "123m";
let str4 = "123.5";
let num = parseInt(str1, 16);
let myNum = myParseInt(str1, 16);
num = parseInt(str2);
myNum = myParseInt(str2);
num = parseInt(str22, 36);
myNum = myParseInt(str22, 36);
num = parseInt(str3);
myNum = myParseInt(str3);
num = parseInt(str4);
myNum = myParseInt(str4);
let number = 255;
let str = "" + number;
str = number.toString(36);
function myToString(number, base){
    let res = "", res2 = "";
    if (number < 0){
        res = "-" + res;
    }
    base = base || 10;
    number = Math.abs(number);
    let decimal = number % 1;
    let num = Math.trunc(Math.abs(number));
    if (decimal > 0){
        let count = 1;
        let rem = 0;
        do{
            decimal *= 10;
            rem = Math.trunc(decimal);
            if (rem % 10 == 0){
                count = 0;
            }
        }while(count);
        decimal = rem/10;
    }
    res = res + changeNumber(num, base);
    res2 = changeNumber(decimal, base);
    return number % 1 == 0 ? res : res + "." + res2;
}
function changeNumber(num, base){
    let res = "";
    do {
        const digit = num % base;
        const symbol = getSymbol(digit);
        res = symbol + res;
        num = Math.trunc(num / base);
    }while(num);
    return res;
}
function getSymbol(digit){
    const codeA = 'a'.charCodeAt();
    const codeAscii = digit - 10 + codeA;
    const symbol = digit < 10 ? "" + digit : String.fromCharCode(codeAscii);
    return symbol;
}
let num100 = -990500;
let str100 = num100.toString();
let myStr100 = myToString(num100);
str100 = num100.toString(36);
myStr100 = myToString(num100, 36);
num100 = 123.45;
str100 = num100.toString(16);
myStr100 = myToString(num100, 16);