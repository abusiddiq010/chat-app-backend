const { register, login } = require("../controllers/usersControllers");

// const router = require("express").Router();

const express = require("express");
const router = express.Router();

router.post("/register", register);

router.post("/login", login);

module.exports = { router };
