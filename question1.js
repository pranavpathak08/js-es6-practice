/*

You have an array of user objects. Filter out users under 18 and transform the remaining users into formatted strings.

const users = [
    { id: 1, name: "Alice", age: 25, email: "alice@example.com" },
    { id: 2, name: "Bob", age: 17, email: "bob@example.com" },
    { id: 3, name: "Charlie", age: 30, email: "charlie@example.com" },
    { id: 4, name: "David", age: 16, email: "david@example.com" },
    { id: 5, name: "Eve", age: 22, email: "eve@example.com" }
];

// Expected output:
// [
//   "Name: Alice, Age: 25, Status: Adult",
//   "Name: Charlie, Age: 30, Status: Adult",
//   "Name: Eve, Age: 22, Status: Adult"
// ]

*/


//Solution 

const users = [
    { id: 1, name: "Alice", age: 25, email: "alice@example.com" },
    { id: 2, name: "Bob", age: 17, email: "bob@example.com" },
    { id: 3, name: "Charlie", age: 30, email: "charlie@example.com" },
    { id: 4, name: "David", age: 16, email: "david@example.com" },
    { id: 5, name: "Eve", age: 22, email: "eve@example.com" }
];

const result = users
    .filter((user) => user.age > 18)
    .map((user) => `Name: ${user.name}, Age: ${user.age}, Status: Adult`)

console.log(result)