import { useEffect, useState } from "react"

export default function CursorLight({ children }: { children: React.ReactNode }) {

  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [])

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        className="pointer-events-none fixed top-0 left-0 w-full h-full z-50"
        style={{
          background: `radial-gradient(150px at ${position.x}px ${position.y}px, rgba(255,255,255,0.05), rgba(0,0,0,0.9))`,
          mixBlendMode: "soft-light",
        }}
      />
      {children}
    </div>
  )
}
