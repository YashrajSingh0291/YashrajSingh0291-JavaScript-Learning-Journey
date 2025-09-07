// 📝 Problem: Find Students Above Class Average
// 👉 Using the students array:
// First, calculate the class average marks.
// Then, create a list of students who scored above average.
// Print their details in a table (console.table).

let students = [
    { name: "Yashraj Singh", roll: 2605010100036, marks: 45 },
    { name: "Aman Verma", roll: 2605010100037, marks: 78 },
    { name: "Rohit Sharma", roll: 2605010100028, marks: 92 },
    { name: "Priya Gupta", roll: 2605010100069, marks: 67 },
    { name: "Neha Patel", roll: 2605010100020, marks: 85 }
];

// Step 1: Calculate total
let totalMarks = 0;
for (let student of students) {
    totalMarks += student.marks;
}

// Step 2: Calculate average
let average = totalMarks / students.length;
console.log("Class Average:", average);

// Step 3: Above average students
let scored = [];
for (let student of students) {
    if (student.marks > average) {
        scored.push(student);
    }
}
console.log("List of Above Average Students:");
console.table(scored);

// Step 4: Below average students
let below = [];
for (let student of students) {
    if (student.marks < average) {
        below.push(student);
    }
}
console.log("List of Below Average Students:");
console.table(below);
