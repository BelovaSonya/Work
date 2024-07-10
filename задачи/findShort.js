function findShort(str){
    let arr = str.split(' ')
    let min = arr[0];
    for (let word of arr){
        if (word.length < min.length ) {
            min = word;
        }
    }
    console.log(min.length);
}
findShort('Let\'s travel abroad shall we');