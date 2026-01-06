import { useState, useRef } from "react";
import "./App.css";
import Nav from "./nav.jsx";
import GeneralForm from "./generalForm.jsx";
import EduForm from "./eduForm.jsx";
import ExpForm from "./experienceForm.jsx";
import CvPreview from "./cv-preview.jsx";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "./contactForm.jsx";
import SkillForm from "./skillForm.jsx";
import CV from "./sampleCV.jsx";

function App() {
  const componentRef = useRef(null);
  const [isMobilePreview, setIsMobilePreview] = useState(false);

  const [data, setData] = useState({
    info: [
      {
        name: "First Name",
        text: "",
      },
      {
        name: "Last Name",
        text: "",
      },
      {
        name: "Title",
        text: "",
      },
      {
        name: "Tell about yourself",
        text: "",
      },
      {
        name: "Phone Number",
        text: "",
      },
      {
        name: "Email",
        text: "",
      },
      {
        name: "Github Link",
        text: "",
      },
    ],
    education: [
      {
        id: uuidv4(),
        school: "",
        degree: "",
        city: "",
        nation: "",
        startEdu: "",
        endEdu: "",
      },
    ],
    experience: [
      {
        id: uuidv4(),
        position: "",
        company: "",
        jobDesc: "",
        startDate: "",
        endDate: "",
      },
    ],
    skill: [
      {
        id: uuidv4(),
        skill: "",
      },
    ],
  });

  const handleData = (e) => {
    setData({
      ...data,
      info: data.info.map((element) => {
        if (element.name === e.target.placeholder)
          element.text = e.target.value;
        return element;
      }),
    });
  };

  const addEducation = () => {
    setData({
      ...data,
      education: [
        ...data.education,
        {
          id: uuidv4(),
          school: "",
          degree: "",
          city: "",
          nation: "",
          startEdu: "",
          endEdu: "",
        },
      ],
    });
  };

  const removeEducation = (id) => {
    setData({
      ...data,
      education: data.education.filter((education) => education.id !== id),
    });
  };

  const handleEducation = (e, id) => {
    setData({
      ...data,
      education: data.education.map((education) => {
        if (education.id === id) education[e.target.name] = e.target.value;
        return education;
      }),
    });
  };

  const addExp = () => {
    setData({
      ...data,
      experience: [
        ...data.experience,
        {
          id: uuidv4(),
          position: "",
          company: "",
          jobDesc: "",
          startDate: "",
          endDate: "",
        },
      ],
    });
  };

  const removeExp = (id) => {
    setData({
      ...data,
      experience: data.experience.filter((experience) => experience.id !== id),
    });
  };

  const handleExp = (e, id) => {
    setData({
      ...data,
      experience: data.experience.map((experience) => {
        if (experience.id === id) experience[e.target.name] = e.target.value;
        return experience;
      }),
    });
  };

  const addSkill = () => {
    setData({
      ...data,
      skill: [
        ...data.skill,
        {
          id: uuidv4(),
          skill: "",
        },
      ],
    });
  };

  const removeSkill = (id) => {
    setData({
      ...data,
      skill: data.skill.filter((skill) => skill.id !== id),
    });
  };

  const handleSkill = (e, id) => {
    setData({
      ...data,
      skill: data.skill.map((skill) => {
        if (skill.id === id) skill[e.target.name] = e.target.value;
        return skill;
      }),
    });
  };

  const loadSampleCV = () => {
    setData({
      info: [
        { name: "First Name", text: "John" },
        { name: "Last Name", text: "Doe" },
        { name: "Title", text: "React Developer" },
        {
          name: "Tell about yourself",
          text: "Passionate developer with 5+ years of experience building modern web applications. Specialized in React, TypeScript, and creating beautiful user interfaces.",
        },
        { name: "Phone Number", text: "+1 (555) 123-4567" },
        { name: "Email", text: "john.doe@email.com" },
        { name: "Github Link", text: "github.com/johndoe" },
      ],
      education: [
        {
          id: uuidv4(),
          school: "Stanford University",
          degree: "Computer Science",
          city: "Stanford",
          nation: "USA",
          startEdu: "09/2018",
          endEdu: "06/2022",
        },
      ],
      experience: [
        {
          id: uuidv4(),
          position: "Senior Frontend Developer",
          company: "Tech Corp",
          jobDesc:
            "- Led development of company's main product dashboard\n- Improved performance by 40% through code optimization\n- Mentored junior developers",
          startDate: "01/2023",
          endDate: "Present",
        },
      ],
      skill: [
        { id: uuidv4(), skill: "React" },
        { id: uuidv4(), skill: "TypeScript" },
        { id: uuidv4(), skill: "Tailwind CSS" },
        { id: uuidv4(), skill: "Node.js" },
        { id: uuidv4(), skill: "Git" },
      ],
    });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <ModernNav loadSampleCV={loadSampleCV} handlePrint={handlePrint} />

      {/* Desktop Layout */}
      <div className="hidden lg:flex lg:gap-6 lg:p-6 max-w-[1800px] mx-auto">
        {/* Sidebar Form - 30% */}
        <div className="w-[30%] space-y-4 max-h-[calc(100vh-120px)] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-800/50">
          <FormSection
            title="Personal Details"
            icon={
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            }
          >
            <div className="grid grid-cols-2 gap-3">
              <DarkInput
                placeholder="First Name"
                value={data.info[0].text}
                onChange={handleData}
                maxLength={15}
              />
              <DarkInput
                placeholder="Last Name"
                value={data.info[1].text}
                onChange={handleData}
                maxLength={15}
              />
            </div>
            <DarkInput
              placeholder="Title"
              value={data.info[2].text}
              onChange={handleData}
              maxLength={50}
            />
            <DarkInput
              type="textarea"
              placeholder="Tell about yourself"
              value={data.info[3].text}
              onChange={handleData}
              maxLength={600}
              rows={5}
            />
          </FormSection>

          <FormSection
            title="Contact"
            icon={
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            }
          >
            <DarkInput
              type="tel"
              placeholder="Phone Number"
              value={data.info[4].text}
              onChange={handleData}
            />
            <DarkInput
              type="email"
              placeholder="Email"
              value={data.info[5].text}
              onChange={handleData}
            />
            <DarkInput
              placeholder="Github Link"
              value={data.info[6].text}
              onChange={handleData}
            />
          </FormSection>

          <FormSection
            title="Education"
            icon={
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            }
          >
            {data.education.map((education, index) => (
              <div
                key={education.id}
                className="space-y-3 p-4 bg-slate-900/30 rounded-lg border border-slate-700/30"
              >
                {data.education.length > 1 && (
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-400">
                      Education {index + 1}
                    </span>
                    <button
                      onClick={() => removeEducation(education.id)}
                      className="w-7 h-7 bg-red-500/20 hover:bg-red-500 text-red-400 hover:text-white rounded-full transition-all duration-200"
                    >
                      ×
                    </button>
                  </div>
                )}
                <DarkInput
                  placeholder="University or School"
                  name="school"
                  value={education.school}
                  onChange={(e) => handleEducation(e, education.id)}
                  maxLength={50}
                />
                <DarkInput
                  placeholder="Degree"
                  name="degree"
                  value={education.degree}
                  onChange={(e) => handleEducation(e, education.id)}
                  maxLength={50}
                />
                <div className="grid grid-cols-2 gap-2">
                  <DarkInput
                    placeholder="City"
                    name="city"
                    value={education.city}
                    onChange={(e) => handleEducation(e, education.id)}
                    maxLength={50}
                  />
                  <DarkInput
                    placeholder="Nation"
                    name="nation"
                    value={education.nation}
                    onChange={(e) => handleEducation(e, education.id)}
                    maxLength={50}
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <DarkInput
                    placeholder="Start Date"
                    name="startEdu"
                    value={education.startEdu}
                    onChange={(e) => handleEducation(e, education.id)}
                    maxLength={50}
                  />
                  <DarkInput
                    placeholder="End Date"
                    name="endEdu"
                    value={education.endEdu}
                    onChange={(e) => handleEducation(e, education.id)}
                    maxLength={50}
                  />
                </div>
              </div>
            ))}
            <button
              onClick={addEducation}
              className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all duration-200 font-medium shadow-lg shadow-blue-500/20"
            >
              + Add Education
            </button>
          </FormSection>

          <FormSection
            title="Experience"
            icon={
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            }
          >
            {data.experience.map((experience, index) => (
              <div
                key={experience.id}
                className="space-y-3 p-4 bg-slate-900/30 rounded-lg border border-slate-700/30"
              >
                {data.experience.length > 1 && (
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-400">
                      Experience {index + 1}
                    </span>
                    <button
                      onClick={() => removeExp(experience.id)}
                      className="w-7 h-7 bg-red-500/20 hover:bg-red-500 text-red-400 hover:text-white rounded-full transition-all duration-200"
                    >
                      ×
                    </button>
                  </div>
                )}
                <DarkInput
                  placeholder="Position"
                  name="position"
                  value={experience.position}
                  onChange={(e) => handleExp(e, experience.id)}
                />
                <DarkInput
                  placeholder="Company"
                  name="company"
                  value={experience.company}
                  onChange={(e) => handleExp(e, experience.id)}
                />
                <DarkInput
                  type="textarea"
                  placeholder="Job Description"
                  name="jobDesc"
                  value={experience.jobDesc}
                  onChange={(e) => handleExp(e, experience.id)}
                  rows={4}
                />
                <div className="grid grid-cols-2 gap-2">
                  <DarkInput
                    placeholder="Start Date"
                    name="startDate"
                    value={experience.startDate}
                    onChange={(e) => handleExp(e, experience.id)}
                  />
                  <DarkInput
                    placeholder="End Date"
                    name="endDate"
                    value={experience.endDate}
                    onChange={(e) => handleExp(e, experience.id)}
                  />
                </div>
              </div>
            ))}
            <button
              onClick={addExp}
              className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all duration-200 font-medium shadow-lg shadow-blue-500/20"
            >
              + Add Experience
            </button>
          </FormSection>

          <FormSection
            title="Skills"
            icon={
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
            }
          >
            {data.skill.map((skill, index) => (
              <div key={skill.id} className="flex items-center space-x-2">
                <DarkInput
                  placeholder="Skill"
                  name="skill"
                  value={skill.skill}
                  onChange={(e) => handleSkill(e, skill.id)}
                  maxLength={15}
                />
                {data.skill.length > 1 && (
                  <button
                    onClick={() => removeSkill(skill.id)}
                    className="w-10 h-10 bg-red-500/20 hover:bg-red-500 text-red-400 hover:text-white rounded-lg transition-all duration-200 flex-shrink-0"
                  >
                    ×
                  </button>
                )}
              </div>
            ))}
            <button
              onClick={addSkill}
              className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all duration-200 font-medium shadow-lg shadow-blue-500/20"
            >
              + Add Skill
            </button>
          </FormSection>
        </div>

        {/* Preview Panel - 70% */}
        <div className="w-[70%] sticky top-24 h-fit">
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white mb-1">
                  CV Preview
                </h2>
                <p className="text-sm text-slate-400">
                  Real-time preview of your CV
                </p>
              </div>
              <div className="flex items-center space-x-2 text-slate-400 text-sm">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Auto-save enabled</span>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <CvPreview data={data} forwardedRef={componentRef} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden p-4 space-y-4 pb-20">
        {!isMobilePreview ? (
          <>
            <FormSection title="Personal Details">
              <div className="grid grid-cols-2 gap-3">
                <DarkInput
                  placeholder="First Name"
                  value={data.info[0].text}
                  onChange={handleData}
                  maxLength={15}
                />
                <DarkInput
                  placeholder="Last Name"
                  value={data.info[1].text}
                  onChange={handleData}
                  maxLength={15}
                />
              </div>
              <DarkInput
                placeholder="Title"
                value={data.info[2].text}
                onChange={handleData}
                maxLength={50}
              />
              <DarkInput
                type="textarea"
                placeholder="Tell about yourself"
                value={data.info[3].text}
                onChange={handleData}
                maxLength={600}
                rows={5}
              />
            </FormSection>

            <FormSection title="Contact">
              <DarkInput
                type="tel"
                placeholder="Phone Number"
                value={data.info[4].text}
                onChange={handleData}
              />
              <DarkInput
                type="email"
                placeholder="Email"
                value={data.info[5].text}
                onChange={handleData}
              />
              <DarkInput
                placeholder="Github Link"
                value={data.info[6].text}
                onChange={handleData}
              />
            </FormSection>

            <FormSection title="Education">
              {data.education.map((education, index) => (
                <div
                  key={education.id}
                  className="space-y-3 p-4 bg-slate-900/30 rounded-lg border border-slate-700/30"
                >
                  {data.education.length > 1 && (
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-slate-400">
                        Education {index + 1}
                      </span>
                      <button
                        onClick={() => removeEducation(education.id)}
                        className="w-7 h-7 bg-red-500/20 hover:bg-red-500 text-red-400 hover:text-white rounded-full transition-all duration-200"
                      >
                        ×
                      </button>
                    </div>
                  )}
                  <DarkInput
                    placeholder="University or School"
                    name="school"
                    value={education.school}
                    onChange={(e) => handleEducation(e, education.id)}
                    maxLength={50}
                  />
                  <DarkInput
                    placeholder="Degree"
                    name="degree"
                    value={education.degree}
                    onChange={(e) => handleEducation(e, education.id)}
                    maxLength={50}
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <DarkInput
                      placeholder="City"
                      name="city"
                      value={education.city}
                      onChange={(e) => handleEducation(e, education.id)}
                      maxLength={50}
                    />
                    <DarkInput
                      placeholder="Nation"
                      name="nation"
                      value={education.nation}
                      onChange={(e) => handleEducation(e, education.id)}
                      maxLength={50}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <DarkInput
                      placeholder="Start Date"
                      name="startEdu"
                      value={education.startEdu}
                      onChange={(e) => handleEducation(e, education.id)}
                      maxLength={50}
                    />
                    <DarkInput
                      placeholder="End Date"
                      name="endEdu"
                      value={education.endEdu}
                      onChange={(e) => handleEducation(e, education.id)}
                      maxLength={50}
                    />
                  </div>
                </div>
              ))}
              <button
                onClick={addEducation}
                className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all duration-200 font-medium"
              >
                + Add Education
              </button>
            </FormSection>

            <FormSection title="Experience">
              {data.experience.map((experience, index) => (
                <div
                  key={experience.id}
                  className="space-y-3 p-4 bg-slate-900/30 rounded-lg border border-slate-700/30"
                >
                  {data.experience.length > 1 && (
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-slate-400">
                        Experience {index + 1}
                      </span>
                      <button
                        onClick={() => removeExp(experience.id)}
                        className="w-7 h-7 bg-red-500/20 hover:bg-red-500 text-red-400 hover:text-white rounded-full transition-all duration-200"
                      >
                        ×
                      </button>
                    </div>
                  )}
                  <DarkInput
                    placeholder="Position"
                    name="position"
                    value={experience.position}
                    onChange={(e) => handleExp(e, experience.id)}
                  />
                  <DarkInput
                    placeholder="Company"
                    name="company"
                    value={experience.company}
                    onChange={(e) => handleExp(e, experience.id)}
                  />
                  <DarkInput
                    type="textarea"
                    placeholder="Job Description"
                    name="jobDesc"
                    value={experience.jobDesc}
                    onChange={(e) => handleExp(e, experience.id)}
                    rows={4}
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <DarkInput
                      placeholder="Start Date"
                      name="startDate"
                      value={experience.startDate}
                      onChange={(e) => handleExp(e, experience.id)}
                    />
                    <DarkInput
                      placeholder="End Date"
                      name="endDate"
                      value={experience.endDate}
                      onChange={(e) => handleExp(e, experience.id)}
                    />
                  </div>
                </div>
              ))}
              <button
                onClick={addExp}
                className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all duration-200 font-medium"
              >
                + Add Experience
              </button>
            </FormSection>

            <FormSection title="Skills">
              {data.skill.map((skill, index) => (
                <div key={skill.id} className="flex items-center space-x-2">
                  <DarkInput
                    placeholder="Skill"
                    name="skill"
                    value={skill.skill}
                    onChange={(e) => handleSkill(e, skill.id)}
                    maxLength={15}
                  />
                  {data.skill.length > 1 && (
                    <button
                      onClick={() => removeSkill(skill.id)}
                      className="w-10 h-10 bg-red-500/20 hover:bg-red-500 text-red-400 hover:text-white rounded-lg transition-all duration-200 flex-shrink-0"
                    >
                      ×
                    </button>
                  )}
                </div>
              ))}
              <button
                onClick={addSkill}
                className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all duration-200 font-medium"
              >
                + Add Skill
              </button>
            </FormSection>
          </>
        ) : (
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 p-4">
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-white mb-1">
                CV Preview
              </h2>
              <p className="text-sm text-slate-400">
                Preview your CV before downloading
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <CvPreview data={data} forwardedRef={componentRef} />
            </div>
          </div>
        )}

        {/* Mobile Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-lg border-t border-slate-700/50 px-4 py-3 shadow-2xl">
          <div className="flex justify-center space-x-3">
            <button
              onClick={() => setIsMobilePreview(false)}
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                !isMobilePreview
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              <span className="block text-sm">✏️ Edit</span>
            </button>
            <button
              onClick={() => setIsMobilePreview(true)}
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                isMobilePreview
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              <span className="block text-sm">👁️ Preview</span>
            </button>
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          body {
            background: white !important;
          }
          nav, .fixed, .sticky {
            display: none !important;
          }
          .bg-slate-800, .bg-slate-900 {
            display: none !important;
          }
        }
        
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: rgba(51, 65, 85, 0.3);
          border-radius: 10px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(71, 85, 105, 0.8);
          border-radius: 10px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgba(100, 116, 139, 1);
        }
      `}</style>
    </div>
  );
}

export default App;
