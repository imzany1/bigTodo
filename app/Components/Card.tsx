type LeftProps={
    task: Task,
    setSelectedTaskid: any,
    selectedTaskid: any
}

export default function Card({task, setSelectedTaskid, selectedTaskid}: LeftProps){
    const selectTask = () => {
    console.log(task.id)
    setSelectedTaskid(task.id)
}

    return(
        <div className={`p-3 rounded-md transition-colors duration-200 cursor-pointer ${(selectedTaskid == task.id)? "bg-zinc-500 border" : "bg-zinc-900 "}`} onClick={selectTask}>{task.title}</div>
    )
}