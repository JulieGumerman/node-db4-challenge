const express = require("express");
const server = express();

const port = 6789;

server.listen(port, () => {
    console.log(`tuned into ${port}`);
})

server.get("/", (req, res) => {
    res.send("Your mom.")
} )