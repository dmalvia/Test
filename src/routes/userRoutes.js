import express from "express";
import validateUser from "../middlewares/inputValidator.js";
import {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
const router = express.Router();

router.get("/user", getAllUsers);
router.get("/user/:id", getUserById);
router.post("/user", validateUser, createUser);
router.put("/user/:id", validateUser, updateUser);
router.delete("/user/:id", deleteUser);

export default router;
