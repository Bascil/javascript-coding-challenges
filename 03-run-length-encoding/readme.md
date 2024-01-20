# Run Length Encoding

## The problem

Given an input string, write a function that returns a compressed version of the string using the Run-length encoding algorithm. This algorithm works by taking the occurrence of each repeating character and outputting that number along with a single character of the repeating sequence. For example: “wwwggopp” would return 3w2g1o2p. The string will not contain any numbers, punctuation, or symbols.

## RUN-LENGTH ENCODING

## Wikipedia’s definition:

Run-length encoding (RLE) is a form of lossless data compression in which runs of data (sequences in which the same data value occurs in many consecutive data elements) are stored as a single data value and count, rather than as the original run.

On first glance this seems like a silly and useless concept, but in situations where there are very very large runs of characters, I see where this can make things more efficient.

### My Approach

In my approach, the loop iterates through the characters of the input string, and the count of consecutive characters is updated. When a different character is encountered, the count and character are appended to the encoded string.
