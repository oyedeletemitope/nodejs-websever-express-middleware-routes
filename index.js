const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "tope.txt"),
      "utf8"
    );
    console.log(data);
    await fsPromises.unlink(path.join(__dirname, "files", "tope.txt"));
    await fsPromises.writeFile(
      path.join(__dirname, "files", "reply.txt"),
      "hello my name is temitope"
    );
    await fsPromises.appendFile(
      path.join(__dirname, "files", "reply.txt"),
      "\n\n nice to meet you"
    );
    await fsPromises.rename(
      path.join(__dirname, "files", "reply.txt"),
      path.join(__dirname, "files", "renamed.txt")
    );

    const newData = await fsPromises.readFile(
      path.join(__dirname, "files", "renamed.txt"),
      "utf8"
    );
    console.log(newData);
  } catch (err) {
    console.error(err);
  }
};

fileOps();
/*
// write file
fs.writeFile(
  path.join(__dirname, "files", "reply.txt"),
  "nice to meet you",
  (err) => {
    if (err) throw err;
    console.log("write complete");

    //append file
    fs.appendFile(
      path.join(__dirname, "files", "reply.txt"),
      "\n\n yes it is",
      (err) => {
        if (err) throw err;
        console.log("append complete");
      }
    );

    //rename file
    fs.rename(
      path.join(__dirname, "files", "reply.txt"),
      path.join(__dirname, "files", "new.txt"),
      (err) => {
        if (err) throw err;
        console.log("rename complete");
      }
    );
  }
);

*/

//exit on uncaught  errors

process.on("uncaughtException", (err) => {
  console.error(`there ws an uncaught error: ${err}`);
  process.exit(1);
});
