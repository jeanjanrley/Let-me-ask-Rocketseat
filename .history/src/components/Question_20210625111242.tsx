type QuestionProps = {
    content: string;
    authotr: {
        nome: string;
        avatar: string;
    };

}

export function Question({}: QuestionProps){
    return(
        <div className="Question">
            <p{props.content}></p>
        </div>
    )
}