import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: 'root',
  password: '',
  database: 'todo_db',
  waitForConnections: true,
});

