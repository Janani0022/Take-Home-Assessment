import { pool } from '../db.js';

export const getTasks = async (req, res) => {
  try {
  // Fetch tasks that are not completed, ordered by creation date
  const [rows] = await pool.query("SELECT * FROM task WHERE is_completed = false ORDER BY created_at DESC LIMIT 5");
  res.json(rows);
}catch (error) {
    console.error('Error fetching tasks:', error);  
    res.status(500).send('Internal Server Error');
  }
};

// Add a new task to the database
export const addTask = async (req, res) => {
  const { title, description } = req.body;
  const [result] = await pool.query("INSERT INTO task (title, description) VALUES (?, ?)", [title, description]);
  res.json({ id: result.insertId, title, description });
};

// Mark a task as done by updating its status in the database
export const markDone = async (req, res) => {
  const { id } = req.params;
  await pool.query("UPDATE task SET is_completed = true WHERE id = ?", [id]);
  res.json({ success: true });
};
