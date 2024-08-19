"use strict";
let studentGrades = new Map([
    ['Alice', 90],
    ['Bob', 85],
    ['Charlie', 92]
]);
studentGrades.set('David', 88);
console.log(studentGrades.get('Alice')); // Output: 90
console.log(studentGrades); // Output: Map { 'Alice' => 90, 'Bob' => 85, 'Charlie' => 92, 'David' => 88 }
