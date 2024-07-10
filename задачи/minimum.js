function Minumum(arr){
    let minimum = arr[0], index, indexMinimum;
    console.log(arr);
    for (index = 0; index < arr.length; index++){
        if (arr[index] < minimum){
            minimum = arr[index];
            indexMinimum = index;
        }
    }
    arr.splice(indexMinimum, 1);
    console.log(arr, minimum);
}
let arr = [1, 7, 8, 29, -4, 78, 200];
Minumum(arr);
Minumum(arr);