const name = "chandu-patil"
const repoCount = 20

//console.log(name + repoCount + " Value");

console.log( `Hello my name ${name} and my repo ${repoCount}`);

const gameName = new String("Chandu--Patil")

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);

console.log(gameName.toUpperCase()); //CHANDU
console.log(gameName.toLowerCase()); //chandu

console.log(gameName.charAt(0)); // 0 index alphabet

console.log(gameName.indexOf('h')); // index of h

const newString = gameName.substring(0,4); //Chandu
console.log(newString);

const anthorString = gameName.slice(-4,0); //

const newStringOne =     "    Chandrashekhar   " ;

console.log(newStringOne.trim()); //removes the spaces to words

const url = "https://chandrashekhar.com/chandu%30patil";

console.log(url.replace('%30','_')); //https://chandrashekhar.com/chandu_patil 

console.log(url.includes('Peak')); //false

console.log(url.includes('patil')); //True

console.log(gameName,split('--'));



