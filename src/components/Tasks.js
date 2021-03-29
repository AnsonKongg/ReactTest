const Task = (props) => {
    return (
        <div>
            {props.tasks.map((task) => (
                <h3 key={task.id}>{task.text}</h3>
            ))}
        </div>
    )
}

export default Task
