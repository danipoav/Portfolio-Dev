import CursorLight from "../components/CursorLight";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";

export default function MainLayout() {
    return (
        <CursorLight>
            <div className=" flex h-screen ">
                <div className=" w-1/2 fixed left-0 top-0 h-screen bg-gray-800 text-white p-6">
                <div className=" fixed bottom-0 left-20 border border-gray-400 h-25 hover:border-white hover:scale-120 transition-transform duration-300"></div>
                    <LeftSide />
                </div>
                <div className=" w-1/2 ml-auto h-screen overflow-y-scroll p-6 bg-gray-800 text-white">
                <div className=" fixed bottom-0 right-20 border border-gray-400 h-25 hover:border-white hover:scale-120 transition-transform duration-300"></div>
                    <RightSide />
                </div>
            </div>
        </CursorLight>
    )
}
