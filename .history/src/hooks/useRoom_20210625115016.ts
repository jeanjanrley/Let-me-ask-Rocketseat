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

}