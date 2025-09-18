import { useState } from "react";
import "./App.css";
import Nav from "./nav.jsx";
import GeneralForm from "./generalForm.jsx";
import EduForm from "./eduForm.jsx";
import ExpForm from "./experienceForm.jsx";
import CvPreview from "./cv-preview.jsx";
import { v4 as uuidv4 } from "uuid";

function App() {
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
        jobDesk: "",
        startDate: "",
        endDate: "",
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
          jobDesk: "",
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

  return (
    <>
      <Nav />
      <div className="flex gap-2">
        <div className="flex flex-col gap-2 p-1">
          <GeneralForm data={data} handleData={handleData} />
          <EduForm
            data={data}
            addEducation={addEducation}
            removeEducation={removeEducation}
            handleEducation={handleEducation}
          />
          <ExpForm
            data={data}
            addExp={addExp}
            removeExp={removeExp}
            handleExp={handleExp}
          />
        </div>
        <div className="flex-1">
          <CvPreview data={data} />
        </div>
      </div>
    </>
  );
}

export default App;
