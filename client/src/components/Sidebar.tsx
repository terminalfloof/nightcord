import {
	IconBan,
	IconCameraOff,
	IconChevronDown,
	IconCirclePlus,
	IconMicrophone,
	IconTypography,
	IconVolume,
} from "@tabler/icons-react";
import Moon from "./Moon.tsx";
import { cloneElement, ReactElement } from "react";
import { fileLocator } from "./MessageGroup.tsx";
import rui from "../assets/rui.png";
import UserComponent from "./User.tsx";

function Category({ icon, title }: { icon: ReactElement; title: string }) {
	return (
		<div className={"flex items-center gap-3 p-3"}>
			{cloneElement(icon, { size: 20, className: "stroke-white" })}
			<h3 className={"text-white font-mplus tracking-tight"}>{title}</h3>
		</div>
	);
}

function Channel({ name, active }: { name: string; active: boolean }) {
	return (
		<div
			style={{
				backgroundColor: active
					? "rgba(136, 130, 155, 0.4)"
					: "rgba(136, 130, 155, 0.1)",
			}}
			className={"mx-3 group p-2 rounded-lg flex gap-2.5"}
		>
			<Moon fill={active ? "#5C5475" : "#4B4265"} size={24} />
			<span className={"text-white flex-grow font-mplus tracking-tight"}>
				{name}
			</span>
			<IconCirclePlus
				className={
					"group-hover:opacity-100 transition-opacity opacity-0 fill-text"
				}
				color={active ? "#5C5475" : "#4B4265"}
				size={24}
			/>
		</div>
	);
}

type User = { name: string; active: boolean; pfp: string };

function User({ name, active, pfp }: User) {
	pfp = fileLocator.parse(pfp);

	return (
		<div
			className={
				"flex items-center gap-2.5 mx-3" +
				(!active ? " opacity-30" : "")
			}
		>
			<div className="relative select-none">
				<img
					src={pfp}
					alt={"avatar"}
					className={"rounded-full size-8"}
				/>
				{active && (
					<div
						className={
							"absolute -bottom-1 -right-1 bg-green-400 rounded-full size-3.5 border-2 border-chat"
						}
					/>
				)}
			</div>
			<span className={"text-white font-mplus font-medium"}>{name}</span>
			{active && (
				<>
					<IconCameraOff
						size={16}
						className={"stroke-text ml-auto"}
					/>
					<IconMicrophone size={16} className={"stroke-text"} />
				</>
			)}
		</div>
	);
}

const users: User[] = [
	{
		name: "floof",
		active: true,
		pfp: rui,
	},
	{
		name: "loafed",
		active: false,
		pfp: rui,
	},
	{
		name: "loofly",
		active: false,
		pfp: rui,
	},
];

function Sidebar() {
	return (
		<div className={"basis-80 shrink-0 bg-chat flex flex-col h-full"}>
			{/* Channel Name */}
			<div
				className={
					"h-16 border-b-2 border-black flex justify-between items-center p-4"
				}
			>
				<h2
					className={
						"font-mplus text-white text-xl font-medium tracking-tight"
					}
				>
					25 時、ナイトコードで。
				</h2>
				<IconChevronDown color={"white"} />
			</div>
			{/* Content */}
			<Category icon={<IconTypography />} title={"テキストチャット"} />
			<div className={"flex-col flex gap-2"}>
				<Channel name={"作業"} active={true} />
			</div>
			<Category icon={<IconVolume />} title={"ボイスチャット"} />
			<div className={"flex-col flex gap-1"}>
				{users
					.filter((user) => user.active)
					.map((user, index) => (
						<User {...user} key={index} />
					))}
			</div>
			<Category icon={<IconBan />} title={"オフライン"} />
			<div className={"flex-col flex gap-1"}>
				{users
					.filter((user) => !user.active)
					.map((user, index) => (
						<User {...user} key={index} />
					))}
			</div>
			{/* Bottom Tab */}
			<UserComponent />
		</div>
	);
}

export default Sidebar;
