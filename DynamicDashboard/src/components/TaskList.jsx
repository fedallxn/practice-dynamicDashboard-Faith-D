const DisplayList = ({tasks}) => {
    return (
        <ul className="listOfTasks">
            {tasks.map((task) => (
                <li key={task.taskName}>
                    {task.isCompleted ? "✅" : "❌"}{task.taskName}
                </li>))}
        </ul>
    )
}

export default DisplayList;
