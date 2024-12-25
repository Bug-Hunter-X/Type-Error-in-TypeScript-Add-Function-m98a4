function add(a: number, b: number): number {
  return a + b;
}

function add(a: string, b: string): string {
  return a + b; // String concatenation
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // Returns 8
let result2 = subtract(10, 4); // Returns 6

let result3 = add("hello", "world"); // Returns "helloworld"
let result4 = add(5, "3"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'. 