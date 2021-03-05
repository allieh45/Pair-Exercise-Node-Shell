const pwd = require("./pwd");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  pwd(cmd);
  process.stdout.write("\nprompt >");
});

process.stdout.write("prompt >");
