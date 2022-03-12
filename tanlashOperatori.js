// 2-misol

// let son = parseInt(prompt("1-5 gacha son kiriting "));
// let d;
// switch(son){
//     case 1: {d = 'yomon'} break;
//     case 2: {d = 'qoniqarsiz'} break;
//     case 3: {d = 'qoniqarli'} break;
//     case 4: {d = 'yaxshi'} break;
//     case 5: {d = "a'lo"} break;

//     default: {
//         son = "Xato"
//     }
// }
// console.log(d);



// 3-misol

// let son = parseInt(prompt("1-12 gacha son kiriting "));
// let d;
// switch(son){
//     case 1: {d = 'qish'} break;
//     case 2: {d = 'qish'} break;
//     case 3: {d = 'bahor'} break;
//     case 4: {d = 'bahor'} break;
//     case 5: {d = "bahor"} break;
//     case 6: {d = "yoz"} break;
//     case 7: {d = "yoz"} break;
//     case 8: {d = "yoz"} break;
//     case 9: {d = "kuz"} break;
//     case 10: {d = "kuz"} break;
//     case 11: {d = "kuz"} break;
//     case 12: {d = "qish"} break;

//     default: {
//         d = ("Bunday sondagi oy yo'q")
//     }
// }
// console.log(d);



// 4-misol

// let oy = parseInt(prompt("1-12 gacha son kiriting "));
// let kun;
// switch(oy){
//     case 1: {kun = '31'} break;
//     case 2: {kun = '28 yoki 29'} break;
//     case 3: {kun = '31'} break;
//     case 4: {kun = '30'} break;
//     case 5: {kun = "31"} break;
//     case 6: {kun = "30"} break;
//     case 7: {kun = "31"} break;
//     case 8: {kun = "31"} break;
//     case 9: {kun = "30"} break;
//     case 10: {kun = "31"} break;
//     case 11: {kun = "30"} break;
//     case 12: {kun = "31"} break;

//     default: {
//         kun = ("Bunday sondagi oy yo'q")
//     }
// }
// console.log(kun);

// 2-usul

// let n = parseInt(prompt());
// switch (n) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 11:
//         console.log(31);
//         break;

//         case 4:
//         case 6:
//         case 9:
//         case 11:
//             console.log(30);
//             break;

//     case 2:
//         console.log(28, 29);
//         break;
//         default: console.log((n));
// }



// 7-misol

// let a = parseInt(prompt());
// let b = parseInt(prompt());
// let c = parseInt(prompt());
// let d = parseInt(prompt());
// let e = parseInt(prompt());

// let g

// switch (a){
//     case 1: 
// }


// 8-misol


// let d = parseInt(prompt("Sanani kiriting: "));
// let m = parseInt(prompt("Oyni kiriting: "));

// if (d==1){
//     switch(m){
//         case 1:
//             {d = 31, m = 12;} break;

//         case 2: case 4: case 6: case 9: case 11: 
//             {d = 31, m = m-1;} break;

//         case 3: 
//             {d = 28, m = 2;} break;

//         case 5: case 7: case 8: case 10: case 12: 
//             {d = 30, m = m-1;} break;
//      }
// }

// else {
//     d = d-1;
// }

// console.log(d, m);



// 9-misol

// 31: 1-yanvar 3-mart  5-may 7-iyul 8-avgust 10-oktyabr 12-dekabr

// 30: 4-aprel 6-iyun 9-sentabr 11-noyabr

// 28: 2-fevral

// let d = parseInt(prompt("Sanani kiriting: "));
// let m = parseInt(prompt("Oyni kiriting: "));

// if (d==31){
//     switch(m){

//         case 1: case 3: case 5: case 7: case 8: case 10:
//             {d = 1, m = m+1;} break;

//         case 12: 
//             {d = 1, m = 1 ;} break;
//     }
// }

// if (d==28){
//     switch(m){

//         case 1: case 3: case 5: case 7: case 8: case 10:
//             {d = d + 1, m = m+1;} break;

//         case 12: 
//             {d = d + 1, m = 1 ;} break;
//     }
// }

// if (d==30){
//     switch(m){
//         case 4: case 6: case 9: case 11:
//             {d = 1, m = m + 1;} break;
//     }
// }

// if (d==28){
//     switch(m){

//         case 4: case 6: case 9: case 11:
//             {d = d + 1, m = m+1;} break;

//     }
// }



// if (d==28){
//     switch(m){
//         case 2: 
//             {d = 1, m = m + 1;} break;
//     }
// }


//    else{ d = d+1;
// }

// console.log(d, m)

 // 2-usul

// let d = parseInt(prompt());
// let m = parseInt(prompt());



// switch (m) {
//     case 1: case 3: case 5:
//     case 7: case 8: case 10:
//     case 12: {
//         if (d == 31) {
//             if (m == 12)
//              { m = 1; }
//             else {
//                 m += 1;
//             }
//             d = 1;
//         } else {
//             d += 1;
//         }
//     } break;
//     case 4: case 6: case 9: case 11: {
//         if (d == 30) {
//             m += 1;
//             d = 1;
//         } else {
//             d += 1;
//         }
//     } break;
//     case 2: {
//         if (d == 28) {
//             m += 1;
//             d = 1;
//         } else {
//             d += 1;
//         }
//     } break;
   
// }

// console.log(d, m);

        
       

// 10-misol

// let d = parseInt(prompt());
// let c = parseInt(prompt());

// d = (d + c);

// if ( d==0) d = 4;
// if ( d == 5 ) d = 1;

// switch(d){
//     case 1: console.log('Shimol');
//     case 2: console.log("G'arb");
//     case 3: console.log('Janub');
//     case 4: console.log('Sharq');
// }




// 12-misol

// let a = parseInt(prompt());
// let b = parseFloat(prompt());

// const PI = 3.14;
// let r, d , p, s;

// switch(a){
//     case 1: {

//         r = a;
//         d = 2 * r; 
//         p = d * PI;
//     }
// }












