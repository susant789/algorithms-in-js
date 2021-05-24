function areThereDuplicates() {
  let collection = {}
  for(let val in arguments){
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1

  }

  console.log(collection)
  for(let key in collection){
    if(collection[key] > 1) return true
  }
  return false;
}

areThereDuplicates(1,2,3,4,4)