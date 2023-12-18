const fs = require("fs");

const rs = fs.createReadStream("./files/new.txt", { encoding: "utf8" });

const ws = fs.createWriteStream("./files/another.txt");

/*
rs.on("data", (dataChunk) => {
  ws.write(dataChunk);
});
*/

rs.pipe(ws);
