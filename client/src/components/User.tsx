import {
	IconCameraOff,
	IconMicrophone,
	IconCircleHalf,
} from "@tabler/icons-react";
import { Button, Flex, Popover, TextField } from "@radix-ui/themes";
import { User } from "@server/types";
import { FormEvent, useEffect, useState, useRef } from "react";
import useSocket from "../hooks/useSocket";
import K from "../assets/K.png";

export default function UserComponent() {
	const { id } = useSocket();
	const [user, setUser] = useState<User>({
		id: "0",
		username: "K",
		image: "",
	});

	useEffect(() => {
		setUser({ ...user, id: id || "" });
	}, [id]);

	function onCapture(isOpen: boolean) {
		if (isOpen) return;
		if (!usernameRef.current || !avatarRef.current) return;
		const username = usernameRef.current.value;
		const avatar = avatarRef.current.value;
		if (!username && !avatar) return;
		setUser({
			...user,
			username: username || user.username,
			image: avatar || user.image,
		});
	}

	const usernameRef = useRef<HTMLInputElement>(null);
	const avatarRef = useRef<HTMLInputElement>(null);

	return (
		<Popover.Root onOpenChange={onCapture}>
			<Popover.Trigger>
				<div
					className={
						"h-16 mt-auto gap-3 items-center px-4 bg-background flex border-t-2 border-black transition-opacity duration-100 ease-out hover:opacity-50"
					}
				>
					<img
						className={"size-10 bg-[#BB6588] rounded-full"}
						src={
							user.image ||
							(user.id
								? `https://api.dicebear.com/9.x/icons/svg?scale=&seed=${user.id}`
								: K)
						}
					/>
					<span className={"text-text font-bold"}>
						{user.username}
					</span>
					<IconCameraOff className={"stroke-text ml-auto"} />
					<IconMicrophone className={"stroke-text"} />
					<IconCircleHalf className={"stroke-text"} />
				</div>
			</Popover.Trigger>
			<Popover.Content>
				<Flex direction="column" gap="2">
					<div>
						<TextField.Root
							ref={usernameRef}
							placeholder="New username..."
						></TextField.Root>
						<TextField.Root
							ref={avatarRef}
							placeholder="New avatar..."
						></TextField.Root>
					</div>
					<Popover.Close>
						<Button size="1" onClick={onCapture}>
							Submit
						</Button>
					</Popover.Close>
				</Flex>
			</Popover.Content>
		</Popover.Root>
	);
}

function onCapture() {
	console.log(input.currentTarget.value);
}
