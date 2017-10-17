const fs = require("fs");
const express = require("express");

const destinyDefinitions = require("./json/destinyDefinitions.json");
const app = express()

app.get("/api/destinyDefinitions", (req, res)=>{
    res.json(destinyDefinitions);
});

const port = process.env.PORT || 3001;
app.listen(port, ()=>{
    console.log("Server is listening on port " + port)
})
