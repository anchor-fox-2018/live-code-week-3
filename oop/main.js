"use strict";
class Day {
    constructor(name) {
        this.name = name;
        this.note = [];
    }
    // static writeNote(note) {
    //     note.push(note);
    // }
}

class Diary {
    constructor(month) {
        this.month = month;
        this.diaries = [];
    }
    get day() {
        switch (this.month.toLowerCase()) {
            // case "januari":
            //     this.day = 31;
            //     break;
            // case "februari":
            //     return this.day = 28;
            // case "maret":
            //     return this.day = 31;
            // case "april":
            //     return this.day = 30;
            // case "mei":
            //     return this.day = 31;
            // case "juni":
            //     return this.day = 30;
            // case "juli":
            //     return this.day = 31;
            // case "agustus":
            //     return this.day = 30;
            case "september":
               return  this.day = 31;
            // case "oktober":
            //     return this.day = 30;
            // case "november":
            //     return this.day = 31;
            // case "desember":
            //     return this.day = 30;
            default:
                break;
        }
    }
    set day(newDay) {
        this.day = newDay;

    }
}
let hari = new Day("1", []);
console.log(hari);

let diary = new Diary("september");
console.log(diary);
console.log(diary.day);