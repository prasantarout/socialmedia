// import { db } from "../connect";
import bcrypt from "bcryptjs";
// import { Database } from "../connect";
import { Database } from "../Connect.js";
import Jwt from "jsonwebtoken";

export const register = (req, res) => {
  const query = "SELECT * FROM users WHERE username=?";
  Database.query(query, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User already exist");

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const query =
      "INSERT INTO users(`username`,`email`,`password`,`name`) VALUES (?)";
    const values = [req.body.username, req.body.email, hash, req.body.name];
    Database.query(query, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data) return res.status(200).json("Successfully Registed");
    });
  });

  //chck user exit

  //create a new user

  //hash password
};
export const login = (req, res) => {
  const query = "SELECT * FROM users WHERE username=?";
  Database.query(query, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found");

    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );
    if (!isPasswordCorrect) return res.status(400).json("Wrong credentials");

    const token = Jwt.sign({ id: data[0].id }, "secretkey");
    const { password, ...others } = data[0];

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);   
      
  });
};
export const logout = (req, res) => {
  res.clearCookie({
    secure: true,
    sameSite: "none",
  }).status(200).json("Successfully Logged Out");
};
