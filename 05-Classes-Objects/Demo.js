class Student {

    constructor(rollNo, marks, fName, lName, date) {
        this.roll = rollNo
        this.marks = marks
        this.fName = fName
        this.lName = lName
        this.age
        this.date = date

        this.avgMarks = function () {
            let sum = 0
            console.log(this.marks);
            for (let index = 0; index < this.marks.length; index++) {
                sum = (sum + this.marks[index])
            }
            return sum / this.marks.length
        }

        this.grade = function () {
            let arrayGrade = []
            console.log(this.marks);
            for (let index = 0; index < this.marks.length; index++) {
                if (this.marks[index] >= 80 && this.marks[index] <= 90) {
                    arrayGrade.push("A")
                } else if (this.marks[index] >= 70 && this.marks[index] <= 60) {
                    arrayGrade.push("B")
                } else {
                    arrayGrade.push("C")
                }
            }
            return arrayGrade
        }

        this.finalgrade = function () {
            let finalGrade
            if (this.avgMarks() >= 80 && this.avgMarks() <= 90) {
                finalGrade = "A"
            } else if (this.avgMarks() >= 70 && this.avgMarks() <= 60) {
                finalGrade = "B"
            } else {
                finalGrade = "C"
            }
            return finalGrade
        }

        this.age = function () {
            var birth = new Date(this.date)
            // year = this.date.getFullYear();
            // console.log(birth.getFullYear , typeof birth.getFullYear);
            return 2023 - birth.getFullYear();
        }

        this.dob = function () {
            var birth = new Date(this.date)
            // console.log(birth);
            return birth.getDate() + '/' + birth.getMonth() + '/' + birth.getFullYear()
        }

        // this.dob = function () {
        //     var birth = new Date(this.date)
        //     return birth.getDate() + '/' + birth.getMonth() + '/' + birth.getFullYear()
        // }

        // this.age = function(){
        //     let age = 
        // }
    }

    // getDOB(){
    //     return this.dob
    // }


    getFullName() {
        return this.fName + " " + this.lName
    }

    // getAvgMarks() {
    //     return this.avgMarks
    // }
}

let s1 = new Student(1, [90, 70, 50], "Siddhant", "Gunjal", "14/05/2001")
console.log("S1 : ", s1.getFullName());
console.log("S1 : ", s1.avgMarks());
console.log("S1 : ", s1.grade());
console.log("S1 : ", s1.finalgrade());
console.log(s1.dob());
console.log(s1.age());



// let s2 = new Student(2, [100, 200, 300], "Shiv", "Parvati")
// console.log("S2 : ", s2.getFullName());

// let s3 = s1
// s1 = s2
// s2 = s3
// console.log("After Swapping");
// console.log("S1 : ", s1.getFullName());
// console.log("S2 : ", s2.getFullName());

