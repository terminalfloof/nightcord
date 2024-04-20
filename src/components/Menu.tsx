import {
    IconAt,
    IconChevronsUp,
    IconCircleCheck,
    IconHelpCircle,
    IconHome,
    IconMail,
    IconSearch,
    IconSend, IconSettings
} from "@tabler/icons-react";

function Menu() {
    return (
        <div className="flex flex-col w-16 bg-sidebar items-center py-6 gap-4">
            <IconHome className={"stroke-white"} size={32} stroke={2}/>
            <IconSearch className={"stroke-white"} size={32} stroke={2}/>
            <IconSend className={"stroke-white"} size={32} stroke={2}/>
            <IconAt className={"stroke-white"} size={32} stroke={2}/>
            <IconMail className={"stroke-white"} size={32} stroke={2}/>
            <IconChevronsUp className={"stroke-white"} size={32} stroke={2}/>
            <IconCircleCheck className={"stroke-white"} size={32} stroke={2}/>
            <IconHelpCircle className={"stroke-white"} size={32} stroke={2}/>
            <IconSettings className={"stroke-white"} size={32} stroke={2}/>
        </div>
    );
}

export default Menu;