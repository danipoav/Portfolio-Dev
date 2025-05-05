import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";






export default function LeftSide() {
    return (
        <div className=" pl-85 py-18 ">
            <h1 className=" text-6xl font-bold">Daniel Poveda</h1>

            <h2 className=" text-2xl pt-4 font-semibold">Full Stack Engineer</h2>

            <h3 className=" text-lg pt-3 text-gray-400 pr-50">I build accessible, pixel-perfect digital experiences for the web.</h3>

            <div className="py-18">
                <ul className="flex flex-col uppercase text-sm font-bold text-gray-400">
                    <li className="relative inline-block py-2 cursor-pointer hover:text-white transition-all duration-300 ease-in-out hover:translate-x-1">
                        <span className="after:content-[''] after:block after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">About</span>

                    </li>
                    <li className="relative inline-block py-2 cursor-pointer hover:text-white transition-all duration-300 ease-in-out hover:translate-x-1">
                        <span className="after:content-[''] after:block after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Experience</span>

                    </li>
                    <li className="relative inline-block py-2 cursor-pointer hover:text-white transition-all duration-300 ease-in-out hover:translate-x-1">
                        <span className="after:content-[''] after:block after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Projects</span>

                    </li>
                </ul>
            </div>


            <div className="mt-60 flex gap-4 text-3xl">
                <FaGithub className=" cursor-pointer" />
                <FaLinkedin className=" cursor-pointer" />
                <FaInstagram className=" cursor-pointer" />
                <FaGoogle className=" cursor-pointer" />
            </div>
        </div>
    )
}
