const students = [
    {name: 'sohan', roll: 12},
    {name: 'rohan', roll: 14},
    {name: 'mohan', roll: 15},
    {name: 'johan', roll: 16}
];

const isStudent = students.findIndex(function(student){
   return student.name == 'mohan';
});

console.log(isStudent);