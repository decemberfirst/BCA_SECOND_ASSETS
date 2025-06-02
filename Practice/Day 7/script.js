// moduls ma aagadi even xa rw paxadi 2 xa vani moduls 0 aauxa
// modulos ma aagadi odd xa rw paxadi 1 xa vani modulos 1 aauxa

// ==  perfoms type coertion
// === does not perfom type coertion



                                    // main 


// OPERATORS

// ARITHMETIC OPERATOR
// LOGICAL OPERATOR
// TYPEOF OPERATOR
// RELATIONAL OPERATOR / COMPARASION OPERATOR
// TERNARY OPERATOR
// BITWISE OPERATOR

// ---------------------ARITHMETIC OPERATOR---------------------

// 3 + 2  3 AND 2 OPERANDS
// MATHEMATICAL OPERATORS
// +, -, /, *, %

// console.log(20 + 20); // ADDITION
// console.log(20 - 20); // SUBTRACTION
// console.log(20 / 2); // DIVISION
// console.log(10 * 2); // MULTIPLICATION
// console.log(3 % 2); // % or MODULUS is remainder

// console.log(2 % 2);
// console.log(99999 % 2);
// console.log(80 % 2);

// -----------LOGICAL OPERATOR------------

// AND, OR, NOT

// console.log(true && true);
// console.log(true && false);
// console.log(false && false);

// console.log('abc' && 'BCD'); // TRUE (DUITAI TRUE XA VANE LAST KO)
// console.log('abc' && ''); // FALSE
// // SHOT CIRCUITING
// console.log(0 && 1); // FALSE (JAHA FALSE VETINXA TEHI OUTPUT HUNXA)

// OR OPERATOR

// console.log(1 || 1);
// console.log(1 || 0);
// console.log('abc' || false);
// console.log(false || 'abc');
// console.log(false || 'abc' || true);

// PRACICE PROBLEMS

// 0 + 1 && false => 1 && false  => false
// 0 - 1 && true => -1 && true => true && true
// "abc" || " " || true // => abc (SHOT CIRCUIT)
// true && " " && "" => true && true && false
//"" || "" => false || false
// true || false && true && "abc" || false => true || false && true && true  || false
// null || undefined => false || false
// undefined || false =>  false || false
// null && true => false && true
// null || true || false => false || true || false (SHOT CIRCUIT)

// --------TYPEOF OPERATOR---------------

// -------RELATIONAL / COMPARISION OPERATOR-------------

// <, >, <=, >= !=, ==, === output always (true / false)

// console.log(10 < 20);
// console.log(10 <= 10);
// console.log(10 > 20);
// console.log(20 != 10);
// console.log(10 >= 20);

// console.log('10' == 10); //true // performs type coertion
// console.log('10' === 10); //false // doesnot peform type coertion


// let userNumber1 =Number(prompt("user 1: enter any number"))
// let userNumber2 =Number(prompt("user 2: enter any number "))
// console.log(userNumber1>=userNumber2)




//----------------------------DAY7 ASSINGMENT---------------------
//km to meter ,centimeter, miles milimeter ,hecta homework (use sanga km ma magni)


// let km = Number(prompt("enter the value of kilometer:"));
// let meter = km*1000;
// let CM = km*100000
// let miles = km*0.621371
// let milimeter = km*1000000
// let hecta = km*10

// console.log(`${km} kilometer in meter is:${meter}
//              ${km} kilometer in CM is:${CM}
//              ${km} kilometer in milimeter is:${milimeter}
//              ${km} kilometer in hecta is:${hecta}`)