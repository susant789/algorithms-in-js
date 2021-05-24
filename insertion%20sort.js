function isort(arr){
    for(let i = 1;i<arr.length;i++){
        let currentval = arr[i];
//         console.log(currentval)
        for(var j = i-1;j>=0 && arr[j]>currentval;j--){
            arr[j+1] = arr[j];
//             console.log(arr[j+1],arr[j])
            }
             let val=arr[j+1] = currentval;
            console.log(val)
            console.log(arr)
    }
    return arr
}

isort([2,5,1,9,76,4])