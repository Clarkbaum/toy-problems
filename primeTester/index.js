function primeTester (n) {
  if (n === 2) return true;
  if (n < 2) return false;
  for (var i = 2; i < Math.sqrt(n) + 1; i++){
    if(n % i === 0) return false;
  }
  return true;
}