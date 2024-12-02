import express from "express";
import {
  checkAuth,
  login,
  logout,
  signup,
  updateProfile,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

// ProctedRoutes is middleware that check if the current has lodded in
router.put("/updare-profile", protectRoute, updateProfile);

router.get("/check", protectRoute, checkAuth);

export default router;

// b2vn3WntgHNQN1vz
