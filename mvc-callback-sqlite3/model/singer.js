class Singer {
  static findBy(input_column, input_value, callback) {
    let query = `SELECT * FROM Singers
                WHERE Singer.${input_column} = '${input_value}'`
    db.all(query, function(err, row) {
      err ? callback(err, null) : callback(null, row)});
  }

  static last(number, callback) {
    if (number !== undefined) {
      let query = `SELECT * FROM Singers
                  ORDER BY Singers.id DESC
                  LIMIT ${number}`
      db.all(query, function(err, row) {
        err ? callback(err, null) : callback(null, row)});
    } else {
      let query = `SELECT * FROM Singers
                  ORDER BY Singers.id DESC
                  LIMIT 1`
      db.all(query, function(err, row) {
        err ? callback(err, null) : callback(null, row)});
    }
  }
} //end class singer

module.expoorts = Singer
