const express = require("express");
const router = express.Router();

//Index Route
router.get("/", (req, res) => {
    res.send("Get for post");
});

router.post("/", (req, res) => {
    res.send("Post for post");
})

router.get("/:id", (req, res) => {
    res.send("Get for post id")
});

router.delete("/:id", (req, res) => {
    res.send("Delete for post")
});

module.exports = router;