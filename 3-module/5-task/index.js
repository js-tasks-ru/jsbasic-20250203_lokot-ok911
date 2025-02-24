function compare(a, b) {
  if (a > b) return 1; 
  if (a == b) return 0; 
  if (a < b) return -1; 
}

function getMinMax(str) {
  let arr = str.split(' ');
  let arr1 = [];
  for (element of arr) {
    element  = +element; 
    if (isFinite(element)) {
      arr1.push(element);
    }
  }
    arr1.sort(compare);
    let result = {
      min: arr1[0], 
      max: arr1[arr1.length-1],
    };
    return result;
}

