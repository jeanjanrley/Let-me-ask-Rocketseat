import { useEffect, useState } from "react"
import { database } from "../services/firebase";
import { useAuth } from "./useAuth";

type FirebaseQuestions = Record<string, {
    author: {
        name: string;
        avatar: string;
    }
    content: string;
    IsAnswered: boolean;
    IsHighlighted: boolean;
    likes: Record<string, {
        authorId: string;
    }>;

}>

type QuestionType = {
    id: string;
    author: {
        name: string;
        avatar: string;
    }
    content: string;
    IsAnswered: boolean;
    IsHighlighted: boolean;
}



export function useRoom(roomId: string){
    const {user} = useAuth();
    const [questions, setQuestions] = useState<QuestionType[]>([])
    const [title, setTitle] = useState("")

    useEffect(() => {
        const roomRef = database.ref(`rooms/${roomId}`)

        roomRef.on('value', room => {
            const databaseRoom = room.val()
            const firebaseQuestions: FirebaseQuestions =  databaseRoom.questions ?? {}

            const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
                return{
                    id: key,
                    author: value.author,
                    content: value.content,
                    IsAnswered: value.IsAnswered,
                    IsHighlighted: value.IsHighlighted,
                    likeCount: Object.values(value.likes ?? {}).length,
                    hasLiked: Object.values(value.likes ?? {}).some(like => like.authorId == user?.id)
                }
            })
            
            setTitle(databaseRoom.title)
            setQuestions(parsedQuestions)
        })
    }, [roomId, user?])

    return {questions, title}
}