function Sidebar() {
  return (
    <div className="w-72 bg-slate-900 text-white min-h-screen p-8">

      <h1 className="text-3xl font-bold mb-10">
        Daily Tasks
      </h1>

      <nav className="space-y-5">

        <button className="block w-full text-left p-3 rounded-xl bg-indigo-600">
          🏠 Dashboard
        </button>

        <button className="block w-full text-left p-3 rounded-xl hover:bg-slate-800">
          📅 Calendar
        </button>

        <button className="block w-full text-left p-3 rounded-xl hover:bg-slate-800">
          ✅ Tasks
        </button>

        <button className="block w-full text-left p-3 rounded-xl hover:bg-slate-800">
          📈 Analytics
        </button>

        <button className="block w-full text-left p-3 rounded-xl hover:bg-slate-800">
          ⚙ Settings
        </button>

      </nav>

    </div>
  );
}

export default Sidebar;