import "./App.css";

function ContactForm({ data, handleData }) {
  return (
    <div className="bg-gradient-to-br from-white to-purple-50 rounded-xl shadow-lg border border-purple-100 p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
          <span className="text-xl">📞</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">
          Contact Information
        </h2>
      </div>
      <div className="space-y-3">
        <input
          className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent hover:border-purple-300 transition-all bg-white"
          type="tel"
          value={data.info[4].text}
          onChange={handleData}
          placeholder="Phone Number"
        />
        <input
          className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent hover:border-purple-300 transition-all bg-white"
          type="email"
          value={data.info[5].text}
          onChange={handleData}
          placeholder="Email"
        />
        <input
          className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent hover:border-purple-300 transition-all bg-white"
          type="text"
          value={data.info[6].text}
          onChange={handleData}
          placeholder="Github Link"
        />
      </div>
    </div>
  );
}

export default ContactForm;
