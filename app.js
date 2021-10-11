const _ = require("lodash");
const user = {
    name: 'Imie',
    surname: 'Nazwisko',
    allGrades: [{
            subjectName: 'Name1',
            grades: [5, 4, 3, 2, 1],
            weight: 3
        },
        {
            subjectName: 'Name2',
            grades: [3, 3.5, 2],
            weight: 1
        },
        {
            subjectName: 'Name3',
            grades: [4, 3, 3.5],
            weight: 5
        }
    ]
}

let tablica = [1, 2, 3, 4, 5];

console.log(_.mean(tablica));
console.log(_.min(tablica));
console.log(_.max(tablica));

printUser(user);

function printUser(user) {

    let avgUser = _.meanBy(user.allGrades, (p) => _.reduce(p.grades, function (sum, n) {
        return sum + (n * p.weight) / (p.grades.length * p.weight);
    }, 0))

    console.log(user.name + ' ' + user.surname + ': ' + avgUser);

    console.log(

    );
}