// sqlite3, db file, and fs
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./data.db', (err) => {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log(`*clink* *clink* come out to play!`);
    }
});

// db serialize


class Model {

    // ADD
    static add() {

        db.serialize(function () {
            let releasedInput = process.argv[4];
            let genreInput = process.argv[5];
            let titleInput = '';
            for (let i = 6; i < process.argv.length; i++) {
                titleInput += `${process.argv[i]} `;
            }

            db.run(`INSERT INTO Songs (released, genre, title)
                    VALUES ('${releasedInput}', '${genreInput}', '${titleInput}')`, function(err) {
                        if (err) {
                            console.log(err.message);
                        }
                        else {
                            console.log(`Successfully created a new song with ID:`)
                        }
                    });
        });
    }

    // DELETE
    static delete() {

        db.serialize(function() {
            let id = process.argv[4];

            db.run(`DELETE FROM Songs
                    WHERE id = ${id}`, function(err) {
                        if (err) {

                        }
                        else {
                            console.log(`Successfully deleted a song.`)
                        }
                    });
        })
    }
}

module.exports = Model;