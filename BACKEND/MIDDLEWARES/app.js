const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

const checkToken = ("/api", (req, res, next) => {
    let { token } = req.query;
    if(token === "giveaccess"){
        next();
    }
    throw new ExpressError(401, "ACCESS DENIED!");
});

app.get("/api" , checkToken, (req, res) => {
    res.send("data");
});

app.get("/" , (req, res) => {
    res.send("Hi, I am root.");
});

app.get("/random", (req, res) => {
    res.send("Hi, I am random.");
});

app.get("/err", (req, res) => {
    abcd = abcd;
});

app.get("/admin", (req, res) => {
    throw new ExpressError(403, "Access to admin is forbidden")
});

app.use((err, req, res, next) => {
    let {status = 500, message = "Some Error Occured"} = err;
    res.status(status).send(message);
});

app.use((req, res) => {
    res.status(404).send("page not found");
});

app.listen(8080, () => {
    console.log("server listening to port 8080");
});

// app.use("/random", (req,res,next) => {
//     console.log("I am only for random");
//     next();
// });

// app.use((req, res, next) => {
//     console.log("Hii, I am middleware");
//     next();
//     console.log("this is after next()");
// });

// app.use((req, res, next) => {
//     console.log("Hii, I am 2nd middleware");
//     next();
// });

//Logger -> Print useful info on console -- eg--morgan
// app.use((req, res, next) => {
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method, req.path, req.hostname, req.time);
//     next();
// });
