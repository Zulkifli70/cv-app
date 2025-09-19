import "./App.css";

function SkillForm({ data, addSkill, removeSkill, handleSkill }) {
  return (
    <div className="flex flex-col border-2 border-gray-200 max-w-md gap-4 p-4 rounded-lg bg-white shadow-sm">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Skill</h2>

      {data.skill.map((skill, index) => (
        <div key={skill.id}>
          {data.skill.length > 1 && (
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-medium text-gray-700">
                Skill {index + 1}
              </h3>
              <button
                onClick={() => removeSkill(skill.id)}
                className="w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center font-bold transition-colors"
                title="Remove skill"
              >
                ×
              </button>
            </div>
          )}

          <div className="space-y-2">
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-300 transition-colors"
              type="text"
              maxLength={15}
              name="skill"
              value={skill.skill}
              onChange={(e) => handleSkill(e, skill.id)}
              placeholder="Skill Set (e. g. JavaScript, React etc.)"
            />
          </div>
        </div>
      ))}

      <button
        className="w-full px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
        onClick={addSkill}
      >
        + Add skill
      </button>
    </div>
  );
}

export default SkillForm;
