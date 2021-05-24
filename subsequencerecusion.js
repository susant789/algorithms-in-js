function isSubsequence(str,str2) {
  // good luck. Add any arguments you deem necessary.
  if(str.length===0){
      return true;
  }
  if(str2.length ===0) return false;
  if(str[0] === str2[0]) return isSubsequence(str.slice(1),str2.slice(1))
  return isSubsequence(str,str2.slice(1))

}

isSubsequence("abc","abcd")