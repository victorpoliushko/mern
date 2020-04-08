const { Router } = require("express");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const router = Router();
const config = require("config");

router.post(
  "/register",
  [
    check("email", "Invalid email").isEmail(),
    check("password", "Password can't be less than 6 characters").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Invalid registration data",
        });
      }
      const { email, password } = req.body;
      const candidate = await User.findOne({ email });
      if (candidate) {
        return res
          .status(400)
          .json({ message: "This user is already registered" });
      }

      const hashedPassword = await bcryptjs.hash(password, 12);
      const user = new User({ email, password: hashedPassword });

      await user.save();
      res.status(201).json({ message: "User created" });
    } catch (e) {
      res.status(500).json({ message: "Something went wrong, try again" });
    }
  }
);

router.post(
  "/login",
  [
    check("email", "Enter correct email").normalizeEmail().isEmail(),
    check("password", "Enter password").exists(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Invalid login data",
        });
      }
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }
      //not sure
      const hashedPassword = await bcryptjs.hash(password, 12);
      //
      const isMatch = await bcryptjs.compare(hashedPassword, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid password" });
      }
      const token = jwt.sign({ userId: user.id }, config.get("jwtSecret"), {
        expiresIn: "1h",
      });

      res.json({ token, userId: user.id });
    } catch (e) {
      res.status(500).json({ message: "Something went wrong, try again" });
    }
  }
);

module.exports = router;
