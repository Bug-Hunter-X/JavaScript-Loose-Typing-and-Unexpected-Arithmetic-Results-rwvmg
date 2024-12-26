function foo(a, b) {
  // Type checking and explicit conversion
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    return 'Error: Invalid input types';
  }
}
console.log(foo(1, 2)); // Output: 3
console.log(foo(1, "2")); //Output: Error: Invalid input types

function bar(a, b) {
  //Explicit conversion to numbers
  a = Number(a);
  b = Number(b);
  if (!isNaN(a) && !isNaN(b)){
    return a - b;
  }else{
    return 'Error: Invalid input types';
  }
}
console.log(bar(1, 2)); // Output: -1
console.log(bar(1, "2")); // Output: -1
console.log(bar("abc",2));//Output: Error: Invalid input types