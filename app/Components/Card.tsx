type LeftProps={
    task: Task,
    setSelectedTaskid: any,
    selectedTaskid: any
    updateProgress: Function
}

export default function Card({task, setSelectedTaskid, selectedTaskid, updateProgress}: LeftProps){
    const selectTask = () => {
        console.log(task.id)
        setSelectedTaskid(task.id)
    }

    const isSelected = selectedTaskid === task.id

    return(
        <div className={`p-3 rounded-md transition-colors duration-200 cursor-pointer ${isSelected ? "bg-zinc-500 border" : "bg-zinc-900"}`} onClick={selectTask}>
            <p>{task.title}</p>
            <div className="flex mt-2">
                {[0, 25, 50, 75, 100].map(level => (
                    <button key={level}
                        onClick={(e) => {
                            e.stopPropagation()
                            updateProgress(task.id, level)
                        }}
                        className={`${task.progress === level 
                            ? (isSelected ? "bg-zinc-700" : "bg-zinc-500") 
                            : (isSelected ? "bg-zinc-800" : "bg-zinc-500")
                        } border mr-1 px-1 py-1 rounded text-xs`}>
                        {level}%
                    </button>
                ))}
            </div>
        </div>
    )
}