function flatten(array){
    let newarr = [];
    for (let i=0;i<=array.length;i++){
        if(Array.isArray(array[i])){
            newarr = newarr.concat(flatten(array[i]))
        }
     else{ 
        newarr.push(array[i])
    }
    }
    return newarr
}


 flatten([1, 2, 3, [4, 5] ])
