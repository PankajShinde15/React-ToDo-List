

export const Task = (props) => {

    return (
        <div className="task" style={{ backgroundColor: props.completed ? "green" : "white" }}>
            <div className="taskName">{props.taskName}</div>
            <button onClick={() => props.completeTask(props.id)}>Completed</button>
            <button onClick={() => props.deleteTask(props.id)}>X</button>
        </div >
    )
}