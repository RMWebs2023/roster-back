const { Router } = require("express");
const Users = require("../models/Users.js");

const router = Router();

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const users = Users(data);
    await users.save();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
