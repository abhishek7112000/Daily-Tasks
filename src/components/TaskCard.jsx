import { useState } from "react";

function TaskCard({ tasks, setTasks }) {
  const [newTask, setNewTask] = useState("");

  function addTask() {
    if (!newTask.trim()) return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: newTask,
        completed: false,
      },
    ]);

    setNewTask("");
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8">

      <h2 className="text-2xl font-bold mb-6">
        Today's Tasks
      </h2>

      <div className="flex gap-3 mb-6">

        <input
          className="flex-1 border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTask();
            }
          }}
        />

        <button
          onClick={addTask}
          className="bg-indigo-600 text-white px-6 rounded-xl hover:bg-indigo-700 transition"
        >
          Add
        </button>

      </div>

      <div className="space-y-3">

        {tasks.map((task) => (

          <div
            key={task.id}
            className="flex justify-between items-center bg-slate-100 rounded-xl p-4 hover:bg-slate-200 transition"
          >

            <div className="flex items-center gap-4">

              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className="w-5 h-5"
              />

              <span
                className={`text-lg ${
                  task.completed
                    ? "line-through text-gray-400"
                    : "text-gray-800"
                }`}
              >
                {task.text}
              </span>

            </div>

            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-500 hover:text-red-700 text-xl transition"
            >
              🗑
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default TaskCard;