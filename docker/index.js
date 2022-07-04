const express = require("express");
const app = express();
const port = 8181;

app.use(express.static(__dirname + "/src"))
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})


