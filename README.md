# Type Error in TypeScript Add Function

This example demonstrates a common type error in TypeScript. The `add` function is defined to accept only numbers, but an attempt to use it with strings results in a type error.

The solution involves adding type guards or using function overloading to handle string arguments, or using a more flexible approach like type assertions if you're sure the string is in the correct format.