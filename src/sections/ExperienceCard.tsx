import { GoLinkExternal } from "react-icons/go";

interface ExperienceProps {
    title: string,
    description: string,
    date: string,
    techStack: string[],
    link: string
}

export default function ExperienceCard({ title, techStack = [], date, description, link }: ExperienceProps) {
    return (
        <div className="mb-10 md:mb-0">
            <a href={link} target="_blank" className="md:flex hover:rounded-2xl hover:bg-gray-800 md:px-5 py-3 mb-10 cursor-pointer">
                <h2 className="text-gray-600 w-28 shrink-0 text-sm pt-1">{date}</h2>
                <div>
                    <h1 className=" text-white mb-3 text-lg flex gap-3">{title} <GoLinkExternal className="text-right w-auto h-auto" /></h1>
                    <p className=" text-gray-600 text-sm mb-3 text-justify">{description}</p>
                    <ul className="flex gap-1">
                        {techStack.map((tech, i) => (
                            <li key={i} className="rounded-2xl bg-blue-900 text-blue-300 text-xs py-2 px-3">{tech}</li>
                        ))}

                    </ul>
                </div>
            </a>
        </div>
    )
}
