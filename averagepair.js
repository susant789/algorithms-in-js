function averagePair(arr,avg){
  // add whatever parameters you deem necessary - good luck!
    if(arr.length === 0){
        return false; 
    }

    let first = 0;
    let end = arr.length-1;
    while(first<end){
        let average = arr[first] + arr[end] / 2;
        if(average === avg) return true
        else if(average<end){
            first++
        }
        end--
     }
     return false;
}
 

averagePair([1,2,3,4,5],4)

