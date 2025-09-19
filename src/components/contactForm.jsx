import "./App.css";

function ContactForm({ data, handleData }) {
  return (
    <div className="flex flex-col border-2 border-gray-200 max-w-md gap-4 p-4 rounded-lg bg-white shadow-sm">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Contact</h2>

      <input
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-300 transition-colors"
        type="tel"
        name="phoneNumber"
        value={data.info[4].text}
        onChange={handleData}
        placeholder="Phone Number"
      />
      <input
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-300 transition-colors"
        type="email"
        name="email"
        value={data.info[5].text}
        onChange={handleData}
        placeholder="Email"
      />
      <input
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-300 transition-colors"
        type="text"
        name="Github"
        value={data.info[6].text}
        onChange={handleData}
        placeholder="Github Link"
      />
    </div>
  );
}

export default ContactForm;
