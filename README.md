# Unexpected Zero Input Handling in Node.js Function

This repository demonstrates a potential bug related to handling zero inputs in a Node.js function.  The function `myFunction` returns 0 if either of its inputs (`a` or `b`) is 0. This behavior may be correct in certain contexts, but it can easily lead to subtle errors if zero inputs are not explicitly considered or are not expected.

The `bug.js` file contains the buggy code, while `bugSolution.js` provides a corrected version.