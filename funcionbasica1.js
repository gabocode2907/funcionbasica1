// function a(){
//     return 35;
// }
// console.log(a())
// //console output: 35

// function a(){
//     return 4;
// }
// console.log(a()+a());
// //console output: 8

// function a(b){
//     return b;
// }
// console.log(a(2)+a(4));
// //console output: 6

// function a(b){
//         console.log(b);
//         return b*3;
//     }
//     console.log(a(3));
// //console output: 3,9

// function a(b){
//     return b*4;
//     console.log(b);
// }
// console.log(a(10));
// //console output: 10,40

// function a(b){
//     if(b<10) {
//         return 2;
//     }
//     else     {
//         return 4;
//     }
//     console.log(b);
// }
// console.log(a(15));
// //console output: 15,4

// function a(b,c){
//     return b*c;
// }
// console.log(10,3);
// console.log( a(3,10) );
// //console output: 10,3,30

// function a(b){
//     for(var i=0; i<10; i++){
//         console.log(i);
//     }
//     return i;
// }
// console.log(3);
// console.log(4);
// //console output: 3,4

// function a(){
//     for(var i=0; i<10; i++){
//         i = i +2;
//         console.log(i);
//     }
// }
// a();
// //console output: 2,5,8,11

function a(b,c){
    for(var i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));
//console output: 0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0






