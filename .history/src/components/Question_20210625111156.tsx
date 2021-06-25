type QuestionProps = {
    content: string;
    authotr: {
        nome: string;
        avatar: string;
    };

}

export function Question(props: QuestionProps){
    return(
        <div className="Question">
            <p></p>
        </div>
    )
}