// //bubble sort naive
// function bsort(arr){
//     for(let i = arr.length;i>0;i--){
//         for(let j = 0;j<i-1;j++){
//             console.log(arr,arr[j],arr[j+1])
//             if(arr[j] > arr[j+1]){
                
// //old style swap
// //                 var temp = arr[j];
// //                 arr[j] = arr[j+1];
// //                 arr[j+1] = temp;
//               //new style swap
//               [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//             }
//         }
//         console.log("1st cycle")
//     }
// }

// bsort([1,4,6,10,9,45])



//optimised

function bsort(arr){
    let noswap;
    for(let i = arr.length;i>0;i--){
        noswap = true;
        for(let j=0;j<i-1;j++){
            
            console.log(arr,arr[j],arr[j+1])
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
                noswap = false;
            }
//             
        }
        if(noswap) break;
    }
}

bsort([1,4,6,10,9,45])