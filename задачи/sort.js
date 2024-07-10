function Sort(arr){
    let indI, indJ, value;
    console.log(arr);
    for (indI = 0; indI < arr.length; indI++){
        for (indJ = 0; indJ < arr.length; indJ++){
            if (arr[indJ] < arr [indI]){
                value = arr[indJ];
                arr[indJ] = arr[indI];
                arr[indI] = value;
            }
        }
    }
    console.log(arr);
}
Sort([5, 1.2, 12, 19, 22])