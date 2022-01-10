function Comment(props) {
    return (
        <li>{props.comment.content}
            <button onClick={() => props.removeComment(props.post, props.comment)}>X</button></li>
    )
}
export default Comment