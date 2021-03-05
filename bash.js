const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");
const curl = require("./curl");

process.stdin.on("data", (data) => {
  let cmd = data.toString().trim();
  let file;
  const split = cmd.split(" ");
  if (split.length > 1) {
    cmd = split[0];
    file = split[1];
  }

  switch (cmd) {
    case "pwd":
      pwd(done);
      break;
    case "ls":
      ls(done);
      break;
    case "cat":
      cat(done, file);
      break;
    case "curl":
      curl(done, file);
      break;
  }
});

process.stdout.write("prompt >");

const done = (output) => {
  process.stdout.write(output);
  process.stdout.write("\n>prompt");
};
