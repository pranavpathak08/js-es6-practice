/*

Create several functions to analyze student performance data.

const students = [
    { name: "John", grades: [85, 90, 92, 88] },
    { name: "Jane", grades: [95, 92, 88, 94] },
    { name: "Bob", grades: [70, 75, 72, 78] },
    { name: "Alice", grades: [100, 95, 98, 99] },
    { name: "Charlie", grades: [60, 65, 62, 68] }
];
Implement these functions:

calculateAverage(students) - Calculate each student's average grade
getTopPerformer(students) - Find student with the highest average
getPassingStudents(students) - Return students with average >= 75
hasFailingGrade(students) - Check if any student has any grade below 60

*/

//Solution

const students = [
    { name: "John", grades: [85, 90, 92, 88] },
    { name: "Jane", grades: [95, 92, 88, 94] },
    { name: "Bob", grades: [70, 75, 72, 78] },
    { name: "Alice", grades: [100, 95, 98, 99] },
    { name: "Charlie", grades: [60, 65, 62, 68] }
];

//Function 1
function calculateAverage(students) {
    return students.map((student) => {
        const total = student.grades.reduce((sum, grade) => sum + grade, 0);
        const average = total / student.grades.length;

        return {
            name: student.name,
            average: average
        }
    })
}


const res = calculateAverage(students);
console.log(res)

//Function 2
function getTopPerformer(students) {
    const res = calculateAverage(students);

    const allAverages = res.map((student) => student.average);
    const maxAverage = Math.max(...allAverages);

    const topPerformer = res.find(
        (student) => student.average === maxAverage
    )
    return topPerformer
}


//Function 3
function getPassingStudents(res, students) {
    // const res = calculateAverage(students);

    const passingStudents = res.filter(
        (student) => student.average >= 75
    )

    return passingStudents;
}


//Function 4
function hasFailingGrade(students) {
    return students.filter(
        (student) => student.grades.some(
            (grade) => grade < 60
        )
    )
}


const topPerformer = getTopPerformer(students);
const passingStudents = getPassingStudents(res, students);
const failedStudents = hasFailingGrade(students);


console.log(res);
console.log(topPerformer);
console.log(passingStudents);
console.log(failedStudents);
