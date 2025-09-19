import "./App.css";
import { v4 as uuidv4 } from "uuid";

const CV = {
  info: [
    {
      name: "First Name",
      text: "John",
    },
    {
      name: "Last Name",
      text: "Doe",
    },
    {
      name: "Title",
      text: "React Developer",
    },
    {
      name: "Tell about yourself",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae ducimus vero nulla aspernatur vel similique, illo nemo minus, quis illum cumque repellendus nam perferendis quod voluptatem, doloremque eum sunt.",
    },
    {
      name: "Phone Number",
      text: "123812381",
    },
    {
      name: "Email",
      text: "example@gmail.com",
    },
    {
      name: "Github Link",
      text: "github.com",
    },
  ],
  education: [
    {
      id: uuidv4(),
      school: "University of",
      degree: "Computer Science",
      city: "City",
      nation: "Nation",
      startEdu: "07/22",
      endEdu: "07/26",
    },
  ],
  experience: [
    {
      id: uuidv4(),
      position: "Full Stack Developer",
      company: "Big Tech Company",
      jobDesc:
        "- Doing This - Doing That - Doing something big - Doing something usual",
      startDate: "01/24",
      endDate: "02/24",
    },
  ],
  skill: [
    {
      id: uuidv4(),
      skill: "Javascript",
    },
    {
      id: uuidv4(),
      skill: "React",
    },
    {
      id: uuidv4(),
      skill: "CSS",
    },
    {
      id: uuidv4(),
      skill: "Webpack",
    },
    {
      id: uuidv4(),
      skill: "Sass",
    },
  ],
};

export default CV;
