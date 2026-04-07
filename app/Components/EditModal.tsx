import { createPortal } from "react-dom"

type EditModalProps ={
    selectedTask: Task
    taskList : Task[]
} 

export default function EditModal({selectedTask, taskList}: EditModalProps){
    return createPortal(
        <div className="">
            <div className="bg-black/50 h-screen fixed! z-40 w-screen top-0! left-0!"></div>
            <div className=" z-50 ">Hello</div>
        </div>,document.body
    )
}