import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise();

export default async function getAllProducts() {
    const [rows] = await pool.query("SELECT * FROM products");
    return rows;
}

export async function getProduct(id) {
    const [rows] = await pool.query(`
    SELECT *
    FROM products
    WHERE id= ?
    `, [id]);
    return rows[0];
}

export async function getAllUsers() {

}

export async function getUser(id) {

}
export async function createProduct() {

}

export async function createUser() {

}

const prod = await getAllProducts();
console.log(prod);


