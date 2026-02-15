const DisplayList = ({tasks}) => {
    const completedTasks = tasks.filter(task => task.isCompleted).length; //filters the number of tasks that are completed
    const incompleteTasks = tasks.filter(task => !task.isCompleted).length; //filters the number of tasks thar are incomplete
    //THIS ONE GAVE ME SUCH A HARD TIME BC I FORGOT TO PUT A D AFTER COMPLETE! It kept syaing I have 5 incomplete tasks, but I'm glad I found it!
    return (
        <>
            <ul className="listOfTasks">
                {tasks.map((task) => (
                    <li key={task.taskName}>
                        {task.isCompleted ? "✅" : "❌"}{task.taskName}
                    </li>))}
            </ul>
            <p>Completed Tasks: {completedTasks} | Incomplete Tasks: {incompleteTasks}</p>
        </>
    )
}

export default DisplayList;