import { useState } from "react"
import EditModal from "./EditModal"

type rightProps = {
    taskList : Task[]
    selectedTaskid : string
}

export default function Right({taskList, selectedTaskid}: rightProps){
    const selectedTask = taskList.find((task) => task.id === selectedTaskid)
    const [editModal, setEditModal] = useState<boolean>(false)
    return(
        <div className=" border text-zinc-200 bg-zinc-800 p-2 w-[70%] rounded-lg overflow-y-auto [scrollbar-width:none] ">
            <div className="bg-zinc-900 p-2 rounded-md flex flex-col gap-2">
                <h1 className="text-2xl font-bold">{selectedTask?.title}</h1>
                <p>{selectedTask?.description}</p>
            </div>
            {(selectedTask?.id)?<div onClick={()=>{setEditModal(true)}} className=" select-none absolute right-8 bottom-8 bg-zinc-700 hover:bg-zinc-900 transition-all cursor-pointer px-5 py-2 rounded-md border ">Edit</div> : ""}
            {/* {editModal && selectedTask ? <EditModal selectedTask={selectedTask} taskList={taskList} />: ""} TODO: Complete edit logic */}
        </div>
    )
}