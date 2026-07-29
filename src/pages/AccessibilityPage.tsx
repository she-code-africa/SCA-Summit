export function AccessibilityPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
      <div className="space-y-4 border-b border-gray-200 pb-8">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900">
          Summit Accessibility & Inclusion
        </h1>
        <p className="text-gray-600 text-lg">
          We are committed to providing an inclusive, accessible experience for
          all online and in-person attendees.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-purple-50 rounded-2xl p-6 space-y-3 border border-purple-100">
          <h3 className="text-xl font-bold text-purple-900">
            Virtual & Digital Accommodations
          </h3>
          <ul className="list-disc list-inside text-sm text-purple-800 space-y-2">
            <li>
              Live closed captioning (CC) available on all virtual streams.
            </li>
            <li>American & International Sign Language (ASL) interpreters.</li>
            <li>
              Screen reader friendly web portal adhering to WCAG 2.1 AA
              standards.
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 space-y-3 border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900">
            Physical Venue Accessibility
          </h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
            <li>Wheelchair-accessible ramps, elevators, and wide doorways.</li>
            <li>
              Designated quiet/sensory decompression rooms available on site.
            </li>
            <li>Service animals welcome across all conference halls.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
