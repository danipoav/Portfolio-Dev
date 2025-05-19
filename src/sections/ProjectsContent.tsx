import ProjectCard from "./ProjectCard"

export default function ProjectsContent() {

  const projects = [
    {
      title: "Hotel Management Dashboard",
      description: "A full-stack hotel management system built with Laravel, featuring CRUD operations for bookings, rooms, and users, with authentication and role-based access control.",
      video: "../../Hotel.mp4",
      url: "http://13.37.222.106/",
      repo: "https://github.com/danipoav/Laravel-Hotel",
      techStack: ["Laravel", "PHP", "MySQL", "Blade", "Bootstrap"],
    },
    {
      title: "Subs App",
      description: "A web application that allows users to track and manage their recurring subscriptions. Includes features like adding services, setting renewal dates, viewing costs, and deleting or editing entries.",
      video: "../../Subs.mp4",
      url: "http://subs-page.s3-website.eu-west-3.amazonaws.com/",
      repo: "https://github.com/danipoav/Subs-app",
      techStack: ["React", "Tailwind", "Redux", "TypeScript", "MySQL"],
    },
    {
      title: "Hotel Management Dashboard",
      description: "A full-featured admin dashboard for managing hotel operations. Includes user authentication, CRUD functionalities for bookings, users, and rooms, with real-time status indicators and a responsive interface.",
      video: "../../Subs-2.mp4",
      url: "http://hotel-db.s3-website.eu-west-3.amazonaws.com/",
      repo: "https://github.com/danipoav/DB-hotel",
      techStack: ["React", "TypeScript", "Redux Toolkit", "TailwindCSS", "REST API", "Laravel (Backend)"],
    },
  ]

  return (
    <section id="projects" className="scroll-mt-10 mb-30">
      {projects.map((project, i) => (
        <ProjectCard key={i} {...project} />
      ))}
    </section>
  )
}
