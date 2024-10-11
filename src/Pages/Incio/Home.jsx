import Particles from "./HomeDiv/ParticleBackground";
import NavbarHome from "./HomeDiv/components/navbar";
import AreaToolsSkills from "./Skills/areaToolsSkils";
import Projects from "./Portfolio/Projects";
import MeExperienceSection from "./Experience/MeExperienceSection";
import { ThemeContext } from "../Incio/Shared/ThemeContext";
import { useContext } from 'react';
function Home() {
    const { darkMode } = useContext(ThemeContext);
    return (
        <div className={`${darkMode ? 'bg-black text-white' : 'text-black bg-white'} h-ful`} id="Home">
            <header><NavbarHome /></header>
            <section><Particles /></section>
            <section><AreaToolsSkills /></section>
            <section><Projects /></section>
            <section><MeExperienceSection /></section>
            <footer className={`h-10 w-full`}>
                <div>
                    Copyright © 2022 <a className="font-bold text-green-calid" href="">Angelo Zurita</a>. All Rights Reserved.
                </div>
            </footer>
        </div>
    );
}

export default Home;


