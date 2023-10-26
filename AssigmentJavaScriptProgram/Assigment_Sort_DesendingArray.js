function bubbleSortDescending(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

let myArray = [5, 2, 8, 1, 3];
let sortedArray = bubbleSortDescending(myArray);

console.log("Sorted Array (Descending Order):", sortedArray);
