import express from "express";
import { login, logout, register, updateProfile } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router= express.Router();

router.route("/auth/register").post(register);  //Register a new user
router.route("/auth/login").post(login);  //Login a user
router.route("/auth/logout").post(isAuthenticated, logout);  //Logout a user
router.route("/profile").patch(isAuthenticated, updateProfile);  //Update a user profile

//although using verbs like "update" in the API path is not recommended in RESTful APIs pattern

export default router;

