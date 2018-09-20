var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./pckita.db');

//Soal 1
db.serialize(function(){
    let sql = `SELECT * FROM customers `
    db.each()
})

db.close()