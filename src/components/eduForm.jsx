import "./App.css";

function EduForm({ data, addEducation, removeEducation, handleEducation }) {
  return (
    <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg border border-blue-100 p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
          <span className="text-xl">🎓</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Education</h2>
      </div>
      <div className="space-y-6">
        {data.education.map((education, index) => (
          <div
            key={education.id}
            className="bg-white p-5 rounded-lg border-2 border-blue-100 hover:border-blue-300 transition-colors"
          >
            {data.education.length > 1 && (
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                  <span className="text-blue-600">📚</span> Education{" "}
                  {index + 1}
                </h3>
                <button
                  onClick={() => removeEducation(education.id)}
                  className="w-9 h-9 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white rounded-full flex items-center justify-center font-bold transition-all shadow-md hover:shadow-lg"
                >
                  ×
                </button>
              </div>
            )}
            <div className="space-y-3">
              <input
                type="text"
                className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-300 transition-all"
                maxLength={50}
                name="school"
                value={education.school}
                onChange={(e) => handleEducation(e, education.id)}
                placeholder="University or School"
              />
              <input
                type="text"
                className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-300 transition-all"
                maxLength={50}
                name="degree"
                value={education.degree}
                onChange={(e) => handleEducation(e, education.id)}
                placeholder="Degree"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  className="px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-300 transition-all"
                  maxLength={50}
                  name="city"
                  value={education.city}
                  onChange={(e) => handleEducation(e, education.id)}
                  placeholder="City"
                />
                <input
                  type="text"
                  className="px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-300 transition-all"
                  maxLength={50}
                  name="nation"
                  value={education.nation}
                  onChange={(e) => handleEducation(e, education.id)}
                  placeholder="Country"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  className="px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-300 transition-all"
                  maxLength={50}
                  name="startEdu"
                  value={education.startEdu}
                  onChange={(e) => handleEducation(e, education.id)}
                  placeholder="Start (02/2020)"
                />
                <input
                  type="text"
                  className="px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-300 transition-all"
                  maxLength={50}
                  name="endEdu"
                  value={education.endEdu}
                  onChange={(e) => handleEducation(e, education.id)}
                  placeholder="End (02/2024)"
                />
              </div>
            </div>
          </div>
        ))}
        <button
          className="w-full px-5 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          onClick={addEducation}
        >
          + Add Education
        </button>
      </div>
    </div>
  );
}

export default EduForm;
