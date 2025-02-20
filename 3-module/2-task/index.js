function filterRange(arr, a, b) {
  return arr.filter(arrElem => arrElem >= a && arrElem <= b || arrElem >= b && arrElem <= a);
}
