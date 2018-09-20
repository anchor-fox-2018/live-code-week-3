const Controller = require('./controller/controller.js');

const command = process.argv.slice(2);

if (command[0] === 'song' && command[1] === 'add') {
  const title = command.slice(4);
  Controller.addSong(command[2], command[3], title);
} else if (command[0] === 'song' && command[1] === 'delete') {
  Controller.deleteSong(command[2]);
} else if (command[0] === 'song' && command[1] === 'firstOrCreate') {
  const title = command.slice(4);
  Controller.firstOrCreateSong(command[2], command[3], title);
} else if (command[0] === 'singer' && command[1] === 'findBy') {
  const input = command[2].split(':');
  Controller.findBySinger(input[0], input[1]);
} else if (command[0] === 'singer' && command[1] === 'last') {
  Controller.lastSinger(command[2]);
}
