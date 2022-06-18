//EX1
function reverse(string) {
    let array = string.split("");
    array.reverse();
    let reverse = array.join("");
    return reverse;
}

let string = "abcdef";
console.log(reverse(string));

//Ex2
function deleteRepetition(array) {
    array.sort();
    for (let i = 1; i < array.length; i++) {
        if (array[i] === array[i-1]) {
            array.splice(i, 1);
            i--;
        }
    }
    return array;
}

let array = [1, 2, 3, 4, 5, 4, 2, 6, 4]; 
console.log(deleteRepetition(array));

//Ex3 
function histogram(array) {
    //create a new array with the length of the max value of old array
    let histogram = Array(array.reduce((a, b) => b > a ? b : a)+1).fill(0);
    for (let i = 0; i < array.length; i++) {
        histogram[array[i]]++;
    }
    return histogram;
}

function printMostRepeat(array) {
    array.sort();
    let his = histogram(array);
    let max = his.reduce((a, b) => b > a ? b : a);
    //console.log(his);
    console.log(`value: ${his.indexOf(max)}, count: ${max}`);
}

let repeatArray = [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3];
printMostRepeat(repeatArray);


//Ex4
const msg = document.querySelector(".msg");
const form = document.querySelector("form");
const name = document.getElementById("name");
const phone = document.getElementById("phone");

//
let data = [
    {
        name: "",
        phone: "",
    },
];


function Add() {
    let content = document.createElement('p');
    content.textContent = `${name.value} ${phone.value}`;
    msg.appendChild(content);
    //data.push();
}
