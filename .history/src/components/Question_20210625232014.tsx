import '../styles/question.scss'
import {ReactNode} from 'react'
import cx from 'classnames'

type QuestionProps = {
    content: string;
    author: {
        name: string;
        avatar: string;
    };
    children?: ReactNode;
    IsAnswered?: boolean;
    IsHighlighted?: boolean;
}



export function Question({
    content,
    author,
    IsAnswered = false,
    IsHighlighted = false,
    children,
}: QuestionProps){
    return(
        <div
            
            className={cx(
                'question',
                {answered: IsAnswered},
                {highlighted: IsHighlighted },
             )}
            >
            
            <p>{content}</p>
            <footer>
                <div className="user-info">
                    <img src={author.avatar} alt="author.name" />
                    <span>{author.name}</span>
                </div>
                <div>
                    {children}
                </div>
            </footer>
        </div>
    )
}