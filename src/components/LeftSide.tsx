
export default function LeftSide() {
    return (
        <div className=" pl-85 py-18 ">
            <h1 className=" text-6xl font-bold">Daniel Poveda</h1>

            <h2 className=" text-2xl pt-4 font-semibold">Full Stack Engineer</h2>

            <h3 className=" text-lg pt-3 text-gray-400 pr-50">I build accessible, pixel-perfect digital experiences for the web.</h3>

            <div className=" py-18">

                <ul className="flex flex-col uppercase text-sm font-bold text-gray-400 w-200">
                    <li className="inline-block  py-2 hover:text-white cursor-pointer w-auto">About</li>
                    <li className="inline-block  py-2 hover:text-white cursor-pointer w-auto">Experience</li>
                    <li className="inline-block py-2 hover:text-white cursor-pointer w-auto">Projects</li>
                </ul>

            </div>
        </div>
    )
}
