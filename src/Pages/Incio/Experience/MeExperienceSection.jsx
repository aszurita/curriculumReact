import Profile from "./Profile";
import Experience from "./Experience";
import { profile } from "../../../data/Profile";
import { ThemeContext } from "../Shared/ThemeContext.jsx";
import { useContext } from 'react';
function MeExperienceSection() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <div id="experience" className={`pt-2 ${darkMode ? "bg-black" : "bg-white"} }`}>
      <h2 className="font-roboto-slab font-bold pb-10 text-3xl sm:text-5xl select-none text-center pt-20 ">Experience</h2>
      <div className="flex w-full flex-wrap place-content-center ">
        <div className="w-1/3 min-w-[325px]">
          <Profile />
        </div>
        <div className="w-2/3">
          <div className="w-full">
            <p className="text-2xl font-roboto-slab font-bold select-none sm:mt-0 mt-5">Experiences</p>
          </div>
          {
            profile.experiences && profile.experiences.map((experience, index) => (
              <Experience key={index} experience={experience} />
            ))
          }
        </div>
      </div>
    </div>

  )
}
export default MeExperienceSection;