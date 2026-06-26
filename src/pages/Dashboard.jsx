import { useState, useEffect } from "react";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import ProgressCard from "../components/ProgressCard";
import TaskCard from "../components/TaskCard";
import ScheduleCard from "../components/ScheduleCard";

import defaultTasks from "../data/defaultTasks";

function Dashboard() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");

    return saved ? JSON.parse(saved) : defaultTasks;
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <main className="flex-1 p-10">

        <Header />

        <div className="grid grid-cols-2 gap-6">

          <ProgressCard tasks={tasks} />

          <ScheduleCard />

        </div>

        <div className="mt-6">

          <TaskCard
            tasks={tasks}
            setTasks={setTasks}
          />

        </div>

      </main>

    </div>
  );
}

export default Dashboard;