function ProgressCard({ tasks }) {
  const completed = tasks.filter((task) => task.completed).length;

  const total = tasks.length;

  const percentage =
    total === 0
      ? 0
      : Math.round((completed / total) * 100);

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8">

      <h2 className="text-2xl font-bold">
        Today's Progress
      </h2>

      <div className="mt-8">

        <div className="w-full h-5 bg-gray-200 rounded-full">

          <div
            className="h-5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500"
            style={{ width: `${percentage}%` }}
          ></div>

        </div>

      </div>

      <div className="flex justify-between mt-6">

        <div>

          <h3 className="text-4xl font-bold">
            {percentage}%
          </h3>

          <p className="text-gray-500">
            Completed
          </p>

        </div>

        <div className="text-right">

          <h3 className="text-4xl font-bold">
            {completed}/{total}
          </h3>

          <p className="text-gray-500">
            Tasks Done
          </p>

        </div>

      </div>

    </div>
  );
}

export default ProgressCard;