```javascript
function myFunction(a, b) {
  if (a === 0 || b === 0) {
    console.warn('Warning: One or both inputs are zero.  Returning NaN.');
    return NaN; // Or throw an error: throw new Error('Zero input not allowed');
  }

  // ... rest of the function
}

myFunction(0, 5); // Returns NaN
myFunction(5, 0); // Returns NaN
myFunction(5, 5); // Executes the rest of the function
```