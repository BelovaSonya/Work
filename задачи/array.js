//сумма двух наименьших натуральных чисел
function sumTwoSmallestNumbers(arr){
    let indI, indJ, value, len = arr.length;
    for (indI = 0; indI < arr.length; indI++){
        for (indJ = 0; indJ < arr.length; indJ++){
            if (arr[indJ] < arr [indI]){
                value = arr[indJ];
                arr[indJ] = arr[indI];
                arr[indI] = value;
            }
        }
    }
    console.log(arr[len-1]+arr[len-2]);
}
let numbers = [10, 343445353, 3453445, 3453545353453];
sumTwoSmallestNumbers(numbers);

