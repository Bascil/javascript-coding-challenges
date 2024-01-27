# bracket matcher problem

Have the function BracketMatcher(str) take the str parameter being passed and return 1 if the brackets are correctly matched and each one is accounted for. Otherwise return 0. For example: if str is "(hello (world))", then the output should be 1, but if str is "((hello (world))" the the output should be 0 because the brackets do not correctly match up. Only "(" and ")" will be used as brackets. If str contains no brackets return 1.

## Examples

Input: "(coder)(byte))"
Output: 0
Input: "(c(oder)) b(yte)"
Output: 1

## Algorithm

- create an empty stack to keep track of opening parenthesis
- iterate over each character in the input string
- if character in the input string is `(` push it onto the stack
- if character is a closing bracket, check if stack is empty
- if stack is empty return 0,
- otherwise pop the element of the stack ie discard the last opening bracket
- if stack is empty, all opening brackets have been matched.
