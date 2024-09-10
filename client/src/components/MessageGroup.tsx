import { Message, User } from "@server/types";

export type MessageGroupProps = {
	messages: Message[];
	author: User;
};

/**
 * A group of messages.
 * @param image - The image of the user.
 */
function MessageGroup({ messages, author }: MessageGroupProps) {
	const { username: name } = author;
	const time = new Date(messages[0].createdAt);

	const image = author.image;
	return (
		<div className={"flex gap-3 mb-3"}>
			<img
				src={image}
				alt={"avatar"}
				className={"rounded-full select-none size-12 object-cover"}
			/>
			<div>
				<div className="flex gap-1.5 items-baseline">
					<span
						className={
							"text-white text-lg font-mplus1r font-medium"
						}
					>
						{name}
					</span>
					<span
						className={
							"text-select text-xs font-mplus1r font-medium"
						}
					>
						{time.toLocaleTimeString("ja-JP", {
							hour: "2-digit",
							minute: "2-digit",
						})}
					</span>
				</div>
				<div className={"text-white font-mplus1r text-base"}>
					{messages.map((message, index) => {
						return <p key={index}>{message.content}</p>;
					})}
				</div>
			</div>
		</div>
	);
}

export default MessageGroup;
