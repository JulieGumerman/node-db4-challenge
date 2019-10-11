const express = require("express");
const server = express();
const router = require("./routes_models/routes.js")

const port = 6789;

server.use(express.json());
server.use("/api", router);


server.listen(port, () => {
    console.log(`tuned into ${port}`);
})

server.get("/", (req, res) => {
    res.send("Your mom.")
} )