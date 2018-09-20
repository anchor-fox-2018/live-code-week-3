

const SongController = require('./controller.js')

let col_name = process.argv[2]
let crud = process.argv[3]


if(col_name == 'song'){
    if(crud == 'add'){
        let released = process.argv[4]
        let genre = process.argv[5]
        let title = process.argv[6]
        SongController.addSong(released, genre, title);
    } else if(crud == 'delete'){
        let id = process.argv[4]
        SongController.delete(id)
    }
} else if(col_name == 'singer'){

}