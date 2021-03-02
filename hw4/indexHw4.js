const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференціальні рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];


function arrayPairOfStudents(students) {
  const firstPair = [students[0], students[2]];
  const secondPair = [students[1], students[3]];
  const thirdPair = [students[4], students[5]];

  return [firstPair, secondPair, thirdPair];
}

function arrayPairWithTheme(pairs, themes) {
  const studentsPairs = [];

  for (let i = 0; i < pairs.length; i++) {
    const currentPair = pairs[i];
    const currentTheme = themes[i];
    const currentPairsWithThemes = [currentPair.join(' i '), currentTheme];
    
    studentsPairs.unshift(currentPairsWithThemes);
  }

  return studentsPairs;
}

function arrayStudentsWithMarks(students, marks) {
  const studentsWithMarks = [];

  for (let i = 0; i < students.length; i++) {
    const studentWithMark = [students[i], marks[i]];

    studentsWithMarks.unshift(studentWithMark);
  }

  return studentsWithMarks;
}

function arrayPairsWithRandomMarks(pairsWithThemes) {
  const result = [];
  
  for (let i = 0; i < pairsWithThemes.length; i++) {
    const randomMark = Math.round((Math.random() * 5) +1);
    const pairsWithMark = [...pairsWithThemes[i], randomMark];

    result.unshift(pairsWithMark);
  }

  return result;
}

const pairs = arrayPairOfStudents(students);
const pairsWithThemes = arrayPairWithTheme(pairs, themes);
const studentsWithMarks = arrayStudentsWithMarks(students, marks);
const pairsWithRandomMarks = arrayPairsWithRandomMarks(pairsWithThemes);

console.log("Pair array :", pairs);
console.log('Pair + theme array :', pairsWithThemes);
console.log('Students + mark array:', studentsWithMarks);
console.log('Pair + random marks array:', pairsWithRandomMarks);