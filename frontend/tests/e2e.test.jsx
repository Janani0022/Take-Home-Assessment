// End-to-end test for frontend using React Testing Library and Axios mock
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
jest.mock('axios');
import App from '../src/App.jsx';
import '@testing-library/jest-dom';

describe('Todo App End-to-End', () => {
  it('renders tasks from API', async () => {
    axios.get.mockResolvedValueOnce({ data: [
      { id: 1, title: 'Task 1', description: 'Desc 1', completed: false },
      { id: 2, title: 'Task 2', description: 'Desc 2', completed: false }
    ] });
    render(<App />);
    expect(await screen.findByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
  });

  it('adds a new task', async () => {
    axios.get
      .mockResolvedValueOnce({ data: [] }) // initial fetch
      .mockResolvedValueOnce({ data: [{ id: 3, title: 'New Task', description: 'New Desc', completed: false }] }); // after add
    axios.post.mockResolvedValueOnce({ data: { id: 3, title: 'New Task', description: 'New Desc', completed: false } });
    render(<App />);
    fireEvent.change(screen.getByLabelText(/title/i), { target: { value: 'New Task' } });
    fireEvent.change(screen.getByLabelText(/description/i), { target: { value: 'New Desc' } });
    fireEvent.click(screen.getByRole('button', { name: /add/i }));
    await waitFor(() => expect(screen.getByText('New Task')).toBeInTheDocument());
  });

  it('completes a task', async () => {
    axios.get
      .mockResolvedValueOnce({ data: [
        { id: 4, title: 'Complete Me', description: 'Desc', completed: false }
      ] }) // initial fetch
      .mockResolvedValueOnce({ data: [] }); // after completion, no tasks
    axios.put.mockResolvedValueOnce({ data: { success: true } });
    render(<App />);
    const doneButton = await screen.findByRole('button', { name: /done/i });
    fireEvent.click(doneButton);
    await waitFor(() => expect(screen.queryByText('Complete Me')).not.toBeInTheDocument());
  });
});
