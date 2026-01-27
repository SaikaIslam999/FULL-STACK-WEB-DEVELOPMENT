const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const session = require("express-session");
const flash = require("connect-flash");
const path =  require("path");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const sessionOptions = {secret: "mysepersecretstring",
    resave: false, 
    saveUninitialized: true
};

app.use(session(sessionOptions));
app.use(flash());

app.use((req, res, next) => {
    res.locals.successMsg = req.flash("success");
    res.locals.errorMsg = req.flash("error");
    next();
})

app.get("/register", (req, res) => {
    let {name = "anonymous"} = req.query;
    req.session.name = name;
    if(name === "anonymous"){
        req.flash("error", "user not registered!");
    }else{
        req.flash("success", "user registered successfully!");
    };
    res.redirect("/hello");
});

app.get("/hello" , (req, res) => {
    res.render("page.ejs", {name: req.session.name});
})

// app.get("/getsession", (req, res) => {
//     if(req.session.count){
//         req.session.count++
//     }else{
//         req.session.count = 1
//     }
//     res.send(`you sent a request ${req.session.count} times`);
// });

// app.get("/test", (req, res) => {
//     res.send("test is successful");
// });

app.get("/", (req, res) => {
    res.send("Hi i am room");
});
app.use("/user" , users);
app.use("/post", posts);

app.listen(3000, () => {
    console.log("server is connected to poreqrt 3000")
});