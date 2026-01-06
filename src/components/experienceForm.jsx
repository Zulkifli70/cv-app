import "./App.css";

function ExpForm({ data, addExp, removeExp, handleExp }) {
  return (
    <div className="bg-gradient-to-br from-white to-emerald-50 rounded-xl shadow-lg border border-emerald-100 p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
          <span className="text-xl">💼</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Work Experience</h2>
      </div>
      <div className="space-y-6">
        {data.experience.map((experience, index) => (
          <div
            key={experience.id}
            className="bg-white p-5 rounded-lg border-2 border-emerald-100 hover:border-emerald-300 transition-colors"
          >
            {data.experience.length > 1 && (
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                  <span className="text-emerald-600">🏢</span> Experience{" "}
                  {index + 1}
                </h3>
                <button
                  onClick={() => removeExp(experience.id)}
                  className="w-9 h-9 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white rounded-full flex items-center justify-center font-bold transition-all shadow-md hover:shadow-lg"
                >
                  ×
                </button>
              </div>
            )}
            <div className="space-y-3">
              <input
                type="text"
                className="w-full px-4 py-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent hover:border-emerald-300 transition-all"
                name="position"
                value={experience.position}
                onChange={(e) => handleExp(e, experience.id)}
                placeholder="Position (e.g. Software Developer)"
              />
              <input
                type="text"
                className="w-full px-4 py-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent hover:border-emerald-300 transition-all"
                name="company"
                value={experience.company}
                onChange={(e) => handleExp(e, experience.id)}
                placeholder="Company (e.g. ABC Tech Company)"
              />
              <textarea
                rows={4}
                className="w-full px-4 py-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none hover:border-emerald-300 transition-all"
                name="jobDesc"
                value={experience.jobDesc}
                onChange={(e) => handleExp(e, experience.id)}
                placeholder="Job Description:
- Main responsibility 1
- Main responsibility 2
- Main responsibility 3"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  className="px-4 py-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent hover:border-emerald-300 transition-all"
                  name="startDate"
                  value={experience.startDate}
                  onChange={(e) => handleExp(e, experience.id)}
                  placeholder="Start Date"
                />
                <input
                  type="text"
                  className="px-4 py-3 border-2 border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent hover:border-emerald-300 transition-all"
                  name="endDate"
                  value={experience.endDate}
                  onChange={(e) => handleExp(e, experience.id)}
                  placeholder="End Date"
                />
              </div>
            </div>
          </div>
        ))}
        <button
          className="w-full px-5 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          onClick={addExp}
        >
          + Add Experience
        </button>
      </div>
    </div>
  );
}

export default ExpForm;
