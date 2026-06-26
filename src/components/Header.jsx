function Header() {
  const hour = new Date().getHours();

  let greeting = "Good Evening 🌙";

  if (hour < 12) {
    greeting = "Good Morning ☀️";
  } else if (hour < 18) {
    greeting = "Good Afternoon 🌤️";
  }

  const today = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 mb-8 flex justify-between items-center">

      <div>

        <h1 className="text-5xl font-bold text-slate-800">
          {greeting}, Daya 👋
        </h1>

        <p className="text-gray-500 mt-2 text-lg">
          {today}
        </p>

        <p className="text-indigo-600 italic mt-4">
          "Small disciplines repeated daily become extraordinary results."
        </p>

      </div>

      <div className="flex items-center gap-5">

        <button className="text-3xl hover:scale-110 transition">
          🔔
        </button>

        <img
          src="https://i.pravatar.cc/100"
          alt="Profile"
          className="w-16 h-16 rounded-full shadow-md"
        />

      </div>

    </div>
  );
}

export default Header;