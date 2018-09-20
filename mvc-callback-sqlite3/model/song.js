class Song {
  static add(released, genre, title, callback) {
    let query = `INSERT INTO Songs (title, released, genre)
                  VALUES ('${title}', '${released}', '${genre}')`
    db.run(query, function(err) {
      err ? callback(err) : callback(`Successfully created a new song with ID: ${row.id}`)});
  }

  static delete(id, callback) {
    let query = `DELETE FROM contacts WHERE id = ${id}`
    db.run(query, function(err) {
      err ? callback(err) : callback('Successfully deleted a song')});
  }

  static firstOrCreate(released, genre, title, callback) {
    let query1 = 'SELECT * FROM Songs'
    db.all(query1, function(err, rows) {
      let match = rows.find((element) => {return element.title == title && element.genre == genre && element.released == released});

      if(match) {
        let query2 = `INSERT INTO Songs (title, released, genre)
                      VALUES ('${title}', '${released}', '${genre}')`
        db.run(query2);
        var result = `Successfully created a new song with ID: ${row.id}`
        callback(result);
      } else {
        var result = `Song already exists`
      }
    });
  }

} //end class song

module.exports = Song
