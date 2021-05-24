function isSubsequence(str,str2) {
  // good luck. Add any arguments you deem necessary.
  if(str.length===0){
      return true;
  }
  let first = 0
  for (let second = 0;second<=str2.length;second++){
      if(str[first] === str2[second]) first++;
      if(first === str.length) return true
    }
    return false

}

isSubsequence("abc","abcd")