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
            <p>{content}</p>
            <footer>
                <div className="user-info">
                    <img src={author.avatar} alt="" />
                </div>
            </footer>
        </div>
    )
}