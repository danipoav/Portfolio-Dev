import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard"

export default function ProjectsContent() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 500)
  }, [])

  const projects = [
    {
      title: "Hotel Management Reservation",
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
      techStack: ["React", "TailwindCSS", "Redux", "TypeScript", "MySQL"],
    },
    {
      title: "Dashboard Management",
      description: "A full-featured admin dashboard for managing hotel operations. Includes user authentication, CRUD functionalities for bookings, users, and rooms, with real-time status indicators and a responsive interface.",
      video: "../../Dashboard.mp4",
      url: "http://hotel-db.s3-website.eu-west-3.amazonaws.com/",
      repo: "https://github.com/danipoav/DB-hotel",
      techStack: ["React", "TypeScript", "Redux Toolkit", "REST API", "Laravel (Backend)"],
    },
  ]

  return (
    <section id="projects" className={`scroll-mt-2 mb-25 transition-all duration-1000 delay-900 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
      <h1 className="uppercase border-b border-gray-500 pb-2 sticky top-0 py-4 bg-gray-900 text-gray-200 text-ls font-bold mb-8 md:hidden">Projects</h1>
      {projects.map((project, i) => (
        <ProjectCard key={i} {...project} />
      ))}
    </section>
  )
}
