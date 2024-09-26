function merge(arr1, arr2) {
    // create output array to store results
    let output = [];
    // set arrayA and B pointers
    let i = 0;
    let j = 0;
    // while loop through both arrays, if array not empty,
    while (i < arr1.length && j < arr2.length){
        // compare values,
        if (arr1[i] < arr2[j]) {
            // push lower value to output and increment array pointers.
            output.push(arr1[i]);
            i++;
        } else {
            output.push(arr2[j]);
            j++;
        }
        // when any array is exhuasted, push remainder into output
        while (i < arr1.length){
            output.push(arr1[i]);
            i++;
        }
        while (j < arr2.length){
            output.push(arr2[j]);
            j++;
        }
        return output;
    }
}

function mergeSort(arr) {
    // base case, if array contains less than 2 items, no split
    if (arr.length <= 1) return arr;
    // create a midpoint to divide array in half
    const midpoint = Math.floor(arr.length/2);
    // slice array into left and right halves, and then recursivley call mergeSort.
    const left = mergeSort(arr.slice(0, midpoint));
    const right = mergeSort(arr.slice(midpoint));
    // return merged halves.
    return merge(left, right)
}

module.exports = { merge, mergeSort};