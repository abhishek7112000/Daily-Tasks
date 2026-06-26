function ScheduleCard() {
  return (
    <div className="bg-white rounded-2xl shadow p-5">

      <h2 className="text-xl font-semibold">
        Today's Schedule
      </h2>

      <div className="mt-5 space-y-3">

        <p>09:00 • University</p>
        <p>11:00 • Coding</p>
        <p>18:00 • Gym</p>

      </div>

    </div>
  );
}

export default ScheduleCard;