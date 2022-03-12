


// // damas

// let damas ={
//     rang: "oq",
//     motor: "1.5",
//     marka: "Chevrolet",

//     utolish: function(){
//         console.log("G'ing g'ing ...");
//     },

//     gaz: function(){
//         console.log("Tezlik olish");
// },
//     tormoz: function(){
//         console.log("to'xtash");
//     }

// }



// // ot



// let ot ={
//     rang: "qora",
//     buyi: "2m",
//     zoti: "qora bayir",
//     narxi: "10mln dan boshlanadi",

//     tepsa: function(){
//         console.log("harakatlanadi");
//     },

//     qamchilasa: function(){
//         console.log("chopadi");
//     },

//     yoliniTortsa: function(){
//         console.log("tuxtaydi");
//     }

// }



// // telefon


// let telefon ={
//     brend: "ASUS",
//     marka: "ROG PHONE 5 Ultimate",
//     xotira: "512GB",
//     ozu: "18GB",
//     rang: "oq",
//     narxi: "22",
//     kamera: "64MP",

//     tugamaBosilganda: function(){
//         console.log("yonadi");
//     },

//     iconUstigaBosilganda: function(){
//         console.log("dastur ochiladi");
//     },

//     klaviraturaBosilganda: function(){
//         console.log("matn yoziladi");
//     }

// }













// let nexia = {
//     marka: "Nexia2",
//     nomer: "70A777AB",
//     maxTezlik: 220,
//     joriyTezlik: 0,
//     holat: "uchiq",
//     tuzuk: true,
//     utOldirish: function(){
//         if(this.tuzuk){
//             if(this.holat == 'uchiq'){
//                 console.log("G'ing g'ing  . . .")
//                 this.holat = 'yoniq';
//             } else {
//                 this.tuzuk = false;
//                 this.holat = 'uchiq';
//                 console.error("Xatolik statir buzildi");
                
//             }

//         } else {
//             console.log("Mashina so'g emas");
//         }
       
//     },
//     uchirish: function(){
//             if(this.holat == 'yoniq'){
//                 this.holat = 'uchiq';
//             }
//     },
//     gazPedalBosish: function(gaz){
//         if(this.holat == 'yoniq'){
//             if(this.joriyTezlik + gaz >this.maxTezlik){
//                 this.joriyTezlik = this.maxTezlik;
//             } else {
//                 this.joriyTezlik += gaz;
//             }
//         }
//     },
//     tormozBosish: function(tormoz){
//         if(this.joriyTezlik - tormoz < 0){
//             this.joriyTezlik = 0;
//         } else {
//             this.joriyTezlik -= tormoz;
//         }
//     },
//     status: function(){
//         console.log("--------------")
//         console.log("Joriy holat:");
//         console.log("Holat: ", this.holat);
//         console.log("Tuzuk: ", this.tuzuk);
//         console.log("JoriyTezlik: ", this.joriyTezlik);
//         console.log("--------------")
//     }

// }


// nexia.status();
// nexia.utOldirish();
// nexia.gazPedalBosish(10);
// nexia.gazPedalBosish(10);
// nexia.gazPedalBosish(10);
// nexia.gazPedalBosish(10);
// nexia.status();



// ------------------------------------------------------------------------------------------------------------------------






// let lacetti = {
//     marka: "Lacetti",
//     nomer: "70A777AB",
//     maxTezlik: 220,
//     joriyTezlik: 0,
//     holat: "yoniq",
//     tuzuk: true,
//     mashina: function(){
//         if(this.tuzuk){
//             if(this.holat == 'yoniq'){
//                 console.log("Mashina yoniq")
//                 this.holat = 'yoniq';
//             } else {
//                 this.tuzuk = false;
//                 this.holat = 'uchiq';
//                 console.error("Mshina yoniq emas");
                
//             }

//          }
//     },
    
//     richak1: function(){
//         if(this.holat == 'yoniq'){
//             if(this.tuzuk){
//                 console.log("40 km/soat gacha");
//             }
//         }
//     },richak2: function(){
//         if(this.holat == 'yoniq'){
//             if(this.tuzuk){
//                 console.log("70 km/soat gacha");
//             }
//         }
//     },richak3: function(){
//         if(this.holat == 'yoniq'){
//             if(this.tuzuk){
//                 console.log("100 km/soat gacha");
//             }
//         }
//     },richak4: function(){
//         if(this.holat == 'yoniq'){
//             if(this.tuzuk){
//                 console.log("100 km/soat dan baland");
//             }
//         }
//     },
  
//     status: function(){
//         console.log("--------------")
//         console.log("Joriy holat:");
//         console.log("Holat: ", this.holat);
//         console.log("Tuzuk: ", this.tuzuk);
//         console.log("JoriyTezlik: ", this.joriyTezlik);
//         console.log("--------------")
//     }

// }

// lacetti.richak1();
// lacetti.richak2();






















