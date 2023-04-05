const express = require("express");
const router = express();
const { auth } = require("../middleware/authMiddleware");
const { login, register, getUser } = require("../controllers/userController");

//access   PUBLIC
//route    GET  api/auth/login
//desc     login a user
router.post("/login", login);

//access   PUBLIC
//route    GET  api/auth/register
//desc     register a user
router.post("/register", register);

//access   PUBLIC
//route    GET  api/auth/register
//desc     get a user
router.get("/getuser", auth, getUser);

module.exports = router;
