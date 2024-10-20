import { User } from '@server/types';
import { createContext, useState } from 'react';

export const UserContext = createContext<{
	user: User | undefined;
	setUser: (user: User | undefined) => void;
}>({
	user: undefined,
	setUser: () => {},
});

export default function UserContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [user, setUser] = useState<User | undefined>();

	return (
		<UserContext.Provider
			value={{
				user,
				setUser,
			}}
		>
			{children}
		</UserContext.Provider>
	);
}
