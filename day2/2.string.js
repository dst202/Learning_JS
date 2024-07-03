//string

var cobra = "tasupamu ";
var kattla = "katta";

cobra += kattla;
console.log(cobra);

//escape character for esapcing generally quoutes

var hero = "maxmimus \"decimum \" praxis \" ";

console.log(hero);


//can also use single quote
var hero = 'maxmimus \"decimum \" praxis \ ';
console.log(hero);
 
// can also used  back ticks 

var hero = '<maxmimus "decimum " praxis " \'kalki\'>';

console.log(hero);


//more escape sequences
/*


\'
\"
\\
\n
\r
\t
\b
\f

*/

var hero = 'maxmimus\' \ndecimum \\" \n praxis " \t kalki \b bhairava\'>';
console.log(hero);

