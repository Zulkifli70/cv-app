import "./App.css";

function GeneralForm({ data, handleData }) {
  return (
    <div className="flex flex-col border-2 border-gray-200 max-w-md gap-4 p-4 rounded-lg bg-white shadow-sm">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Personal Details
      </h2>
      <div className="grid grid-cols-2 gap-2">
        <input
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-300 transition-colors"
          type="text"
          maxLength={15}
          value={data.info[0].text}
          onChange={handleData}
          placeholder="First Name"
        />
        <input
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-300 transition-colors"
          type="text"
          maxLength={15}
          value={data.info[1].text}
          onChange={handleData}
          placeholder="Last Name"
        />
      </div>
      <input
        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-300 transition-colors"
        type="text"
        maxLength={50}
        value={data.info[2].text}
        onChange={handleData}
        placeholder="Title"
      />
      <textarea
        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-300 transition-colors resize-none"
        rows={5}
        maxLength={600}
        value={data.info[3].text}
        onChange={handleData}
        placeholder="Tell about yourself"
      ></textarea>
    </div>
  );
}

export default GeneralForm;
