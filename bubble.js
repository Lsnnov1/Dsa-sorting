function bubbleSort(arr) {
    // for loop through the array, for i
    for (let i=0;i<arr.length;i++){
        // if current index value is greater than the following value, 
        if (arr[i] > arr[i + 1]){
            // create variable to store value, swap values and then return storage value
            let temp = arr[i+1];
            arr[i+1] = arr[i];
            arr[i] = temp;
        }
    }
}

module.exports = bubbleSort;