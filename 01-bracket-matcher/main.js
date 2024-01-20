function bracketMatcher(str) {
  // create an empty stack to keep track of opening brackets
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    // if opening parenthesis, push it onto the stack
    if (str[i] === "(") {
      stack.push(str[i]);
    } else if (str[i] === ")") {
      // if closing parenthesis, check if stack is empty
      if (stack.length === 0) {
        // if stack is zero, it means there is no matching opening parenthesis
        return 0;
      } else {
        // otherwise pop the last element of the stack(last opening bracket)
        stack.pop();
      }
    }
  }

  return stack.length === 0 ? 1 : 0;
}

console.log(bracketMatcher("(hello (world))")); // output should be 1
