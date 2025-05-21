import AboutContent from "../sections/AboutContent";
import ExperienceContent from "../sections/ExperienceContent";
import ProjectsContent from "../sections/ProjectsContent";

export default function RightSide() {
  return (
    <div className="pt-10 px-6 md:pt-18 md:pr-85">
      <AboutContent />
      <ProjectsContent />
      <ExperienceContent />
      <p className="text-xs text-justify pr-50 text-gray-500">Coded using <a className="text-gray-400 hover:text-blue-700" href="https://code.visualstudio.com/">Visual Studio Code</a> , built using <a className="text-gray-400 hover:text-blue-700" href="https://es.react.dev/">React</a> and <a className="text-gray-400 hover:text-blue-700" href="https://tailwindcss.com/">Tailwind CSS</a> , deployed using <a className="text-gray-400 hover:text-blue-700" href="https://aws.amazon.com/es/iam/">AWS EC2</a>. Created by <a className="text-gray-400 hover:text-blue-700" href="https://github.com/danipoav" target="_blank">Daniel Poveda Aveiga</a></p>
    </div>
  )
}
