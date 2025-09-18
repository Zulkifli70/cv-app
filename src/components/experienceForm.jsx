import "./App.css";

function ExpForm({ data, addExp, removeExp, handleExp }) {
  return (
    <div className="flex flex-col border-2 border-gray-200 max-w-md gap-4 p-4 rounded-lg bg-white shadow-sm">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Experience</h2>

      {data.experience.map((experience, index) => (
        <div key={experience.id}>
          {data.experience.length > 1 && (
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-medium text-gray-700">
                Experience {index + 1}
              </h3>
              <button
                onClick={() => removeExp(experience.id)}
                className="w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center font-bold transition-colors"
                title="Remove experience"
              >
                ×
              </button>
            </div>
          )}

          <div className="space-y-3">
            <div>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                name="position"
                value={experience.position}
                onChange={(e) => handleExp(e, experience.id)}
                placeholder="e.g. Software Developer"
              />
            </div>

            <div>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                name="company"
                value={experience.company}
                onChange={(e) => handleExp(e, experience.id)}
                placeholder="e.g. ABC Tech Company"
              />
            </div>

            <div>
              <textarea
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                name="jobDesc"
                value={experience.jobDesc}
                onChange={(e) => handleExp(e, experience.id)}
                placeholder="Example:
- Main capability 1
- Main capability 2
- Main capability 3"
              />
            </div>

            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              name="startDate"
              value={experience.startDate}
              onChange={(e) => handleExp(e, experience.id)}
              placeholder="Start Date"
            />

            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              name="endDate"
              value={experience.endDate}
              onChange={(e) => handleExp(e, experience.id)}
              placeholder="End Date"
            />
          </div>
        </div>
      ))}

      <button
        className="w-full px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
        onClick={addExp}
      >
        <span className="text-lg">+</span>
        Add Experience
      </button>
    </div>
  );
}

export default ExpForm;
