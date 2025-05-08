import ProjectCard from "./ProjectCard"

export default function ProjectsContent() {

  const projects = [
    {
      title: "Hotel Dashboard",
      description: "A full-featured dashboard with CRUD operations for bookings and rooms.",
      video: "../../Hotel.mp4",
      url: "https://your-live-link.com",
      repo: "https://github.com/yourrepo",
      techStack: ["React", "TypeScript", "Redux", "Node.js"],
    },
    {
      title: "Subs App",
      description: "Modern e-commerce front-end with shopping cart and Stripe integration.",
      video: "../../Subs.mp4",
      repo: "https://github.com/yourecommerce",
      techStack: ["React", "Tailwind", "Firebase"],
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio site with animated transitions and responsive layout.",
      video: "../../Subs-2.mp4",
      url: "https://yourportfolio.com",
      techStack: ["React", "TailwindCSS"],
    },
  ]

  return (
    <section id="projects" className=" mb-500">
      {projects.map((project, i) => (
        <ProjectCard key={i} {...project} />
      ))}
    </section>
  )
}
