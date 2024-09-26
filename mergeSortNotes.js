function merge(arr1, arr2){
    let output = [];
    let i = 0;
    let j = 0;
    // create while loop for repeatability
    while (i < arr1.length && j < arr2.length){
    // compare indecies of each array, push lower value to output array
    if (arr1[i] < arr2[j]){
        output.push(arr1[i]);
        i++;
    } else {output.push(arr2[j]);
        j++
    }}
    // when array is exhausted, push rest of array into output
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
// with any recursive function, well need a base case, and a typical case
function mergeSort(arr){
// base case, if 0 or 1, no split
if(arr.length <= 1) return arr;
const midPoint = Math.floor(arr.length/2);
// recursivley call mergeSort on left and right halves of the original array.
const left = mergeSort(arr.slice(0, midPoint))
const right = mergeSort(arr.slice(midPoint))
return merge(left, right);
}