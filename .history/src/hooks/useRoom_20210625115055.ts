import { useState } from "react"

type FirebaseQuestions = Record<string, {
    author: {
        name: string;
        avatar: string;
    }
    content: string;
    IsAnswered: boolean;
    IsHighlighted: boolean;

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




export function useRoom(){
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
                }
            })
            
            setTitle(databaseRoom.title)
            setQuestions(parsedQuestions)
        })
    }, [roomId])

}