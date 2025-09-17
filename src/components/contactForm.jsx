import "./App.css";

function ContactForm() {
  return (
    <>
      <div className="flex flex-col border-2 max-w-md gap-1 p-3 rounded-sm">
        <h2>Personal Information</h2>
        <div className="grid grid-cols-2 gap-2">
          <input
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            type="text"
            name="FirstName"
            id="FirstName"
            placeholder="First Name"
          />
          <input
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            type="text"
            name="LastName"
            id="LastName"
            placeholder="Last Name"
          />
        </div>
        <input
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          type="text"
          name="title"
          id="title"
          placeholder="Title"
        />
        <input
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          type="email"
          name="Email"
          id="Email"
          placeholder="Email"
        />
        <input
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          type="tel"
          pattern="^\+62\d{9,13}$"
          name="PhoneNumber"
          id="PhoneNumber"
          placeholder="Phone Number"
        />
      </div>
    </>
  );
}

export default ContactForm;
