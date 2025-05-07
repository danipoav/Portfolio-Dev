import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

export default function LeftSide() {

    const [hovered, setHovered] = useState<number | null>(null);
    const [activeSection, setActiveSection] = useState("about");

    const icons = [
        { icon: <FaGithub />, name: "github" },
        { icon: <FaLinkedin />, name: "linkedin" },
        { icon: <FaInstagram />, name: "instagram" },
        { icon: <FaGoogle />, name: "google" },
    ];

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                })
            },
            { threshold: 0.6 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className=" pl-85 py-18 ">
            <h1 className=" text-6xl font-bold">Daniel Poveda</h1>

            <h2 className=" text-2xl pt-4 font-semibold">Full Stack Engineer</h2>

            <h3 className=" text-lg pt-3 text-gray-400 pr-50">I build accessible, pixel-perfect digital experiences for the web.</h3>

            <div className="py-18">
                <ul className="flex flex-col uppercase text-sm font-bold text-gray-400">
                    <li
                        onClick={() => scrollToSection('about')}
                        className="relative w-1/2 inline-block py-2 cursor-pointer hover:text-white transition-all duration-300 ease-in-out hover:translate-x-1">
                        <span
                            className={`after:content-[''] after:block after:h-[2px] after:bg-white after:transition-all after:duration-300 ${activeSection === 'about' ? 'text-white after:w-full translate-x-1' : 'after:w-0'}`}>
                            About
                        </span>
                    </li>
                    <li
                        onClick={() => scrollToSection('projects')}
                        className="relative w-1/2 inline-block py-2 cursor-pointer hover:text-white transition-all duration-300 ease-in-out hover:translate-x-1">
                        <span
                            className={`after:content-[''] after:block after:h-[2px] after:bg-white after:transition-all after:duration-300 ${activeSection === 'projects' ? 'text-white after:w-full translate-x-1' : 'after:w-0'}`}>
                            Projects
                        </span>
                    </li>
                    <li
                        onClick={() => scrollToSection('about')}
                        className="relative w-1/2 inline-block py-2 cursor-pointer hover:text-white transition-all duration-300 ease-in-out hover:translate-x-1">
                        <span
                            className={`after:content-[''] after:block after:h-[2px] after:bg-white after:transition-all after:duration-300 ${activeSection === 'experience' ? 'text-white after:w-full translate-x-1' : 'after:w-0'}`}>
                            Experience
                        </span>
                    </li>
                </ul>
            </div>


            <div className="mt-60 flex gap-4 text-3xl">
                {icons.map((item, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => setHovered(index)}
                        onMouseLeave={() => setHovered(null)}
                        className={`cursor-pointer transition-transform duration-300 ${hovered === index
                            ? "scale-125 text-white"
                            : hovered !== null
                                ? "scale-90"
                                : "scale-100"
                            }`}
                    >
                        {item.icon}
                    </div>
                ))}
            </div>
        </div>
    )
}
