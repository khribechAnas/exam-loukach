const UserModel = require("../models/userModel");

class UserController {
  async getUserById(req, res) {
    try {
      const { userId } = req.params;
      const user = await UserModel.findById(userId);
      
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      
      res.status(200).json({ user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getAllUsers(req, res) {
    try {
      const users = await UserModel.find();
      res.status(200).json({ users });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateUser(req, res) {
    try {
      const { userId } = req.params;
      const updatedUser = await UserModel.findByIdAndUpdate(
        userId,
        req.body,
        { new: true }
      );

      if (!updatedUser) {
        return res.status(404).json({ error: "User not found" });
      }

      res.status(200).json({ message: "User updated successfully", updatedUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteUser(req, res) {
    try {
      const { userId } = req.params;
      const removedUser = await UserModel.findByIdAndDelete(userId);

      if (!removedUser) {
        return res.status(404).json({ error: "User not found" });
      }

      res.status(200).json({ message: "User removed successfully", removedUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

module.exports = UserController;
