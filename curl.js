const request = require("request");

module.exports = function (done, url) {
  request(url, (error, response, body) => {
    done(body);
  });
};
