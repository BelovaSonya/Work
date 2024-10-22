'use strict';
/*необходимо поменять местами ключи и значения*/
let weatherMap = new Map([
    ['London' , 10],
    ['Moscow', 7],
    ['Paris' , 14],
    ['USA' , 12],
]);


weatherMap = [...weatherMap]
for (const element of weatherMap){
    element.reverse();
    //console.log(element);
}
console.log(new Map(weatherMap));

//console.log(new Map([...weatherMap].map( el => el.reverse())))