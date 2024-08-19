let uniqueNumbers: Set<number> = new Set([1, 2, 3, 4, 5, 1, 2]);

uniqueNumbers.add(6);
uniqueNumbers.delete(2);

console.log(uniqueNumbers); // Output: Set { 1, 3, 4, 5, 6 }
