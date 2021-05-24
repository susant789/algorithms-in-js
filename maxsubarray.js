function maxSubarraySum(arr,n){
    if(arr.length === 0) return false;
    if(n > arr.length) return null;
    let total = 0;
    for(let i=0;i<n;i++){
        total += arr[i];
    }
    console.log(total)
    let currenttotal = total;
    for(let i=n;i<=arr.length;i++){
        currenttotal +=arr[i] - arr[i-n];
        if(currenttotal>total) total = currenttotal;
    }
    
    return total;
}


maxSubarraySum([1,2,3,4,5],3)

// function maxSubarraySum(arr, num){
//     if (arr.length < num) return null;
 
//     let total = 0;
//     for (let i=0; i<num; i++){
//        total += arr[i];
//     }
//     let currentTotal = total;
//     for (let i = num; i < arr.length; i++) {
//        currentTotal += arr[i] - arr[i-num];
//        total = Math.max(total, currentTotal);
//     }
//     return total;
// }