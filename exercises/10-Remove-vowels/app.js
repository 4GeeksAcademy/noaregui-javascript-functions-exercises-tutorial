// Your code goes here
const rapid = (string) => {
    let vocales = ['a', 'e', 'i', 'o', 'u'];
    let resultado = '';
    for (let i = 0; i < string.length; i++) {
        if(!vocales.includes(string[i].toLowerCase())) {
           resultado += string[i].toUpperCase();
        }  
    }
   return resultado;
}

// Work above this line; do not change code below
let str = "John";
console.log(rapid(str));