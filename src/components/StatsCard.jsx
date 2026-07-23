function StatsCard({ tasks }) {
  const completed = tasks.filter(task => task.completed).length;

  const total = tasks.length;

  const percentage =
    total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="bg-white rounded-2xl shadow p-6 mt-6">

      <h2 className="text-xl font-bold mb-5">
        📊 Today's Progress
      </h2>

      <div className="grid grid-cols-2 gap-6">

        <div>
          <p className="text-gray-500">🔥 Streak</p>
          <h2 className="text-3xl font-bold">
            1 Day
          </h2>
        </div>

        <div>
          <p className="text-gray-500">✅ Completed</p>
          <h2 className="text-3xl font-bold">
            {completed}
          </h2>
        </div>

        <div>
          <p className="text-gray-500">📋 Total Tasks</p>
          <h2 className="text-3xl font-bold">
            {total}
          </h2>
        </div>

        <div>
          <p className="text-gray-500">📈 Completion</p>
          <h2 className="text-3xl font-bold">
            {percentage}%
          </h2>
        </div>

      </div>

    </div>
  );
}

export default StatsCard;