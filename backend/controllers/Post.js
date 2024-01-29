import { Database } from "../Connect.js";
import Jwt from "jsonwebtoken";
import moment from "moment";

export const getPost = (req, res) => {
  const userId = req.query.userId;
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not logged in!");

  Jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const query =
      userId !== "undefined"
        ? `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId) WHERE p.userId = ? ORDER BY p.createdAt DESC`
        : `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId)
    LEFT JOIN relationships AS r ON (p.userId = r.followedUserId) WHERE r.followerUserId= ? OR p.userId =?
    ORDER BY p.createdAt DESC`;

    const values =
      userId !== "undefined" ? [userId] : [userInfo.id, userInfo.id];

    Database.query(query, values, (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  });
};

export const addPost = (req, res) => {
  const userId = req.query.userId;

  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not logged in!");
  Jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q =
      "INSERT INTO post(`desc`, `image`, `createdAt`, `userId`) VALUES (?)";

    const values = [
      req.body.desc,
      req.body.image,
      moment().format("YYYY-MM-DD HH:mm:ss"),
      userInfo.id,
      // Add more rows as needed
    ];
    console.log(userInfo?.id);
    Database.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("post has been created");
    });
  });
};
