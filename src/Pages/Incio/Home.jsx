import Particles from "./HomeDiv/ParticleBackground";
import NavbarHome from "./HomeDiv/components/navbar";
import AreaToolsSkills from "./Skills/areaToolsSkils";
import Projects from "./Portfolio/Projects";
import Presentations from "./Presentations/presentations";
import MeExperienceSection from "./Experience/MeExperienceSection";
import ContactMe from "./Contact/contactme"
import { ThemeContext } from "../Incio/Shared/ThemeContext";
import { useContext } from 'react';
function Home() {
    const { darkMode } = useContext(ThemeContext);
    return (
        <div className={`${darkMode ? 'bg-black text-white' : 'text-black bg-white'} h-ful`} id="Home">
            <header><NavbarHome /></header>
            <main>
                <section><Particles /></section>
                <section><AreaToolsSkills /></section>
                <section><Projects /></section>
                <section><MeExperienceSection /></section>
                <section><Presentations /></section>
                <section><ContactMe /></section>
            </main>
            <footer className={`h-10 w-full place-content-center place-items-center text-center text-xl py-10`}>
                <div>
                    Copyright © 2024 <a className="font-bold text-green-calid" href="#Home">Angelo Zurita</a>. All Rights Reserved.
                </div>
            </footer>
        </div>
    );
}

export default Home;


