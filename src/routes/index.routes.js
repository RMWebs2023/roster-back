const { Router } = require("express");
const getUsers = require("./getUsers.routes.js")
const postUsers = require("./postUsers.routes.js");

const router = Router();

router.use("/", getUsers);
router.use("/", postUsers);

module.exports = router;
