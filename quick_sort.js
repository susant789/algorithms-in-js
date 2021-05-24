function pivot(arr,start = 0,end = arr.length-1){
    function swap(array,i,j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    let pivote = arr[start];
    let swapind = start;
    for(let i=start+1;i<arr.length;i++){
        if(pivote>arr[i]){
            swapind++;
            swap(arr,swapind,i)

        }
    }
    swap(arr,start,swapind)
    return swapind;
//     console.log(swapind)
}


function quicksort(arr, left= 0,right = arr.length-1){
    
    if(left<right){
        let pivoteind = pivot(arr,left,right);
        //left
        quicksort(arr,left,pivoteind-1);

        //right
        quicksort(arr,pivoteind+1,right);
    }
    return arr
}

quicksort([3,8,2,1,5,7,6,3])