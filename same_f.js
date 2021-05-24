function factorial(num){
    let total;
    for (let i = num;i>0;i--){
        total *=i
    }
    return total;
}

factorial(5)