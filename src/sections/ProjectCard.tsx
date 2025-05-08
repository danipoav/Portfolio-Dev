
interface ProjectProps {
    title: string;
    description: string;
    image?: string;
    video?: string;
    url?: string;
    repo?: string;
    techStack?: string[];
}

export default function ProjectCard({
    title,
    description,
    image,
    video,
    url,
    repo,
    techStack = []
}: ProjectProps) {
    return (
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 duration-300">
            {video ? (
                <video
                    src={video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                />
            ) : (
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            )}

            <div className="p-4 text-gray-300">
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-sm mb-4">{description}</p>

                {techStack.length > 0 && (
                    <ul className="flex flex-wrap gap-2 text-xs text-gray-400 mb-4">
                        {techStack.map((tech, idx) => (
                            <li key={idx} className="bg-gray-700 px-2 py-1 rounded">
                                {tech}
                            </li>
                        ))}
                    </ul>
                )}

                <div className="flex gap-4">
                    {url && (
                        <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                            Live Demo
                        </a>
                    )}
                    {repo && (
                        <a href={repo} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                            GitHub
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}
