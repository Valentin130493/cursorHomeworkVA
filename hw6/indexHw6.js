const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];

function getSubjects(student) {
  return Object.keys(student.subjects).map(subject => subject[0].toUpperCase() + subject.slice(1).replaceAll("_", " "));
}
console.log(getSubjects(students[0]));

function getAverage(numbers) {
  let integerNumbers = numbers.filter((item, index) => Number.isInteger(item));
  let sumIntegers = integerNumbers.reduce((acc, item) => acc + item);
  let average = sumIntegers / integerNumbers.length;
  return average;
}

function getAverageMark(student) {
  let allMarks = Object.values(student.subjects).flat()
  return getAverage(allMarks).toFixed(2)
}
console.log(getAverageMark(students[0]));

function getStudentInfo(student) {
  return {
    course: student.course,
    name: student.name,
    averageMark: getAverageMark(student)
  }

}
console.log(getStudentInfo(students[0]));

function getStudentsNames(students) {
  return students.map(item => item.name).sort();
}

console.log(getStudentsNames(students));

function getBestStudent(students) {
  let bestMark = 0;
  let studentName = null;
  for (let i = 0; i < students.length; i++) {
    if (getAverageMark(students[i]) > bestMark) {
      bestMark = getAverageMark(students[i]);
      studentName = students[i].name
    }
  }
  return studentName
}
console.log(getBestStudent(students))

function calculateWordLetters(test) {
  let newObj = {};
  for (let i = 0; i < test.length; i++) {
    let letter = test[i];
    if (newObj[letter]) {
      newObj[letter]++
    } else {
      newObj[letter] = 1
    }

  }
  return newObj

}
console.log(calculateWordLetters("test"));

