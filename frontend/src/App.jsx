import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import TaskCard from './components/TaskCard';
import API from './apiConfig';

function App() {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({ title: '', description: '' });

  const fetchTasks = async () => {
    const { data } = await axios.get(API);
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(API, form);
    setForm({ title: '', description: '' });
    fetchTasks();
  };

  const markDone = async (id) => {
    await axios.put(`${API}/${id}/done`);
    fetchTasks();
  };

  return (
     <div className="bg-gray-200 min-h-screen p-6">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 gap-8">
          {/* Left Column - Add Task Form */}
          <div className="bg-white pr-8 border-r border-gray-500">
            <h2 className="text-xl font-semibold mb-6">Add a Task</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  id="description"
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-1 rounded font-medium cursor-pointer"
              >
                Add
              </button>
              </div>
            </form>
          </div>

          {/* Right Column - Task List */}
          <div className="space-y-3 pl-8">
            {tasks.map(task => (
              <TaskCard
                key={task.id}
                task={task}
                onDone={markDone}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;