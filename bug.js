```javascript
function myFunction(a, b) {
  if (a === 0 || b === 0) {
    return 0; // Handle zero inputs
  }

  // ... rest of the function
}

myFunction(0, 5); // This will return 0
myFunction(5, 0); // This will also return 0
myFunction(5, 5); // This will execute the rest of the function
```