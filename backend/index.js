import express from 'express';
import cors from 'cors';
import taskRoutes from './routes/taskRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/tasks', taskRoutes);

if (process.env.NODE_ENV !== 'test') {
app.listen(5000, () => console.log("Backend running on port 5000"));
}
export default app; // Export the app for testing