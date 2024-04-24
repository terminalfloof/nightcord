import {IconAt, IconFileFilled, IconMoodSmileFilled} from "@tabler/icons-react";

export default function ChatInput() {
    return <div className={"rounded-lg mx-4 mb-3 bg-chat flex items-end px-3 py-2 gap-3 font-mplus"}>
        <textarea placeholder={"メッセージを送信"}
                  onChange={(e) => {
                      e.target.style.height = "auto";
                      // clamp to 6 rows
                      e.target.style.height = Math.min(e.target.scrollHeight, 6 * 24) + "px";
                  }}
                  rows={1}
                  className={"bg-transparent align-middle resize-none text-text placeholder:text-select flex-1 border-none outline-none"}/>
        <IconAt className={"stroke-select"}/>
        <span className={"select-none text-select"}>Aa</span>
        <IconMoodSmileFilled className={"fill-select stroke-2"}/>
        <IconFileFilled className={"fill-select stroke-2"}/>
    </div>;
}