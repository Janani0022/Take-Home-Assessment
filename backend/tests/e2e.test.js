// End-to-end test for backend API using supertest
import request from 'supertest';
import app from '../index.js';

describe('Todo API End-to-End', () => {
  it('should fetch tasks', async () => {
    const res = await request(app).get('/api/tasks');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should add a new task', async () => {
    const res = await request(app)
      .post('/api/tasks')
      .send({ title: 'Test Task', description: 'Test Desc' });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('id');
  });

  it('should mark a task as completed', async () => {
    // Add a task first
    const addRes = await request(app)
      .post('/api/tasks')
      .send({ title: 'Complete Me', description: 'To be completed' });
    const taskId = addRes.body.id;
    // Complete the task
    const completeRes = await request(app)
      .put(`/api/tasks/${taskId}/done`);
    expect(completeRes.statusCode).toBe(200);
    expect(completeRes.body).toHaveProperty('success', true);
  });
});
