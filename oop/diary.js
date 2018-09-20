class Diary {
    constructor(month) {
        this.month = month,
        this.day = 0,
        this.diaries = []
    }
}

class Day extends Diary {
    static dayInput() {

    }
}


class DiaryFactory extends Diary {
    constructor() {
        super();
        // console.log('masuuk');
    }

    create(month) {

        this.month = month

        switch(month) {
            case 'january':
                this.day = 31;
                break;
            case 'february':
                this.day = 29;
            case 'march':
                this.day = 31;
                break;
            case 'april':
                this.day = 30;
                break;
            case 'may':
                this.day = 31;
                break;
            case 'june':
                this.day = 30;
                break;
            case 'july':
                this.day = 31;
                break;
            case 'august':
                this.day = 31;
                break;
            case 'september':
                this.day = 30;
                break;
            case 'october':
                this.day = 31;
                break;
            case 'november':
                this.day = 30;
                break;
            case 'december':
                this.day = 31;
                break;
        }

        return this;
    }

    write(date, note) {
        if(date <= this.day) {
            let dayNote = {
                day: Number(date),
                note: note
            }
            this.diaries.push(dayNote);
            console.log(`Berhasil menulis diary: ${note}`)
        }

        else {
            console.log(`Data yang dimasukkan tidak ada pada bulan ${this.month}`);
        }

        return this;
    }
}

let septemberDiary = new DiaryFactory();
septemberDiary.create('september');

console.log('HASIL NEW!')
console.log(septemberDiary);
console.log(septemberDiary.day);
console.log(septemberDiary.month);
console.log(septemberDiary.diaries);
console.log('\n')

console.log('HASIL WRITE!')
septemberDiary.write(20, 'ngerjain live coding');
console.log(septemberDiary);