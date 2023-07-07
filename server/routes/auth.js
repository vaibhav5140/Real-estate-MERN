import express from "express"
import * as auth from '../controller/auth.js';
import { requireSignin} from "../middlewares/auth.js";
const router=express.Router();
router.get("/",requireSignin,auth.welcome);
router.post("/pre-register", auth.preRegister);
router.post("/register",auth.register);
router.post("/login",auth.login);
router.post("/forgotPassword",auth.forgotPassword);
router.post("/accessAccount",auth.accessAccount);
router.get("/refreshToken",auth.refreshToken);
router.get("/currentUser",requireSignin,auth.currentUser);
router.get("/profile/:username",auth.publicProfile);
router.put("/updatePassword",requireSignin,auth.updatePassword);
router.put("/updateProfile",requireSignin,auth.updateProfile);
router.get("/agents", auth.agents);
router.get("/agent-ad-count/:_id", auth.agentAdCount);
router.get("/agent/:username", auth.agent);
export default router;