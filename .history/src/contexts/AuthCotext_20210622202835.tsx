import {}

type AuthContextType = {
    user: User | undefined;
    signInWithGoogle: () => Promise<void>;
}

type User = {
    id: string;
    nome: string;
    avatar: string;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(){
return(

)

}