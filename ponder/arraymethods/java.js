function convert(grade) {
    let points;

    switch (grade){
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }

    return points;
}

const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const students = [
    {last: 'Andrus', first: 'Aaron'},
    {last: 'Masa', first:'Manny'},
    {last: 'Tanda', first: 'Tamanda'}
];

const simple = ['one', 'two', 'three'];

simple.forEach(word => {
    console.log(word);
});

const wordList = document.getElementById("word-list");

words.forEach(word => {
    wordList.innerHTML += `<li>${word}</li>`;
});

const grades = ['A', 'B', 'A'];
const points = grades.map(convert);

console.log(points);

const total = points.reduce((acc, curr) => acc + curr);
console.log(total);

const longWords = words.filter(word => word.length > 5);
console.log(longWords);

const index = words.indexOf('apple');
console.log(index);

const studentDiv = document.getElementById("student-list");

students.forEach(student => {
    const studentHTML = `
        <h2>${student.first} ${student.last}</h2>
        <hr>
    `;
    studentDiv.innerHTML += studentHTML;
});
