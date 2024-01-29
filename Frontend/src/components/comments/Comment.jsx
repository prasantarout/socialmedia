import React, { useContext } from "react";
import "./comment.scss";
import { AuthContext } from "../../context/authContext";
const Comment = () => {

    const {currentUser}=useContext(AuthContext);

  const comments = [
    {
      id: 1,
      name: "john dae",
      userId: 1,
      porfilePic:
        "https://images.pexels.com/photos/18444259/pexels-photo-18444259/free-photo-of-woman-in-white-dress-walking-on-a-beach-sand-with-a-pair-of-sneakers-in-hand.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quam.",
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      name: "john dae",
      userId: 1,
      porfilePic:
        "https://images.pexels.com/photos/18444259/pexels-photo-18444259/free-photo-of-woman-in-white-dress-walking-on-a-beach-sand-with-a-pair-of-sneakers-in-hand.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quam.",
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

  return (
    <div className="comments">
        <div className="write">
            <img src={currentUser.profilePic} alt="" />
            <input type="text"placeholder="write a comment" />
            <button>Send</button>
        </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.porfilePic} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comment;
