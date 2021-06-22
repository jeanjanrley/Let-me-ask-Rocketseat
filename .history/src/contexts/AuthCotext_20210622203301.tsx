import {createContext} from 'react'

type AuthContextType = {
    user: User | undefined;
    signInWithGoogle: () => Promise<void>;
}

type User = {
    id: string;
    nome: string;
    avatar: string;
}

type AuthContextProviderPrps

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props){
return(
    <AuthContext.Provider value={{user, signInWithGoogle}}>
        {props.children}
    </AuthContext.Provider>

)

}