import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";
import { ThemeContext } from "../../Shared/ThemeContext";
import { useContext } from 'react';

function SocialMedia({ type }) {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const size_icon =  30;
  const string_className = `rounded-full flex place-content-center place-items-center h-12 w-12 max-sm:h-10 max-sm:w-10 ${darkMode ? "bg-white" : "bg-black"} z-20  hover:bg-[#69B3A2] `;

  // Determina el enlace y el ícono basado en el tipo recibido
  const getIconAndLink = () => {
    switch (type) {
      case 'github':
        return { icon: <FaGithub size={size_icon} color={`${darkMode ? "black" : "white"}`} />, link: "https://github.com/aszurita" };
      case 'linkedin':
        return { icon: <FaLinkedinIn size={size_icon} color={`${darkMode ? "black" : "white"}`} />, link: "https://www.linkedin.com/in/angelo-saul-zurita-guerrero/" };
      case 'X':
        return { icon: <BsTwitterX size={size_icon} color={`${darkMode ? "black" : "white"}`} />, link: "https://twitter.com/aszurita" };
      default:
        return { icon: null, link: "#" };
    }
  };

  const { icon, link } = getIconAndLink();

  return (
    <div className={string_className}>
      <a href={link} target="_blank">
        {icon}
      </a>
    </div>
  );
}

export default SocialMedia;
