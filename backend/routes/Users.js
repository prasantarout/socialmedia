import express  from "express";
import { getUser } from "../controllers/User.js";

const router=express.Router();//创建路由实例router，用于处理路由请求。

router.get("/find/:userId",getUser)


export default router;