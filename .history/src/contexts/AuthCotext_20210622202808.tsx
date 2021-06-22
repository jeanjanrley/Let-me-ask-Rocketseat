export const AuthContext = createContext({} as AuthContextType);


type AuthContextType = {
    user: User | undefined;
    signInWithGoogle: () => Promise<void>;
  }
  
  type User = {
    id: string;
    nome: string;
    avatar: string;
  }

export function AuthContextProvider(){
return(

)

}