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

    static create(month) {

        let temp =  new Diary();

        temp.month = month

        switch(month) {
            case 'january':
                temp.day = 31;
                break;
            case 'february':
                this.day = 29;
            case 'march':
                temp.day = 31;
                break;
            case 'april':
                temp.day = 30;
                break;
            case 'may':
                temp.day = 31;
                break;
            case 'june':
                temp.day = 30;
                break;
            case 'july':
                temp.day = 31;
                break;
            case 'august':
                temp.day = 31;
                break;
            case 'september':
                temp.day = 30;
                break;
            case 'october':
                temp.day = 31;
                break;
            case 'november':
                temp.day = 30;
                break;
            case 'december':
                temp.day = 31;
                break;
        }

        return temp;
    }
}

let septemberDiary = DiaryFactory.create('september');
console.log(septemberDiary);