function selectionSort(arr) {
    for (let i=0;i<arr.length;i++){
        let idx = arr[i]
        let nextNum = arr[i+1]
        while(idx < nextNum){
            idx++;
        }
        if (idx > nextNum){
            let temp = nextNum;
            nextNum = idx;
            idx = temp;
        }
    }
    return arr;
}

module.exports = selectionSort;