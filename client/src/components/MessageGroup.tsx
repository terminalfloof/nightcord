import { useQuery } from "@tanstack/react-query";
import { Message, User } from "../utils/types";
import { trpc } from "../utils/trpc";
import { useEffect, useState } from "react";

export type MessageGroupProps = {
	messages: Message[];
	authorId: string;
};

/**
 * A group of messages.
 * @param image - The image of the user.
 */
function MessageGroup({ messages, authorId }: MessageGroupProps) {
	const { data, isPending, isError } = useQuery(trpc.user.get.queryOptions(authorId));

	const [author, setAuthor] = useState<User>()

	useEffect(() => {
		if (!isError && !isPending) setAuthor(data);
	}, [isError, isPending])

	// todo: fix this soon LMAO
	if (!messages[0]) return;
	if (!author) return;

	const time = new Date(messages[0].createdAt);

	const image = author.image;
	return (
		<div className={"flex gap-3 mb-3"}>
			<img
				src={
					image ||
					`https://api.dicebear.com/10.x/icons/svg?scale=&seed=${author.id}`
				}
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
						{author.username}
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
						if (message) return <p key={index}>{message.content}</p>;
					})}
				</div>
			</div>
		</div>
	);
}

export default MessageGroup;
