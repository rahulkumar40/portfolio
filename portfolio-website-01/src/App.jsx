import { useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./page/About";
import Projects from "./page/Projects";
import Resume from "./page/Resume";
import Certifications from "./page/Certifications";
import Contact from "./page/Contact";
import NavBar from "./component/NavBar";
import Footer from "./page/Footer";
import { AppContext } from "./context/AppContext";
import DetailsPage from "./page/DetailsPage";
import CertificationCard from "./component/CertificationCard";
function App() {
  const { color } = useContext(AppContext);
  return (
    <div
      className={`${
        color
          ? `bg-gradient-to-r from-slate-500 to-slate-800`
          : `bg-gradient-to-r from-gray-200 to-stone-300`
      } h-screen w-screen  overflow-scroll static`}
    >
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<About />}></Route>
          <Route path="/project" element={<Projects />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
          <Route path="/certification" element={<Certifications />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/certification/:id" element={<CertificationCard />} />
        </Routes>
      </div>
      <div className=" ">
        <Footer />
      </div>
    </div>
  );
}

export default App;
