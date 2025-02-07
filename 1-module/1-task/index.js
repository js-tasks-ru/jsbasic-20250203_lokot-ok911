function factorial(n) {
  let nfactorial = n;
  if (!n || n === 1) return 1;
  while (n !== 1) {
    nfactorial = nfactorial * (n - 1);
    n = n - 1;
  }
  return nfactorial;
}
