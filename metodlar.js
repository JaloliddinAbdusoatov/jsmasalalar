// 1

//function powerA3(x) {
//    console.log(x**3);
//}

//powerA3(3);
//powerA3(5);
//powerA3(10);



// 2

// function powerA234(x) {
//     console.log(x**2, x**3, x**4);
// }

// powerA234(3);
// powerA234(5);
// powerA234(10);




// 3

// function mean(A,B,C,D){
//     console.log((A+B)/2);
//     console.log((A+C)/2);
//     console.log((A+D)/2);
//     console.log(Math.sqrt(A+B));
//     console.log(Math.sqrt(A+C));
//     console.log(Math.sqrt(A+D));
// }

// mean(2,7,1,15);



// 4


// function rectPS(x1,y1,x2,y2) {
//     let a = Math.abs(x1-x2);
//     let b = Math.abs(y1-y2);
//     let p = 2 * (a + b);
//     let s = a * b;
//     console.log(p,s);
// }
// rectPS(2,2,4,4);




// 6

// function digitCountSum(a) {
//     let s = 0, t = 0;
//     while(a>0){  
//         s += a%10;
//         t++;

//         a = parseInt(a / 10);
//     }

//     console.log(s, t);
// }
// digitCountSum(123);



// 7

// function InvertDigits(a){
//     let s = parseInt(a%10);
//     let b = parseInt(a/10);
//     let d = s*10+b;
    
//     console.log(d);
// }

// InvertDigits(23);

// 8 


// function addRight(k, r)
// {
//     k = k*10+r;
//     console.log(k);
// }
// addRight(123, 5);



// 9

// function addLeft(a, r){
//     let n = 1;
//     let p = a;
//     while(a>0){
//      a = parseInt(a/10);
//      n *= 10;
//     }
//     console.log(r*n+p);
// }

// addLeft(123, 4);



// 10

// function Swap(A, B, C, D){
//     let a = B;
//     let B = A;

//     let b = C;
//     let C = D;

//     console.log(a,A,b,C);
// }
// Swap(12, 13, 14, 11);


// 14


// function ShiftRight3(A,B,C){
//     let a = A;
//     let A = B;
//     let B = C;
//     let C = a;

//     console.log( A, B, C);
// }
// ShiftRight3(11, 12, 13);



// 15

// function ShiftRight3(A,B,C){
//     let a = A;
//     let A = B;
//     let B = a;
//     let C = B;

//     console.log( A, B, C);
// }
// ShiftRight3(11, 12, 13);


// 16

// function ishora(a){
//     if(a>0) return 1;
//     if(a<0) return -1;
//     return 0;
// }
// let a = -3, b=3;

// let natija = ishora(a) + ishora(b);
// console.log(natija);



// 17

// function rootsCount(a,b,c){
//     let d=  b**2 - 4*a*c;
//     if(d>0) return 2;
//     if(d==0) return 1;
//     if(d<0) return 0;
// }

// let n1 = rootsCount(1, -5, 6);

// console.log(n1);



// 18

// function doira(r){
//     let p = 3.14;
//     let  s = p*(r**2);

//     console.log(s);
// }

// doira(10);



// 19










// 20

// function triangeP(a, b){
//     let c = Math.sqrt(a*a + b*b);
//     let p = a+b+c;
//     return p;
// }

// let uch1 = triangeP(4,3);
// console.log(uch1);








