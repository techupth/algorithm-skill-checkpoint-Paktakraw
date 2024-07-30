function findStudentById(students, id) {
  // Your code here
  let left = 0;
  let right = students.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (students[mid].id === id) {
      return students[mid];
    } else if (students[mid].id < id) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return null
}

// Test case
const students = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

console.log(findStudentById(students, 2)); // Output: { id: 2, name: 'Bob' }
console.log(findStudentById(students, 4)); // Output: null
