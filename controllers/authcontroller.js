const UserModel = require("../models/userModel");

class AuthController {
  async register(req, res) {
    try {
      const newUser = await UserModel.create(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async login(req, res) {

    try {
      const { email, password } = req.body;
      const user = await UserModel.findOne({ email });

      if (!user || user.password !== password) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

   

      res.status(200).json({ message: "Login successful", user/*, token*/ });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async logout(req, res) {
    res.status(200).json({ message: "Logout successful" });
  }
}

module.exports = AuthController;
