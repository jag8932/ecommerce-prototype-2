import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise();

const getAllProducts = async() => {
    const [rows] = await pool.query("SELECT * FROM products");
    return rows;
}

const searchFor = async(input) => {
    const [rows] = await pool.query("SELECT * FROM products WHERE title Like ?", [input]);
    if (rows.length > 0) {
        return rows[0];
    }
    return {
        message: "Item not found"
    }
}

const getProduct = async(id) => {
    const [rows] = await pool.query(`
    SELECT *
    FROM products
    WHERE id= ?
    `, [id]);
    return rows[0];
}

const getAllUsers = async() => {

}

const getUser = async(id) => {

}
const createProduct = async() => {

}

const createUser = async() => {

}

const queryData = {
    getAllProducts,
    searchFor,
    getProduct,
    getAllUsers,
    getUser,
    createProduct,
    createUser,
}
 
export default queryData;


