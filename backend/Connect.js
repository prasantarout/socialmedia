import mysql from "mysql2";

export const Database = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Prout@9615", // 请替换为你的数据库密码
    database: "socialmedia" // 请替换为你的数据库名
});
