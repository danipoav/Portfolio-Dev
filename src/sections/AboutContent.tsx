import { useEffect, useState } from "react";

export default function AboutContent() {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 500)
    }, [])


    return (
        <section id="about" className="scroll-mt-24">
            <h1 className={`sticky top-0 z-10 uppercase py-4 bg-gray-900 border-b pb-2 border-gray-500 text-gray-200 text-ls font-bold mb-5 md:hidden transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>About</h1>
            <h1 className={`text-gray-400 text-justify mb-4 flex text-sm md:text-basem transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                <div>
                    I'm a <span className="text-white hover:text-blue-200">passionate</span> and <span className="text-white">dedicated</span> web developer who thrives on turning ideas into engaging, user-friendly digital experiences. With a strong sense of curiosity and a deep commitment to learning, I’ve spent the last few years honing my craft by building and refining a variety of projects from personal experiments to collaborative products.
                </div>
            </h1>
            <h1 className={`text-gray-400 text-justify mb-4 text-sm md:text-base transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                What drives me most is the opportunity to create <span className="text-white">meaningful</span> and <span className="text-white">intuitive</span> experiences for users. Whether it's a simple landing page or a complex interactive application, I take pride in building products that are not only functional but also thoughtfully designed. I believe that great development is not just about clean code, but also about understanding people — how they interact, how they think, and how technology can simplify their lives.
            </h1>
            <h1 className={`text-gray-400 text-justify mb-4 text-sm md:text-base transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                Throughout my journey, I have grown into someone who values both <span className="text-white">detail</span> and <span className="text-white">big-picture thinking</span>. I enjoy working independently just as much as being part of a team, where exchanging ideas and solving problems together often leads to better results.
            </h1>
            <h1 className={`text-gray-400 text-justify mb-17 md:mb-38 text-sm md:text-base transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                My goal is always the same: to contribute to projects that <span className="text-white">inspire</span>, <span className="text-white">challenge</span>, and have a <span className="text-white">positive impact</span>.
                I'm always exploring <span className="text-white">new ideas</span>, seeking <span className="text-white">opportunities to grow</span>, and striving to deliver high-quality work that reflects both my skills and my <span className="text-white">dedication</span>. This portfolio is a reflection of my journey as a developer — and I'm excited about what lies ahead.
            </h1>
        </section>
    )
}
