function FirstFactorial(number) {
  // base case
  if (number == 0 || number == 1) {
    return 1;
  }

  // recursive case
  return number * FirstFactorial(number - 1);
}
