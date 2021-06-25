import {createContext, ReactNode} from 'react'

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
    children: string;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps){
return(
    <AuthContext.Provider value={{user, signInWithGoogle}}>
        {props.children}
    </AuthContext.Provider>

)

}