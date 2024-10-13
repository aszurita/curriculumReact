import { projects } from "../../../data/Projects.js";
import Project from "./Project.jsx";
import { ThemeContext } from "../Shared/ThemeContext.jsx";
import { useContext } from 'react';
function Projects() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <div className={`flex flex-col place-content-center place-items-center text-center pt-10 ${darkMode ? "bg-black" : "bg-white"}`} id="portfolio">
      <h2 className="font-roboto-slab font-bold py-10 text-3xl sm:text-5xl select-none text-center">Portfolio</h2>
      <div className="flex flex-wrap place-content-center gap-10">
        {
          projects && projects.map((project, index) => (
            <Project key={index} project={project} />
          ))
        }
      </div>
    </div>
  )
}
export default Projects;