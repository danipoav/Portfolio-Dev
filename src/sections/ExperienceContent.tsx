import ExperienceCard from './ExperienceCard'

export default function ExperienceContent() {

    const experience = [
        {
            title: "Diputació de Barcelona - Road Section",
            description: "During my stay in DIBA i participated in the design and development of institutional websites, focusing on HTML, CSS and TypeScript layout structuring, Gained hands-on experience working within a public sector environment, collaborating with professionals and following accessibility and usability guidelines and improved front-end development skills and understanding of web standards in real-world projects",
            date: "2022-2023",
            techStack: ["HTML", "Tailwind CSS", "TypeScript", "MySQL"],
            link: "https://www.diba.cat/es/"
        },
        {
            title: "Oxygen Workspace",
            description: "At OxygenShop, I worked as a Full Stack Intern, contributing to both front-end and back-end development. I helped build responsive interfaces and supported API integration, gaining hands-on experience with real-world web applications and modern development practices.",
            date: "2024-2025",
            techStack: ["PHP", "React", "NODE.js", "MongoDB", "Laravel"],
            link: "https://oxygenworkspace.com/"
        }
    ]

    return (
        <section id='experience' className='scroll-mt-10 mb-15 md:mb-20'>
            <h1 className="sticky top-0 z-10 bg-gray-900 border-b border-gray-500 py-4 pb-2 uppercase text-gray-200 text-ls font-bold mb-10 md:hidden">Experience</h1>
            {experience.map((exp, i) => (
                <ExperienceCard key={i} {...exp} />
            ))}
        </section>
    )
}
