function bs(arr,val){
    let start = 0;
    let end = arr.length-1;
    let middle = Math.floor((start + end) / 2);
    
    
    while(arr[middle] !== val && start <= end){
        if(val > arr[middle]){
            start = middle + 1;

        }else{
            end = middle -1;
        }

    }
    middle = Math.floor((start + end) / 2);
    arr[middle] === val? middle : -1;
        
}

bs([1,2,3,4,5,6,7,8] , 6)