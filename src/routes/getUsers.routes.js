const { Router } = require("express");
const Users = require("../models/Users.js");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const data = await Users.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
