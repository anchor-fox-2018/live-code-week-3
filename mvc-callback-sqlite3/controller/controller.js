const Song = require('../model/song.js');
const Singer = require('../model/singer.js');
const View = require('../view/view.js');

class Controller {
  static addSong(released, genre, title, callback) {
    Song.add(released, genre, title, function(err, result) {
      err ? console.log(err) : View.display(result)});
  }

  static deleteSong(id, callback) {
    Song.delete(id, function(err, result) {
      err ? console.log(err) : View.display(result)});
  }

  static firstOrCreateSong(released, genre, title, callback) {
    Song.firstOrCreate(released, genre, title, function(err, result) {
      err ? console.log(err) : View.display(result)});
  }

  static findBySinger(input_column, input_value, callback) {
    Singer.findBy(input_column, input_value, function(err, result) {
      err ? console.log(err) : View.display(result)});
  }

  static lastSinger(number, callback) {
    Singer.last(number, function(err, result) {
      err ? console.log(err) : View.display(result)});
  }
}//end class controller

module.exports = Controller
