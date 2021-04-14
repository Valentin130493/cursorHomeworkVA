class Student {
    constructor(university, course, fullName, marks = []) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = marks;
        this.isActiveStudent = true;
    }


    get getInfo() {
        return `Student of ${this.course} course,  ${this.university}, fullname is: ${this.fullName}`
    }
    get getMark() {
        if (this.isActiveStudent === false) {
            return this.marks
        }
        return null
    }
    set setMarks(mark) {
        if (this.isActiveStudent === false) {
            return this.marks.push(mark)
        }
        return null
    }
    getAverageMark() {
        return this.marks.reduce((acc, item) => acc + item) / this.marks.length;
    }
    dismiss() {
        this.isActiveStudent = false;
    }
    recover() {
        this.isActiveStudent = true;
    }

}




class BudgetStudent extends Student {
    constructor(university, course, fullName, marks, isActiveStudent) {
        super(university, course, fullName, marks, isActiveStudent)
        setInterval(() => { this.getScholarship() }, 30000)
    }
    getScholarship() {
        const theLoverstAverageMarks = 4;
        if (this.getAverageMark() > theLoverstAverageMarks && this.isActiveStudent) {
            console.log(`Ви отримали 1400 грн. стипендії`)
        }
        console.log(`Вибачте, але Ви без стипендії`)
    }

}





const ostapBender = new Student(`Вища Школи Психотерапії м.Одеса`, 1, `Остап Бендер`, [5, 4, 4, 5]);
ostapBender.setMarks = 5;
const vasylBender = new BudgetStudent(`Вища Школи Психотерапії м.Одеса`, 1, `Василь Бендер`, [5, 4, 4, 5]);
vasylBender.setMarks = 5;

console.log(ostapBender.getInfo);
console.log(vasylBender.getInfo);
console.log(vasylBender.getScholarship());