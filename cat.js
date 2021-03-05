const fs = require('fs');

module.exports = function (file) {
  fs.readFile(file, (err, text) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(text);
      process.stdout.write('\n\nprompt >');
    }
  });
};
