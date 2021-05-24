function selectionsort(arr){

    for(let i=0;i<arr.length;i++){
        let min = i;
        for(let j=i+1;j<arr.length;j++)
        if(arr[j]<arr[min]){
            min = j;
        }
//         [arr[i],arr[min]] = [arr[min],arr[i]]
        if(i !== min){
            var temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
        
 
    }
    return arr
}

selectionsort([1,4,6,8,20,39,7])