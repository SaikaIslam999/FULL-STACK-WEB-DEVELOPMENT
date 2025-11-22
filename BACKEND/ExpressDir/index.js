const express = require("express");
const app = express();

let port = 3000;
app.listen(port , () => {
    console.log(`app is listening on port ${port}`)
});

app.get("/" , (req , res) => {
    res.send("Hello , I am root");
});

app.get("/:username/:id" , (req , res) => {
 let {username , id} = req.params;
 let code = `<h1>i am ${username} and my id is ${id}</h1>`;

    res.send(code);
});

app.get("/search" , (req , res) => {
    let { q } = req.query;
    if(!(q)) {
        res.send("nothing searched");
    }
    res.send(`search result for query: ${q}`);
})