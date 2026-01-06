import "./App.css";

function GeneralForm({ data, handleData }) {
  return (
    <div className="bg-gradient-to-br from-white to-indigo-50 rounded-xl shadow-lg border border-indigo-100 p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
          <span className="text-xl">👤</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Personal Details</h2>
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <input
            className="px-4 py-3 border-2 border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent hover:border-indigo-300 transition-all bg-white"
            type="text"
            maxLength={15}
            value={data.info[0].text}
            onChange={handleData}
            placeholder="First Name"
          />
          <input
            className="px-4 py-3 border-2 border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent hover:border-indigo-300 transition-all bg-white"
            type="text"
            maxLength={15}
            value={data.info[1].text}
            onChange={handleData}
            placeholder="Last Name"
          />
        </div>
        <input
          className="w-full px-4 py-3 border-2 border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent hover:border-indigo-300 transition-all bg-white"
          type="text"
          maxLength={50}
          value={data.info[2].text}
          onChange={handleData}
          placeholder="Title (e.g., Software Developer)"
        />
        <textarea
          className="w-full px-4 py-3 border-2 border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent hover:border-indigo-300 transition-all resize-none bg-white"
          rows={5}
          maxLength={600}
          value={data.info[3].text}
          onChange={handleData}
          placeholder="Brief description about yourself..."
        />
      </div>
    </div>
  );
}

export default GeneralForm;
