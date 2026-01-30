import { useContext, useState, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./page/About";
import Projects from "./page/Projects";
import Resume from "./page/Resume";
// import Certifications from "./page/Certifications";
import Contact from "./page/Contact";
import NavBar from "./component/NavBar";
import Footer from "./page/Footer";
import { AppContext } from "./context/AppContext";
import SingleProject from "./component/SingleProject";
const Certifications = lazy(() => import("./page/Certifications"));
const CertificationCard = lazy(() => import("./component/CertificationCard"));
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
          {/* <Route path="/certification" element={<Certifications />}></Route> */}
          <Route path="/contact" element={<Contact />}></Route>
          {/* <Route path="/certification/:id" element={<CertificationCard />} /> */}
          <Route
            path="/single-project/:id"
            element={<SingleProject/> }
          />

          <Route
            path="/certification"
            element={
              <Suspense
                fallback={
                  <div className="h-screen w-screen overflow-auto m-[1rem] text-[2rem] text-orange-500 text-[1rem] font-bold ">
                    Loading...
                  </div>
                }
              >
                <Certifications />
              </Suspense>
            }
          />
          <Route
            path="/certification/:id"
            element={
              <Suspense
                fallback={
                  <div className="h-screen w-screen overflow-auto flex   text-orange-500 m-[1rem] text-[2rem] font-bold transition-alll">
                    Loading...
                  </div>
                }
              >
                <CertificationCard />
              </Suspense>
            }
          />
        </Routes>
      </div>
      <div className=" ">
        <Footer />
      </div>
    </div>
  );
}

export default App;
