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
import { useReactToPrint } from "react-to-print";

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

  const loadSampleCV = (e) => {
    setData(CV);
  };

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: `${data.info[0]?.text || "Resume"}_CV`,
    pageStyle: `
      @page {
        size: A4;
        margin: 0.5in;
      }
      
      @media print {
        body {
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
          color-adjust: exact;
        }
        
        * {
          box-shadow: none !important;
          text-shadow: none !important;
        }
      }
    `,
    onBeforePrint: () => {
      console.log("Before printing...");
      return Promise.resolve();
    },
    onAfterPrint: () => {
      console.log("After printing...");
    },
    onPrintError: (error) => {
      console.error("Print error:", error);
    },
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <Nav
        loadSampleCV={loadSampleCV}
        handlePrint={handlePrint}
        isMobilePreview={isMobilePreview}
        setIsMobilePreview={setIsMobilePreview}
      />

      {/* Desktop Layout */}
      <div className="hidden lg:flex lg:gap-6 lg:p-6 lg:max-w-7xl lg:mx-auto">
        {/* Forms Panel */}
        <div className="lg:w-2/5 lg:space-y-4">
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
            <GeneralForm data={data} handleData={handleData} />
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
            <ContactForm data={data} handleData={handleData} />
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
            <EduForm
              data={data}
              addEducation={addEducation}
              removeEducation={removeEducation}
              handleEducation={handleEducation}
            />
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
            <ExpForm
              data={data}
              addExp={addExp}
              removeExp={removeExp}
              handleExp={handleExp}
            />
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
            <SkillForm
              data={data}
              addSkill={addSkill}
              removeSkill={removeSkill}
              handleSkill={handleSkill}
            />
          </div>
        </div>

        {/* Preview Panel */}
        <div className="lg:w-3/5 lg:sticky lg:top-6 lg:h-fit">
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-slate-800 mb-2">
                CV Preview
              </h2>
              <p className="text-sm text-slate-600">
                Preview your CV before printing or downloading
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <CvPreview data={data} ref={componentRef} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Layout */}
      <div className="lg:hidden">
        {!isMobilePreview ? (
          /* Forms View */
          <div className="p-4 space-y-4 pb-20">
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4">
              <GeneralForm data={data} handleData={handleData} />
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4">
              <ContactForm data={data} handleData={handleData} />
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4">
              <EduForm
                data={data}
                addEducation={addEducation}
                removeEducation={removeEducation}
                handleEducation={handleEducation}
              />
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4">
              <ExpForm
                data={data}
                addExp={addExp}
                removeExp={removeExp}
                handleExp={handleExp}
              />
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4">
              <SkillForm
                data={data}
                addSkill={addSkill}
                removeSkill={removeSkill}
                handleSkill={handleSkill}
              />
            </div>
          </div>
        ) : (
          /* Preview View */
          <div className="p-4 pb-20">
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4">
              <div className="mb-4">
                <h2 className="text-lg font-semibold text-slate-800 mb-2">
                  CV Preview
                </h2>
                <p className="text-sm text-slate-600">
                  Preview your CV before printing or downloading
                </p>
              </div>
              <div className="border border-slate-200 rounded-lg overflow-hidden">
                <CvPreview data={data} ref={componentRef} />
              </div>
            </div>
          </div>
        )}

        {/* Mobile Navigation Tabs */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-4 py-3 shadow-lg">
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setIsMobilePreview(false)}
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                !isMobilePreview
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              <span className="block text-sm">Edit CV</span>
            </button>
            <button
              onClick={() => setIsMobilePreview(true)}
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                isMobilePreview
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              <span className="block text-sm">Preview</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
