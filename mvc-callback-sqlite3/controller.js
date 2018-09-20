const Song = require('./model.js')
const Singer = require('./model.js')
const View = require('./view.js')

class SongController {
    // static addSong(released, genre, title){
    //     Song.addSong(released, genre, title)
    // }
    static addSong(released, genre, title){
        let newSong = new Song(released, genre, title)
        newSong.save(function(err, msg){
            err? View.print(err) : View.print(msg)
        })
    }
}

class SingerController{

}

module.exports = {
    SongController,
    SingerController
}