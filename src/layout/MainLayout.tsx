import CursorLight from "../components/CursorLight";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";

export default function MainLayout() {
    return (
        <CursorLight>
            <div className=" flex h-screen">
                <div className=" w-1/2 fixed left-0 top-0 h-screen bg-gray-800 text-white p-6">
                    <LeftSide />
                </div>
                <div className=" w-1/2 ml-auto h-screen overflow-y-scroll p-6 bg-gray-800 text-white">
                    <RightSide />
                </div>
            </div>
        </CursorLight>
    )
}
