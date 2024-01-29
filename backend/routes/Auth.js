import express  from "express";
import {login ,register ,logout} from "../controllers/Auth.js";

const router=express.Router();//创建路由实例router，用于处理路由请求。

router.post("/login",login);
router.post("/register",register);

router.post("/logout",logout);




export default router;