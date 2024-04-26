import useMessages from "../hooks/useMessages.tsx";
import ChatInput from "./ChatInput.tsx";
import MessageGroup from "./MessageGroup.tsx";
import Moon from "./Moon.tsx";
export function Divider({ date = "今日" }: { date?: string }) {
	return (
		<div className={"my-6 relative"}>
			<hr className={"border-select m-0"} />
			<div
				className={
					"absolute -top-2 select-none text-select text-sm font-mplus1r w-fit px-4 left-1/2 -translate-x-1/2 bg-background font-medium text-center"
				}
			>
				{date}
			</div>
		</div>
	);
}

type MessageGroupProps = typeof MessageGroup extends (props: infer P) => unknown
	? P
	: never;

export default function ChatArea() {
	const messages = useMessages();

	return (
		<div
			className={
				"flex-1 border-l-2 border-black h-full bg-background flex flex-col"
			}
		>
			{/* Channel Name*/}
			<div
				className={
					"border-b-2 border-black flex items-center px-4 gap-4 basis-16 shrink-0"
				}
			>
				<Moon fill={"#50476A"} size={24} />
				<h2 className={"text-text font-mplus1 font-medium text-lg"}>
					作業
				</h2>
			</div>
			{/* Messages */}
			<div className={"flex-grow overflow-y-scroll p-4"}>
				{messages
					?.map((msg) => {
						return {
							messages: [msg],
							author: msg.author,
						} as MessageGroupProps;
					}) // Group messages by author
					.reduce((acc, curr) => {
						const lastMessage = acc[acc.length - 1];
						if (lastMessage?.author.id === curr.author.id) {
							lastMessage.messages.push(...curr.messages);
						} else {
							acc.push(curr);
						}
						return acc;
					}, [] as MessageGroupProps[])
					.map((message) => {
						console.log(message);
						return <MessageGroup {...message} />;
					})}
			</div>
			{/* Input */}
			<ChatInput />
		</div>
	);
}
