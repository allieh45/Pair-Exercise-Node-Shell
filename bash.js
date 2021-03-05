const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl');

process.stdin.on('data', (data) => {
  let cmd = data.toString().trim();
  let file;
  const split = cmd.split(' ');
  if (split.length > 1) {
    cmd = split[0];
    file = split[1];
  }

  switch (cmd) {
    case 'pwd':
      pwd();
      break;
    case 'ls':
      ls();
      break;
    case 'cat':
      cat(file);
    case 'curl':
      curl(file);
  }
});

process.stdout.write('prompt >');
