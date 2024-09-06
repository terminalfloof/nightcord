import { useState } from "react";

export default function useUserMap(id?: string) {
	const [userMap, setUserMap] = useState(new Map());

	return userMap;
}
