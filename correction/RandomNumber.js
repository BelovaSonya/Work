'use strict';
/* написать ф-ию, которая быдет принимать значения min и max 
   и возвращающая случайное целое число между ними*/
const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
console.log (random(100 , 200000))

