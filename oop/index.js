class Diary {
  constructor() {}
  write(date, text) {
    for (var i = 1; i <= this.day; i++) {
      if (date === i) {
        this.diary.push(`{name: ${date}, note: ['${text}']}`);
        return 'Berhasil menulis diary';
      } else if (date > this.date || date < 1) {
        return `Data yang dimasukkan tidak ada pada bulan ${this.month}`
      } else {
        this.diary.push('no data');
      }
    }
  }
  report() {
    for (var i = 1; i <= this.day; i++) {
      return console.log(`Day ${i} => '${this.diary[i-1]}'`);;
    }
  }
}

class januaryDiary extends Diary {
  constructor() {
    super();
    this.month = 'january';
    this.day = 31;
    this.diary = [];
  }
}

class februaryDiary extends Diary {
  constructor() {
    super();
    this.month = 'february';
    this.day = 28;
    this.diary = [];
  }
}

class marchDiary extends Diary {
  constructor() {
    super();
    this.month = 'march';
    this.day = 31;
    this.diary = [];
  }
}

class aprilDiary extends Diary {
  constructor() {
    super();
    this.month = 'april';
    this.day = 30;
    this.diary = [];
  }
}

class mayDiary extends Diary {
  constructor() {
    super();
    this.month = 'may';
    this.day = 31;
    this.diary = [];
  }
}

class juneDiary extends Diary {
  constructor() {
    super();
    this.month = 'june';
    this.day = 30;
    this.diary = [];
  }
}

class julyDiary extends Diary {
  constructor() {
    super();
    this.month = 'july';
    this.day = 31;
    this.diary = [];
  }
}

class augustDiary extends Diary {
  constructor() {
    super();
    this.month = 'august';
    this.day = 31;
    this.diary = [];
  }
}

class septemberDiary extends Diary {
  constructor() {
    super();
    this.month = 'september';
    this.day = 30;
    this.diary = [];
  }
}

class octoberDiary extends Diary {
  constructor() {
    super();
    this.month = 'october';
    this.day = 31;
    this.diary = [];
  }
}

class novemberDiary extends Diary {
  constructor() {
    super();
    this.month = 'november';
    this.day = 30;
    this.diary = [];
  }
}

class decemberDiary extends Diary {
  constructor() {
    super();
    this.month = 'december';
    this.day = 31;
    this.diary = [];
  }
}

class DiaryFactory {
  static create(str) {
    if (str === 'january') {
      return new januaryDiary;
    } else if(str === 'february') {
      return new februaryDiary;
    } else if(str === 'march') {
      return new marchDiary;
    } else if(str === 'april') {
      return new aprilDiary;
    } else if(str === 'may') {
      return new mayDiary;
    } else if(str === 'june') {
      return new juneDiary;
    } else if(str === 'august') {
      return new augustDiary;
    } else if(str === 'september') {
      return new septemberDiary;
    } else if(str === 'october') {
      return new octoberDiary;
    } else if(str === 'november') {
      return new novemberDiary;
    } else if(str === 'december') {
      return new decemberDiary;
    }
  }
}


let septemberDiary = DiaryFactory.create('september')

septemberDiary.write(1, 'belajar sudoku')
septemberDiary.write(1, 'belajar boogle')
septemberDiary.write(31, 'belajar sudoku')
septemberDiary.report()
