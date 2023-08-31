module.exports = function reverse (n) {
  let data = String(n);
  let data2 = data.split("").reverse().join("");
  let data3 = data2.replace(/[^a-zа-яё0-9\s]/gi, ' ');
  let result = Number(data3);
  return result;
}
