import "./App.css";

function Nav({ loadSampleCV, handlePrint }) {
  return (
    <>
      <div className="flex mb-5 justify-between p-4">
        <div>
          <h2>Code by Zulkifli Firdausi</h2>
        </div>
        <div>
          <h1 className="text-slate-900 text-5xl font-extrabold">CV Builder</h1>
        </div>
        <div className="flex gap-4">
          <button
            className="bg-blue-500 p-3 hover:bg-blue-600 text-white rounded-xl transition-colors duration-200"
            onClick={loadSampleCV}
          >
            Sample CV
          </button>
          <button
            className="bg-blue-500 p-3 hover:bg-blue-600 text-white rounded-xl transition-colors duration-200"
            onClick={handlePrint}
          >
            Download CV
          </button>
        </div>
      </div>
    </>
  );
}

export default Nav;
