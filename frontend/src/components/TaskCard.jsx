import React from 'react';

export default function TaskCard({ task, onDone }) {
  return (
    <div className="bg-gray-300 p-4 rounded-lg mb-3">
      <h3 className="text-lg font-semibold text-black mb-1">{task.title}</h3>
      <p className="text-sm text-gray-700 mb-3">{task.description}</p>
      <div className="flex justify-end">
      <button
        onClick={() => onDone(task.id)}
        className="border-gray-500 border-2 hover:bg-gray-500 text-black px-6 py-1 rounded text-sm font-medium cursor-pointer"
      >
        Done
      </button>
      </div>
    </div>
  );
}
