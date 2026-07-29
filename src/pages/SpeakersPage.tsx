export function SpeakersPage() {
  const speakers = [
    {
      name: "Dr. Amina Bello",
      role: "AI Research Lead",
      company: "DeepTech Africa",
      track: "AI & Data Science",
      bio: "Pioneering ethical AI models tailored for emerging African markets."
    },
    {
      name: "Nneka Okafor",
      role: "Principal Frontend Engineer",
      company: "Global Tech",
      track: "Frontend Development",
      bio: "Building scalable web architectures and leading developer communities across West Africa."
    },
    {
      name: "Kemi Adebayo",
      role: "Head of Product",
      company: "FinPay Solutions",
      track: "Product & Leadership",
      bio: "Driving inclusion through seamless payment technologies."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900">
          2026 Keynote Speakers
        </h1>
        <p className="text-gray-600 text-lg">
          Learn from visionary engineers, executives, and innovators shaping
          global tech.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {speakers.map((s, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-20 h-20 rounded-full bg-purple-100 text-purple-600 font-bold text-2xl flex items-center justify-center mb-4">
              {s.name[0]}
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 bg-purple-50 text-purple-700 rounded-full">
              {s.track}
            </span>
            <h3 className="text-xl font-bold text-gray-900 mt-3">{s.name}</h3>
            <p className="text-sm font-medium text-gray-500">
              {s.role} &bull; {s.company}
            </p>
            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
              {s.bio}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
