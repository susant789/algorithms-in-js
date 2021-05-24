function getDigit(num,i){
    return Math.floor(Math.abs(num)/Math.pow(10,i))%10;
}

function digitCount(num){
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
    
}

function mostDigits(nums){
    let maxDigit = 0;
    for(let i = 0;i<nums.length;i++){
        maxDigit = Math.max(maxDigit,digitCount(nums[i]));
    }
    return maxDigit;                                                              
}

function redixsort(nums){
    let maxmostdigit = mostDigits(nums)
    for(let k = 0 ; k<maxmostdigit;k++){
       let digitBukket = Array.from({length : 10} , ()=>[]);
       for (let i = 0;i<nums.length;i++){
           let digit = getDigit(nums[i],k)
           digitBukket[digit].push(nums[i]);
       }
       nums = [].concat(...digitBukket)
    }
    return nums;
    
}

redixsort([23,444,7689,345,6543,2,1])