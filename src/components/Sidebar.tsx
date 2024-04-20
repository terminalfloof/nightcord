import {IconCameraOff, IconChevronDown, IconCircleHalf, IconMicrophone} from "@tabler/icons-react";
import Moon from "./Moon.tsx";

function Sidebar() {
    return (
        <div className={"w-80 bg-chat flex flex-col h-full"}>
            {/* Channel Name */}
            <div className={"h-16 border-b-2 border-black flex justify-between items-center p-4"}>
                <h2 className={"font-mplus text-white text-xl font-medium tracking-tight"}>25 時、ナイトコードで。</h2>
                <IconChevronDown color={"white"}/>
            </div>

            {/* Bottom Tab */}
            <div className={"h-16 mt-auto gap-3 items-center px-4 bg-background flex border-t-2 border-black"}>
                <div className={"size-10 bg-[#BB6588] rounded-full grid place-items-center"}>
                    <Moon size={24} fill={"#BB6588"}/>
                </div>
                <span className={"text-text font-bold"}>K</span>
                <IconCameraOff className={"stroke-text ml-auto"}/>
                <IconMicrophone className={"stroke-text"}/>
                <IconCircleHalf className={"stroke-text"}/>
            </div>
        </div>
    );
}

export default Sidebar;