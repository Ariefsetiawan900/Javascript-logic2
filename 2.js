function check(array, index) {
  var total = [];
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < index.length; j++) {
      if (i == j && index[j] == true) {
        total.push(array[i]);
      }
    }
  }
  return `${total}`;
}
console.log(
  check(["Buda", "Budi", "Budo", "Budu"], [true, false, true, false])
);