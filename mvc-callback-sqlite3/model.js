var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./data.db');
const view = 

class Song{
    constructor(released, genre, title){
        this.released = released,
        this.genre = genre,
        this.title = title
    }

    static addSong(released, genre, title){
        let newSong = new Song(released, genre, title)
    }

    save(cb){
        db.run(`INSERT INTO Songs(released, genre, title)
                VALUES (${this.released}, ${this.genre}, ${this.title})`, 
                function(err){
                    if(err){
                        cb(err, null)
                    } else {
                        cb(null, 'Song is successfully added!')
                    }
                })
    }
}

class Singer{
    constructor(){

    }
}

module.exports = {
    Song,
    Singer
}