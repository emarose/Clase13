function deleteVocals(str) {
  let res = str.replace(/[aeiou]/g, ''); // reemplaza aeiou por ' ', de forma global
  return res;
}

let str = "origin";
console.log(deleteVocals(str));
