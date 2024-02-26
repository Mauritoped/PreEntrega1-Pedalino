const Button = (props) => {
    console.log(props)
    return <button 
    onClick={props.callback}
    style={{ background: props.Background, color: props.textColor,}} 
    className={props.className}>{props.text}
    </button>
}

export default Button;