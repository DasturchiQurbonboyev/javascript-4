// for 1

// let a = +prompt("a ni kiriting");
// let b = +prompt("b ni kiriting");

// let sonlar = 0;

// for (let i = a; i <= b; i++) {
//     sonlar++;
//     console.log(i);
// }

// console.log(sonlar);


// for 2

// let a = +prompt("a ni kiriting");
// let b = +prompt("b ni kiriting");

// let sonlar = 0;

// for (let i = b-1; i > a; i--) {
//     sonlar++;
//     console.log(i);
// }

// console.log(sonlar);

// for 3

// let n = +prompt("n ni kiriting");
// let kg = +prompt("kg ni kiriting");

// let sum;

// for (let i = n; i <= 10 ; i++) {
    
//     sum = i*kg;
//     console.log(sum);
    
// }

// for 4

// let kg = +prompt(" kg narxini kiriting");

// for (let i= 12; i<=20; i++){
//     console.log((kg*i)/10);
// }

// for 5

// let a = +prompt("a ni kiriting");
// let b = +prompt("b ni kiriting");

// let sum = 0;

// for (let i = a; i <= b; i++) {
//    if(a<b){
//      sum +=i;
//    }
// }

// console.log(sum);

// for 6

// let a = +prompt("a ni kiriting");
// let b = +prompt("b ni kiriting");

// let mul = 1;

// for (let i = a; i <= b; i++) {
//    if(a<b){
//      mul *=i;
//    }
// }

// console.log(mul);

// for 7

// let a = +prompt("a ni kiriting");
// let b = +prompt("b ni kiriting");

// let S = 0;

// for (let i = a; i <= b; i++) {
//    if(a<b){
//      S +=i**2;
//    }
// }

// console.log(S);

// for 8

// let n = +prompt(" n ni kiriting")

// let S = 0;

// for (let i = 1; i <= n; i++) {
//     S += 1 / i;
// }

// console.log("Natija:", S);


// for 9

// let n = +prompt("n ni kiriting (n > 0):");
// let S = 1;

// for (let i = 1; i <= n; i++) {
//     S *= 1.1 * i;
// }

// console.log("Natija:", S);

// for 10

// let n = +prompt("n ni kiriting (n > 0):");

// let S = 0;

// let C = 0;

// for (let i = 1; i <= n; i++) {
//     S=(2*i-1);
//     C += S;
//     console.log(S);
// }

// console.log(C);


// for 11

// let n = +prompt("n ni kiriting (n > 0):");
// let a = +prompt("a ni kiriting ");

// result =1;

// for (let i = 1; i <= n; i++){
//     result *= a;
// }

// console.log(result);

// for 12

// let n = +prompt("n ni kiriting (n > 0):");
// let a = +prompt("a ni kiriting ");

// result =1;

// for (let i = 1; i <= n; i++){
//     result *= a;
// console.log(result);
// }


// for 13

// let n = +prompt("n ni kiriting (n > 0):");
// let a = +prompt("a ni kiriting ");

// result =1;

// let S = 0;

// for (let i = 1; i <= n; i++){
//     result *= a;
//     S +=result;
// console.log(result);

// }

// console.log(S);

// for 14

// let n = +prompt("n ni kiriting:");
// let C=1;
// let S=0;

// for (let i=1; i<= n; i++){
//     C *= i;
//     S +=C;

//     console.log(C);
// }
// console.log(S);


// for 15

// let N = +prompt("N ni kiriting:");
// let K = +prompt("K ni kiriting:");

// let S = 0;

// for ( i= 1; i<= N; i++){
//     console.log(i);
//     S += i**K;
// }
// console.log(S);


// for 16

// let N = +prompt("N ni kiriting:");

// let S = 0;

// for ( i= 1; i<= N; i++){
//     console.log(i);
//     S += i**i;
// }
// console.log(S);

// for 17

// let A = +prompt("A ni kiriting:");
// let B = +prompt("B ni kiriting:");

// for (let i = A; i <= B; i++) {
//     for (let j = 1; j <= i - A + 1; j++) {
//         console.log(i);
//     }
// }


// for 18

// let x = +prompt("x ni kiriting ")

// let divisors = Array();

// let sum = 0;

// for (let i = 1; i <= x; i++) {
//     if (x % i === 0) {
//         divisors.push(i);
//         sum += i;
//     }
// }

// console.log(divisors);
// console.log(sum);

// for 19

// let n = +prompt("Istalgan butun sonni kiriting (n > 1):");

// if (n <= 1) {
//     console.log("Noto'g'ri qiymat kiritildi. n > 1 bo'lishi kerak.");
// } else {
//     let x = true;

//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             x = false;
//             break;
//         }
//     }

//     if (x) {
//         console.log(`${n} tub son.`);
//     } else {
//         console.log(`${n} tub emas.`);
//     }
// }

// for 20

// let N = +prompt("N ni kiriting:");

// for (let i = 1; i <= N; i++) {
//     let line = '';
//     for (let j = 1; j <= i; j++) {
//         line += j + ' ';
//     }
//     console.log(line.trim());
// }



// while 1

// let A = +prompt("A ni kiriting:");
// let B = +prompt("B ni kiriting (A > B):");

// if (A <= B) {
//     console.log("Noto'g'ri qiymatlar kiritildi. A > B bo'lishi kerak.");
// } else {
//     let empty = A ;
    
//     while (empty >= B) {
//         empty = empty - B;
//     }

//     console.log(empty);
// }


// while 2

// let A =  +prompt("A ni kiriting:");
// let B = +prompt("B ni kiriting (A > B):");

// if (A <= B) {
//     console.log("Noto'g'ri qiymatlar kiritildi. A > B bo'lishi kerak.");
// } else {
//     let part = A;
//     let count = 0;

//     while (part >= B) {
//         part -= B;
//         count++;
//     }

//     console.log(count);
// }

// while 3

// let n = +prompt("Istalgan butun sonni kiriting (n > 0):");

// if (n > 0 && n % 3 === 0) {
//     console.log("3 - ning darajasi");
// } else {
//     console.log("3 - ning darajasi emas");
// }

// while 4



// while 5



// while 1
// while 1
// while 1
// while 1
// while 1
