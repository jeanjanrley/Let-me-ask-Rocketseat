type QuestionProps = {
    content: string;
    author: {
        nome: string;
        avatar: string;
    };

}

export function Question({content, author}: QuestionProps){
    return(
        <div className="Question">
            <p{props.content}></p>
        </div>
    )
}