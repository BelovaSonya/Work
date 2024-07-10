//есть или нет одинаковое количество букв х и о
function XO(str) {
    let i; xCount=0; oCount=0; 
    //console.log(str.length);
    for (i=0; i < str.length; i++){
        //console.log(str[i]);
        if (str[i] == "x" || str[i] == "X"){
            xCount++;
        }
        else if (str[i] == "o" || str[i] == "O"){
            oCount++;
        }
        else {
            continue;
        }
    }
    //console.log(xCount , oCount);
    (oCount == xCount && str.length!=0) ? console.log(true) : console.log(false);
}
