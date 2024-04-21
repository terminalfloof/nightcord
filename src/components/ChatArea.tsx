import ChatInput from "./ChatInput.tsx";
import MessageGroup from "./MessageGroup.tsx";
import rui from "../assets/rui.png"
import sillies from "../assets/sillies.jpg"
import Moon from "./Moon.tsx";

export function Divider({date = "今日"}: {date?: string}) {
    return <div className={"my-6 relative"}>
        <hr className={"border-select m-0"}/>
        <div className={"absolute -top-2 select-none text-select text-sm font-mplus1r w-fit px-4 left-1/2 -translate-x-1/2 bg-background font-medium text-center"}>
            {date}
        </div>
    </div>
}

export default function ChatArea() {
    return (
        <div className={"flex-1 border-l-2 border-black h-full bg-background flex flex-col"}>
            {/* Channel Name*/}
            <div className={"border-b-2 border-black flex items-center px-4 gap-4 basis-16 shrink-0"}>
                <Moon fill={"#50476A"} size={24}/>
                <h2 className={"text-text font-mplus1 font-medium text-lg"}>作業</h2>
            </div>
            {/* Messages */}
            <div className={"flex-grow overflow-y-scroll mx-3 p-2"}>
                <MessageGroup image={rui} name={"floof"} time={new Date("4/18/2024 16:24")} messages={[":3"]}/>
                <MessageGroup image={sillies} name={"loaf"} time={new Date("4/18/2024 16:25")} messages={[":3"]}/>
                <Divider />
                <MessageGroup image={rui} name={"floof"} time={new Date()} messages={[":3"]}/>
                <MessageGroup image={rui} name={"floof"} time={new Date()} messages={[":3"]}/>
                <MessageGroup image={rui} name={"floof"} time={new Date()} messages={[":3"]}/>
                <MessageGroup image={rui} name={"floof"} time={new Date()} messages={[":3"]}/>
                <MessageGroup image={rui} name={"floof"} time={new Date()} messages={[":3"]}/>
                <MessageGroup image={rui} name={"floof"} time={new Date()} messages={[":3"]}/>
                <MessageGroup image={rui} name={"floof"} time={new Date()} messages={[":3"]}/>
                <MessageGroup image={rui} name={"floof"} time={new Date()} messages={[":3"]}/>
                <MessageGroup image={sillies} name={"loaf"} time={new Date("4/18/2024 16:25")} messages={[":3"]}/>
            </div>
            {/* Input */}
            <ChatInput/>
        </div>
    );
};