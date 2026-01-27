const express = require("express");
const router = express.Router();

//Index Route
router.get("/", (req, res) => {
    res.send("Get for user");
});

router.post("/", (req, res) => {
    res.send("Post for user");
});

router.get("/:id", (req, res) => {
    res.send("Get for user id");
});

router.delete("/:id", (req, res) => {
    res.send("Delete for user");
});

module.exports = router;

