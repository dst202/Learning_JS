//cancatenation

var a = "Amma";
var b = "Ashwadhama";
var c = " is looking for  ";
var d = "\nBhairava";
var e = " took away ";

var sent = b + c + a;

console.log(sent);

var sent = d + e + a;

console.log(sent);

//using appending

var sent = d + e + a + " and gone\n";

console.log(sent);

// some operations on string

var len = sent.length;
var lett = sent[4]
console.log(len);
console.log(lett);

//string immutability i.e  each letter of string cannot be chnaged but strings 
// can be altered like cancatenation

console.log(sent);
//sent[0] = "J"; //cannot be done
console.log(sent);


//last character in string

var lett = sent[sent.length - 5];
console.log(lett);


