import { useState } from "react";
import "./App.css";
import Nav from "./nav.jsx";
import ContactForm from "./contactForm.jsx";
import EduForm from "./eduForm.jsx";
import ExpForm from "./experienceForm.jsx";

function App() {
  return (
    <>
      <Nav />
      <ContactForm />
      <EduForm />
      <ExpForm />
    </>
  );
}

export default App;
