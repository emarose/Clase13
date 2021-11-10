let cadena = "javascript";
let len = cadena.length;
let uppercaseLastLetter = cadena.charAt(len-1).toUpperCase(); //ultimo caracter a mayuscula
let restString = cadena.substring(-1); // saca el ultimo caracter
let joinString = restString+uppercaseLastLetter;
console.log(joinString);
