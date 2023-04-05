const express = require("express");
const router = express.Router({ mergeParams: true });
const { auth } = require("../middleware/authMiddleware");
const { createNote, getNote } = require("../controllers/noteController");

router.post("/", auth, createNote);
router.get("/", auth, getNote);

module.exports = router;
