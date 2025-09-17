import { useState } from "react";
import "./App.css";

function ExpForm() {
  return (
    <>
      <div className="flex flex-col border-2 max-w-md gap-1 p-3 rounded-sm">
        <input
          type="text"
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          name="position"
          id="position"
          placeholder="Position"
        />
        <input
          type="text"
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          name="company"
          id="company"
          placeholder="Company"
        />
        <textarea
          rows={5}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          name="jobDesc"
          id="jobDesc"
          placeholder="Main responsibilities of your jobs"
        />
        <input
          type="date"
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          name="startDate"
          id="startDate"
          placeholder="Start Date"
        />
        <input
          type="date"
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          name="endDate"
          id="endDate"
          placeholder="End Date"
        />
        <button>+</button>
      </div>
    </>
  );
}

export default ExpForm;
