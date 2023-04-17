function sumMul(n, m) {
  if (n >= 0 && m < 0) return "INVALID";
  if (n > m) return "INVALID";
  let count = [];
  let acum = 0;
  for (let index = 0; index < m; index++) {
    count.push(index + 1);
  }
  for (let index = 1; index < m; index++) {
    if (count.includes(n * index)) {
      acum += n * index;
    }
  }
  return acum;
}

//sumMul(2, 9); // ==> 2 + 4 + 6 + 8 = 20
//sumMul(3, 13); // ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123); //==> 4 + 8 + 12 + ... = 1860
//sumMul(4, -7);
