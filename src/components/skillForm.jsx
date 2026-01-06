import "./App.css";

function SkillForm({ data, addSkill, removeSkill, handleSkill }) {
  return (
    <div className="bg-gradient-to-br from-white to-amber-50 rounded-xl shadow-lg border border-amber-100 p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
          <span className="text-xl">⚡</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Skills</h2>
      </div>
      <div className="space-y-4">
        {data.skill.map((skill, index) => (
          <div
            key={skill.id}
            className="bg-white p-4 rounded-lg border-2 border-amber-100 hover:border-amber-300 transition-colors"
          >
            {data.skill.length > 1 && (
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-base font-semibold text-gray-700 flex items-center gap-2">
                  <span className="text-amber-600">🎯</span> Skill {index + 1}
                </h3>
                <button
                  onClick={() => removeSkill(skill.id)}
                  className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white rounded-full flex items-center justify-center font-bold transition-all shadow-md hover:shadow-lg"
                >
                  ×
                </button>
              </div>
            )}
            <input
              className="w-full px-4 py-3 border-2 border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent hover:border-amber-300 transition-all"
              type="text"
              maxLength={15}
              name="skill"
              value={skill.skill}
              onChange={(e) => handleSkill(e, skill.id)}
              placeholder="Skill (e.g. JavaScript, React)"
            />
          </div>
        ))}
        <button
          className="w-full px-5 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          onClick={addSkill}
        >
          + Add Skill
        </button>
      </div>
    </div>
  );
}

export default SkillForm;
