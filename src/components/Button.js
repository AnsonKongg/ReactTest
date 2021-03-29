const Button = (props) => {
    const onButtonClick = () => {
        console.log("Clicked");
    }

    return (
        <button
            onClick={onButtonClick}
            style={{ backgroundColor: props.color }}
            className="btn"
        >
            {props.text}
        </button>
    )
}

export default Button
