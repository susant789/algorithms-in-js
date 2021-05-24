function searchnstr(long,sort){
var count = 0;
    for(let i=0;i<=long.length;i++){
        for(let j=0;j<=sort.length;j++){
//             console.log(sort[j],long[i+j])
            if(sort[j] !== long[i+j]) {
                break;
            };

            if(j === sort.length-1) count ++;

            
        }

    }return count
}


searchnstr("lorie loled","lol")