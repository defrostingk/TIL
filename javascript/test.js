function repeat(n, f) {
  for (let i = 0; i < n; i++) {
    f(i);
  }
}

const logAll = function (i) {
  console.log(i);
};

repeat(5, logAll); // 0 1 2 3 4
