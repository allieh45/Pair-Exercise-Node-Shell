const fs = require("fs");

module.exports = function (done, file) {
  fs.readFile(file, (err, text) => {
    if (err) {
      done(err);
    } else {
      done(text);
    }
  });
};
