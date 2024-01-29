import express  from "express";
import { addPost, getPost } from "../controllers/Post.js";

const router=express.Router();//创建路由实例router，用于处理路由请求。

router.get("/",getPost)
router.post("/addpost",addPost)

export default router;