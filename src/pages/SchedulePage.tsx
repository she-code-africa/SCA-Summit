export function SchedulePage() {
  const sessions = [
    {
      time: "09:00 AM - 10:00 AM",
      title: "Opening Keynote: The Future of Women in Tech across Africa",
      speaker: "SCA Leadership Team",
      room: "Main Auditorium"
    },
    {
      time: "10:30 AM - 12:00 PM",
      title: "Deep Dive into Modern Web Performance & Vite Architectures",
      speaker: "Glory Okafor & Tech Panel",
      room: "Room Alpha (Frontend Track)"
    },
    {
      time: "01:30 PM - 03:00 PM",
      title: "Building Inclusive Products & Digital Accessibility",
      speaker: "Chidalu Anukam & Design Leads",
      room: "Room Beta (Product Track)"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900">
          Event Schedule
        </h1>
        <p className="text-gray-600 text-lg">
          Explore technical sessions, panel discussions, and hands-on workshops.
        </p>
      </div>

      <div className="space-y-4 max-w-4xl mx-auto">
        {sessions.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            <div>
              <span className="text-xs font-semibold text-purple-600">
                {item.time} &bull; {item.room}
              </span>
              <h3 className="text-lg font-bold text-gray-900 mt-1">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Presented by{" "}
                <span className="font-medium text-gray-700">
                  {item.speaker}
                </span>
              </p>
            </div>
            <button className="self-start md:self-center px-4 py-2 border border-purple-200 text-purple-700 rounded-lg text-sm font-semibold hover:bg-purple-50 transition-colors">
              Add to Calendar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
