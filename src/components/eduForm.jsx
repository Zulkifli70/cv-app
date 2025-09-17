import "./App.css";
import { useState } from "react";
function EduForm() {
  return (
    <>
      <div className="flex flex-col border-2 max-w-md gap-1 p-3 rounded-sm">
        <input
          type="text"
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          name="university"
          id="university"
          placeholder="University or School"
        />
        <input
          type="text"
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          name="degree"
          id="degree"
          placeholder="Degree"
        />
        <button>+</button>
      </div>
    </>
  );
}

// function EduForm() {
//   const [experiences, setExperiences] = useState([
//     { company: "", role: "", years: "" }, // default 1 form
//   ]);

//   const addExperience = () => {
//     setExperiences([...experiences, { company: "", role: "", years: "" }]);
//   };

//   const handleChange = (index, field, value) => {
//     const updated = [...experiences];
//     updated[index][field] = value;
//     setExperiences(updated);
//   };

//   return (
//     <div>
//       <h2>Job Experiences</h2>
//       {experiences.map((exp, index) => (
//         <div key={index} className="border p-2 mb-2">
//           <input
//             type="text"
//             placeholder="Company"
//             value={exp.company}
//             onChange={(e) => handleChange(index, "company", e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Role"
//             value={exp.role}
//             onChange={(e) => handleChange(index, "role", e.target.value)}
//           />
//           <input
//             type="number"
//             placeholder="Years"
//             value={exp.years}
//             onChange={(e) => handleChange(index, "years", e.target.value)}
//           />
//         </div>
//       ))}
//       <button onClick={addExperience}>+ Add Experience</button>
//     </div>
//   );
// }

export default EduForm;
