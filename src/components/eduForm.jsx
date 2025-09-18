import "./App.css";

function EduForm({ data, addEducation, removeEducation, handleEducation }) {
  return (
    <div className="flex flex-col border-2 border-gray-200 max-w-md gap-4 p-4 rounded-lg bg-white shadow-sm">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Education</h2>

      {data.education.map((education, index) => (
        <div key={education.id}>
          {data.education.length > 1 && (
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-700">
                Education {index + 1}
              </h3>
              <button
                onClick={() => removeEducation(education.id)}
                className="w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center font-bold transition-colors"
                title="Remove education"
              >
                ×
              </button>
            </div>
          )}

          <div className="space-y-2">
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-300 transition-colors"
              maxLength={50}
              name="school"
              value={education.school}
              onChange={(e) => handleEducation(e, education.id)}
              placeholder="University or School"
            />

            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-300 transition-colors"
              maxLength={50}
              name="degree"
              value={education.degree}
              onChange={(e) => handleEducation(e, education.id)}
              placeholder="Degree"
            />

            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-300 transition-colors"
              maxLength={50}
              name="city"
              value={education.city}
              onChange={(e) => handleEducation(e, education.id)}
              placeholder="City"
            />

            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-300 transition-colors"
              maxLength={50}
              name="nation"
              value={education.nation}
              onChange={(e) => handleEducation(e, education.id)}
              placeholder="Nation"
            />

            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-300 transition-colors"
              maxLength={50}
              name="startEdu"
              value={education.startEdu}
              onChange={(e) => handleEducation(e, education.id)}
              placeholder="Start Date (example 02/2020)"
            />

            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-300 transition-colors"
              maxLength={50}
              name="endEdu"
              value={education.endEdu}
              onChange={(e) => handleEducation(e, education.id)}
              placeholder="End Date (example 02/2020)"
            />
          </div>
        </div>
      ))}

      <button className="w-full px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
        + Add Education
      </button>
    </div>
  );
}

export default EduForm;
