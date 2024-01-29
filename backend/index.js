import express  from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
const app=express();
import AuthRoutes from "./routes/Auth.js";
import UserRoutes from "./routes/Users.js";
import PostRoutes from "./routes/Post.js";
import LikesRoutes from "./routes/Likes.js";
import CommentRoutes from "./routes/comments.js";

app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Credentials",true);
  next()
})
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin:"http://localhost:5173",
}));

app.use("/api/user",UserRoutes);
app.use("/api/auth",AuthRoutes);
app.use("/api/post",PostRoutes);
app.use("/api/like",LikesRoutes);
app.use("/api/comment",CommentRoutes);



app.listen(3000,()=>{
    console.log("server is running at port no 3000");
    })