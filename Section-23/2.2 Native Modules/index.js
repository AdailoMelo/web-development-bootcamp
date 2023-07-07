const fs = require("fs");

/*fs.writeFile("test.txt", "The message comes here", (err)=> {
    if (err) throw err;
    console.log("the file has been saved!")
})*/

fs.readFile("./test.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
})