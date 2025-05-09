import { useEffect, useState } from "react";
import CursorLight from "../components/CursorLight";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";

export default function MainLayout() {
    const [loading, setLoading] = useState(true);
    const [animateOut, setAnimateOut] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const enterTimer = setTimeout(() => setMounted(true), 100);
        const exitTimer = setTimeout(() => setAnimateOut(true), 1800);
        const endTimer = setTimeout(() => setLoading(false), 2800);

        return () => {
            clearTimeout(enterTimer);
            clearTimeout(exitTimer);
            clearTimeout(endTimer);
        };
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-900 relative overflow-hidden transition-colors duration-1000">
                <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-white transition-all duration-700 ${mounted ? "h-20" : "h-0"} ${animateOut ? "opacity-0 -translate-y-20" : "opacity-100"}`} />
                <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-white transition-all duration-700 delay-100 ${mounted ? "h-20" : "h-0"} ${animateOut ? "opacity-0 translate-y-20" : "opacity-100"}`} />
                <div className={`absolute left-0 top-1/2 transform -translate-y-1/2 h-1 bg-white transition-all duration-700 delay-200 ${mounted ? "w-20" : "w-0"} ${animateOut ? "opacity-0 -translate-x-20" : "opacity-100"}`} />
                <div className={`absolute right-0 top-1/2 transform -translate-y-1/2 h-1 bg-white transition-all duration-700 delay-300 ${mounted ? "w-20" : "w-0"} ${animateOut ? "opacity-0 translate-x-20" : "opacity-100"}`} />

                <div className={`relative w-32 h-32 flex items-center justify-center transition-all duration-1000 ${animateOut ? "rotate-[60deg] opacity-0 scale-125" : "rotate-0 opacity-100 scale-100"}`}>
                    <div className={`absolute top-0 left-0 h-[2px] bg-white origin-left transition-all duration-700 delay-100 ${mounted ? "w-full" : "w-0"}`} />
                    <div className={`absolute bottom-0 left-0 h-[2px] bg-white origin-right transition-all duration-700 delay-200 ${mounted ? "w-full" : "w-0"}`} />
                    <div className={`absolute top-0 left-0 w-[2px] bg-white origin-top transition-all duration-700 delay-300 ${mounted ? "h-full" : "h-0"}`} />
                    <div className={`absolute top-0 right-0 w-[2px] bg-white origin-bottom transition-all duration-700 delay-400 ${mounted ? "h-full" : "h-0"}`} />

                    <h1 className={`text-white text-6xl font-bold tracking-wider transition-opacity duration-700 delay-500 ${mounted ? "opacity-100" : "opacity-0"}`}>
                        D
                    </h1>
                </div>
            </div>
        );
    }

    return (
        <CursorLight>
            <div className="flex h-screen">
                <div className="w-1/2 fixed left-0 top-0 h-screen bg-gray-800 text-white p-6">
                    <div className="fixed bottom-0 left-20 border border-white h-25" />
                    <LeftSide />
                </div>
                <div className="w-1/2 ml-auto h-screen overflow-y-scroll p-6 bg-gray-800 text-white">
                    <div className="fixed bottom-0 right-20 border border-white h-25" />
                    <RightSide />
                </div>
            </div>
        </CursorLight>
    );
}
