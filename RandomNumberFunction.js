'use strict';
/* написать ф-ию, которая быдет принимать значения min и max 
   и возвращающая случайное целое число между ними*/
function random(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log (random(1000 , 2000000))