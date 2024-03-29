import { createContext, ReactNode, useEffect, useState } from "react";
import { firebase, auth } from "../services/firebase";

type AuthContextType = {
	user: User | undefined;
	signInWithGoogle: () => Promise<void>;
}

type User = {
	id: string;
	nome: string;
	avatar: string;
}

type AuthContextProviderProps = {
	children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps) {

	const [user, setUser] = useState<User>();

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(user => {
			if (user) {
				const { displayName, photoURL, uid } = user;

				if (!displayName || !photoURL) {
					throw new Error("Missing information from Google account.");
				}

				setUser({
					id: uid,
					nome: displayName,
					avatar: photoURL,

				});
			}
		});

		return () => {
			unsubscribe();
		};

	}, []);


	async function signInWithGoogle() {
		const provider = new firebase.auth.GoogleAuthProvider();

		const result = await auth.signInWithPopup(provider);

		if (result.user) {
			const { displayName, photoURL, uid } = result.user;

			if (!displayName || !photoURL) {
				throw new Error("Missing information from Google account.");
			}

			setUser({
				id: uid,
				nome: displayName,
				avatar: photoURL,

			});
		}
	}


	return (
		<AuthContext.Provider value={{ user, signInWithGoogle }}>
			{props.children}
		</AuthContext.Provider>

	);

}