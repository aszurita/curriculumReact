import { ThemeContext } from "../Shared/ThemeContext";
import { useContext } from 'react';
import "./presentations.css";

function Presentations() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <div className={`pt-2 ${darkMode ? "bg-black" : "bg-white"} }`}>
      <h2 className="font-roboto-slab font-bold pb-10 text-3xl sm:text-5xl select-none text-center pt-20">Presentations</h2>
      <div className="div_talk">
        <div className="video_div">
          <video width="500" height="400" controls="yes">
            <source src="./assets/videos/IA.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="div_info font-roboto-slab max-sm:text-center">
          <h2 className="!text-xl font-bold py-2 font-roboto-slab">Boost Your Learning with Artificial Intelligence</h2>
          <div className="flex flex-col text-base gap-5">
            <p>
              In this talk, I explored the power of Artificial Intelligence in transforming the learning experience. I started by explaining how AI tools can be used to enhance both the efficiency and effectiveness of personal study routines. A key focus was on creating tailored learning paths, helping learners set clear goals and break them down into manageable steps, using AI-driven systems.
            </p>
            <p>
              Furthermore, I discussed the various AI platforms available and how each can be optimized for specific tasks, highlighting the strengths and use cases of each tool. By incorporating real-world examples, I showed how to use AI prompts to streamline the process of learning complex topics, such as programming. Finally, the talk emphasized the adaptabilityof AI in addressing individual learning needs, making it possible to personalize educational experiences based on the learner's unique goals and preferences
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Presentations;