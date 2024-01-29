import React, { useState } from "react";
import "./posts.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import Comment from "../comments/Comment";
const Posts = ({ post }) => {
  const liked = false;
  const [openComment, setOpenComment] = useState(false);

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post?.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post?.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post?.name}</span>
              </Link>
              <span className="date">1 sec ago</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <p>{post?.desc}</p>
          <img src={post?.image} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            12 Likes
          </div>
          <div className="item">
            <TextsmsOutlinedIcon onClick={() => setOpenComment(!openComment)} />
            12 Comment
          </div>
          <div className="item">
            <ShareOutlinedIcon />
            12 Share
          </div>
        </div>
        {openComment && <Comment />}
      </div>
    </div>
  );
};

export default Posts;
