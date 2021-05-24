function merge(arr1, arr2){
    let result = [];
    let i = 0;
    let j = 0;
    while(i<arr1.length && j<arr2.length){
        if(arr2[j] > arr1[i]){
            result.push(arr1[i]);
            i++
        }else{
            result.push(arr2[j]);
            j++
        }
    }
    while(i<arr1.length){
        result.push(arr1[i]);
        i++
    }
    while(j<arr2.length){
        result.push(arr2[j]);
        j++
    }
    return result
}


function mergesort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergesort(arr.slice(0,mid));
    let right = mergesort(arr.slice(mid));
    return merge(left,right);
}

mergesort([2,45,23,1,567,76])
// merge([1,10,50],[2,14,99,100])